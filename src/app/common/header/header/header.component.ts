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
import { Client, ClientModel } from '../../../model/client.model';
import { ClientService } from '../../../service/client/client.service';

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
    private clientService: ClientService,
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
          this.infoUser = new InfoUser(<ClientModel>{});
          this.profilActive = new ClientProfils();
          break;

        default:
          this.infoUser = null;
      }
    }

  title = 'Green Repack';
  //imagepath='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==';
  //private imagepath = new Image();
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
            this.clientService.get('email', user.email)
            .subscribe(rst => {
              if(rst){
                this.infoUser.user = rst;
              }else{

                this.router.navigateByUrl('connexion');
              }
            })
            break;
          default:
            this.infoUser = null;
        }

      }
    });
  }

}
