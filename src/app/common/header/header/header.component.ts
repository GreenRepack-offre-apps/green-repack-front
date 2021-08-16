import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { MarchandProfils } from 'src/app/model/auth.model';
import { AuthService } from '../../../service/auth.service';
import { Router } from '@angular/router';
import { MarchandService } from '../../../service/marchand/marchand.service';
import { CurrentUser, AdminProfils, ClientProfils } from '../../../model/auth.model';
import { MarchandSearch } from '../../../model/common.model';
import { Marchand } from '../../../model/marchand.model';
import { Subscription } from 'rxjs';
import { Admin, adminMailEquals } from '../../../model/admin.model';
import { Client } from '../../../model/client.model';

export class InfoUser<T> {
  current: CurrentUser;
  user: T;
  constructor(t:T) {
    this.user = t;
    this.current = <CurrentUser>{};
  }
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, DoCheck {

  constructor(private authService: AuthService,
    private marchandService: MarchandService,
    private readonly router: Router) {
      switch(this.authService.profilRegister?.type) {
        case 'GESTION':
          this.infoUser = new InfoUser(<Admin>{});
          this.profilActive = new AdminProfils();
          break;

        case 'MARCHAND':
          this.infoUser = new InfoUser(<Marchand>{});
          this.profilActive = new MarchandProfils();
          break;

        case 'CLIENT':
          this.infoUser = new InfoUser(<Client>{});
          this.profilActive = new ClientProfils();
          break;

        default:
          this.infoUser = null;
      }
    }

  title = 'Green Repack';
  infoUser: any;
  profilActive: MarchandProfils | AdminProfils | ClientProfils | any;
  user_active: boolean = false;
  subcriptions: Subscription[] = [];
  ngOnInit(): void {
    if(this.infoUser){
      this.checkUser();
    }
  }

  ngDoCheck(){
    //this.checkUser();
  }

  // ngOnDestroy(){
  //   this.subcriptions.forEach(s => s.unsubscribe);
  // }

  checkUser(){

    this.authService.currentUser(this.profilActive)
    .subscribe((user: CurrentUser) => {
      this.user_active = user.email !== null && user.token !== null;
      if (!this.user_active) {
        this.router.navigate(['connexion']);
      } else {
        this.infoUser.current = user;
        switch(this.authService.profilRegister?.type) {
          case 'GESTION':
            if(!adminMailEquals(user.email)) this.router.navigateByUrl('admin');
            this.infoUser.user.nom = user.email;
            break;

          case 'MARCHAND':
            this.marchandService.searchMarchand('email', user.email)
            .subscribe(rst => {
              if(rst.value.email !== user.email ) this.router.navigateByUrl('connexion');
              this.infoUser.user = rst.value;
            })
            break;

          case 'CLIENT':
            /**
             * not implemented yet
             */
            this.infoUser.user.nom = ''
            break;

          default:
            this.infoUser = null;
        }

      }
    });
  }

}
