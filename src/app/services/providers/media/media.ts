import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User, loginResponse } from '../../../../interfaces/user';

/*
  Generated class for the MediaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MediaProvider {
  mediaAPI = "http://media.mw.metropolia.fi/wbma/";
  loggedIn = true;
  constructor(public http: HttpClient) {
  }
  getAllMedia = () => this.http.get(this.mediaAPI + 'media/');
  getSingleMedia = (id) => {
    this.http.get(this.mediaAPI + 'media/'+id);
  }
  login(user: User) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }
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
}
