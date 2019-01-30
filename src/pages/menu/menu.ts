import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { LoginRegisterPage } from '../login-register/login-register';
import { LogoutPage } from '../logout/logout';
import { MediaProvider } from '../../app/services/providers/media/media';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-menu',
  template: `
  <ion-tabs>
    <ion-tab [show]="!mediaProvider.loggedIn"[root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>
    <ion-tab [show]="mediaProvider.loggedIn" [root]="tab2Root" tabTitle="Login" tabIcon="person"></ion-tab>
    <ion-tab [show]="!mediaProvider.loggedIn"[root]="tab3Root" tabTitle="Profile" tabIcon="contact"></ion-tab>
  </ion-tabs>`
})
export class MenuPage {
  tab1Root = HomePage;
  tab2Root = LoginRegisterPage;
  tab3Root = LogoutPage;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public mediaProvider: MediaProvider) {
  }
}
