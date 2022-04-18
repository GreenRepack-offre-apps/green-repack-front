import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { UserProfils } from 'src/app/model/auth.model';
import { AuthService } from '../../../service/common/auth/auth.service';
import { Router } from '@angular/router';
import { CurrentUser, AdminProfils } from '../../../model/auth.model';
import { User } from '../../../model/users.model';
import { Subscription } from 'rxjs';
import { Admin, adminMailEquals } from '../../../model/admin.model';
import { UserService } from '../../../service/user/user.service';

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
    private userService: UserService,
    private readonly router: Router) {
      switch(this.authService.profilRegister?.type) {
        case 'GESTION':
          this.infoUser = new InfoUser(<Admin>{});
          this.profilActive = new AdminProfils();
          break;

        case 'USER':
          this.infoUser = new InfoUser(<User>{});
          this.profilActive = new UserProfils();
          break;
        default:
          this.infoUser = null;
      }
    }

  title = 'Green Repack';
  //imagepath='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==';
  //private imagepath = new Image();
  infoUser: any;
  profilActive: UserProfils | AdminProfils | any;
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
    .subscribe((userAuth: CurrentUser) => {
      this.user_active = userAuth.email !== null && userAuth.token !== null;
      if (!this.user_active) {
        this.router.navigate(['connexion']);
      } else {
        this.infoUser.current = userAuth;
        switch(this.authService.profilRegister?.type) {
          case 'GESTION':
            if(!adminMailEquals(userAuth.email)) this.router.navigateByUrl('admin');
            this.infoUser.user.nom = userAuth.email;
            break;

          case 'USER':
            this.userService.searchUser('email', userAuth.email)
            .subscribe(rst => {
              if (rst.status === 'SUCESS') {
                this.infoUser.user = rst.data;
              }else{
                this.infoUser.user = null;
              }
            });
            break;
          default:
            this.infoUser = null;
        }

      }
    });
  }

}
