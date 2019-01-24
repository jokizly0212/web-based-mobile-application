import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { MediaProvider } from '../../app/services/providers/media/media';
import { User, loginResponse } from '../../interfaces/user';
import { HomePage } from '../home/home';


/**
 * Generated class for the LoginRegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login-register',
  templateUrl: 'login-register.html',
})
export class LoginRegisterPage {
  user: User = {username: null, password: null};
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams, 
    private mediaProvider: MediaProvider,
    public alertCtrl: AlertController
    ) {
  }
  login() {
    this.mediaProvider.login(this.user).subscribe(
      (response: loginResponse) => {
        console.log(response);
        this.mediaProvider.loggedIn = false;
        localStorage.setItem('token', response.token);
        this.navCtrl.setRoot(HomePage);
      },
      error => {
        console.log(error);
      }
    )
  }

  register() {
    this.mediaProvider.checkUsernameExists(this.user.username).subscribe((res: any) => {
      if(res.available === true) {
        this.mediaProvider.register(this.user).subscribe((res: loginResponse) => {
          console.log(res);
          this.login();
        }),
        error => {
          console.log(error);
        }
      } else {
        const alert = this.alertCtrl.create({
          title: 'Login Error',
          subTitle: 'Please use another username',
          buttons: ['Continue']
        });
        alert.present();
      }
    })
  }
}
