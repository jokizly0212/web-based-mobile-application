import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PhotoViewer } from "@ionic-native/photo-viewer";
import { HttpClient } from '@angular/common/http';

import { Pic } from '../../interfaces/pic';

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
  ) {}
  viewImage(imageUrl: string) {
    this.photoViewer.show(imageUrl);
  }
  ngOnInit() {
    this.http.get('http://media.mw.metropolia.fi/wbma/media/').subscribe((res: Pic[]) => {
      this.picArray = res;
      console.log(res);
    });
  }
}
