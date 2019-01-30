import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { MediaProvider } from '../../app/services/providers/media/media';
import { LoginRegisterPage } from '../login-register/login-register';

/**
 * Generated class for the LogoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-logout',
  templateUrl: 'logout.html',
})
export class LogoutPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public mediaProvider: MediaProvider,
    public alertCtrl: AlertController
  ) {}
  logout() {
    localStorage.clear();
    this.mediaProvider.loggedIn = true;
    this.navCtrl.setRoot(LoginRegisterPage);
  }
  exitConfirm() {
    const alert = this.alertCtrl.create({
      title: 'Confirm exit',
      message: 'Are you sure you want to exit?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('No clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            console.log('Yes clicked');
            this.logout();
          }
        }
      ]
    });
    alert.present();
  }
}
