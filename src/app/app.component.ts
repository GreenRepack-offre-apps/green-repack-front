import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { OneSignalNotifService } from './service/notifications/one-signal-notif.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Green Repack';
  constructor(private notificationService: OneSignalNotifService, private routeActived: ActivatedRoute){}

  ngOnInit(): void {
    //this.notificationService.onInit();
    console.log("current route => " + window.location.href);
    //this.notificationService.onUserCreate("ex82ZuzFB4P4h3kFy3nKlThb5FR2");
  }
}
