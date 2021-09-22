import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OneSignalNotifService {

  constructor() { }
  async onLoad(): Promise<any> {
    window.OneSignal = window.OneSignal || [];
    return new Promise((resolve) => {
      window.OneSignal.push(function() {
        resolve(window.OneSignal);
      });
    });
  }

  onInit():void {
    this.onLoad().then((OneSignal)=>{
      OneSignal.init({
        appId: environment.onesignal_appId,
      });
    });
  }

  onUserCreate(idUser:string):void {
    this.onLoad().then((OneSignal)=>{
      OneSignal.setExternalUserId(idUser);
    });
  }

  // onNotifActive():void {
  //   new Promise(()=> {
  //     window.OneSignal.push(function() {
  //       window.OneSignal.isPushNotificationsEnabled();
  //     });
  //   }
  //   })
  //   this.onLoad().then((OneSignal)=>{
  //     OneSignal.isPushNotificationsEnabled().;
  //   });
  //   window.OneSignal.push(function() {
  //     window.OneSignal.isPushNotificationsEnabled({

  //     }
  //   });
  // }
  // appRouteto(){
  //   app().post('/notifs', function(req, rep) {
  //     rep.send({a:"b"});
  //   });
  // }

}
