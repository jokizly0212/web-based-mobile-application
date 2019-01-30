import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User, loginResponse } from '../../../../interfaces/user';
import { Media } from '../../../../interfaces/pic';

/*
  Generated class for the MediaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MediaProvider {
  mediaAPI = "http://media.mw.metropolia.fi/wbma/";
  loggedIn = true;
  user: User = {username:null, password: null};
  constructor(public http: HttpClient) {
  }
  getAllMedia = () => this.http.get(this.mediaAPI + 'media/');
  getSingleMedia = (id) => {
    this.http.get(this.mediaAPI + 'media/'+id);
  }
  getUserAvatar(id) {
    return this.http.get(this.mediaAPI + 'media/'+id);
  }
  login(user: User) {
    return this.http.post<loginResponse>(this.mediaAPI +'login/', {
      username: user.username,
      password: user.password
    });
  }
  register(user: User) {
    return this.http.post<loginResponse>(this.mediaAPI +'users/', user);
  }
  checkUsernameExists(username: String) {
    return this.http.get(this.mediaAPI+'users/username/'+username);
  }
  getFilesByTag(tag) {
    // single file
    return this.http.get<Media[]>(this.mediaAPI + 'tags/' + tag);
  }
}
