import { AfterContentChecked, AfterContentInit, Component, OnInit } from '@angular/core';
import { AuthDialogComponent } from '../components/auth-dialog/auth-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { AdminProfils } from 'src/app/model/auth.model';
import { AuthService } from 'src/app/service/common/auth/auth.service';
import { Router } from '@angular/router';
import { adminMailEquals } from '../../model/admin.model';
import { MatIconRegistry } from '@angular/material/icon';
import { OneSignalNotifService } from '../../service/notifications/one-signal-notif.service';

@Component({
  selector: 'app-gestion-green-repack',
  templateUrl: './gestion-green-repack.component.html',
  styleUrls: ['./gestion-green-repack.component.scss']
})
export class GestionGreenRepackComponent implements OnInit, AfterContentInit {

  constructor(public dialog: MatDialog, private authService: AuthService, private readonly router: Router,
    private notificationService: OneSignalNotifService) { }
  iconHome: MatIconRegistry = <MatIconRegistry>{};
  isFecth: boolean = false;
  title = 'Espace Gestion Green Repack';
  pageType = 'DEFAULT';
  pages = ['Demandes de produit reconditionner','Demandes de projets associatifs', 'Paramètre clients & gestion']
  showNotif = false;
  nbNotifs = 3;
  ngAfterContentInit(): void {
    if(this.isFecth === false) {
      this.authService.currentUser(new AdminProfils()).subscribe(rst => {

        if(rst.uid !== null && rst.token  && rst.email && adminMailEquals(rst.email)) {
          this.router.navigate(['admin/'+rst.uid]);
        } else {
          this.openPopinAuthentAdmin();
        }
      });
    }
  }

  ngOnInit(): void {
    Object.assign(this.iconHome, {iconName: 'home'})
    console.log("Profil en cours: " + this.authService.profilRegister);
    this.authService.currentUser(new AdminProfils()).subscribe(rst => {
      if(window.location.href.includes(rst.uid)){
        this.isFecth = true;
      }else if(rst.uid !== null && rst.token  && rst.email && adminMailEquals(rst.email)) {
        this.router.navigate(['admin/'+rst.uid]);
      } else {
        //this.router.navigate(['admin']);
        this.isFecth = false;
      }
    });
  }

  redirect() {
    this.authService.forceLogout('admin');
  }

  openPopinAuthentAdmin() {
    const dialogRef = this.dialog.open(AuthDialogComponent);
    dialogRef.afterClosed().subscribe((result: boolean) => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
