import { Component, OnInit } from '@angular/core';
import { NavController, Picker } from 'ionic-angular';

import { PhotoViewer } from "@ionic-native/photo-viewer";
import { HttpClient } from '@angular/common/http';

import { Pic } from '../../interfaces/pic';
import { MediaProvider } from '../../app/services/providers/media/media';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
  url = 'http://media.mw.metropolia.fi/wbma/uploads/';
  picArray: Pic[] = [];
  constructor(
    public navCtrl: NavController,
    public photoViewer: PhotoViewer,
    public http: HttpClient,
    private mediaProvider: MediaProvider
  ) {}
  viewImage(imageUrl: string) {
    this.photoViewer.show(imageUrl);
  }
  ngOnInit() {
    this.mediaProvider.getAllMedia().subscribe((res: Pic[]) => {
      this.picArray = res;
      this.picArray.map(pic => {
        pic.filename = pic.filename.slice(0, -4)+'-tn160.png';
      });
      console.log(this.picArray);
    });
  }
}
