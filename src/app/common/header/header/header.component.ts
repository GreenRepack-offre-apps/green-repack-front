import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { MarchandProfils } from 'src/app/model/auth.model';
import { AuthService } from '../../../service/auth.service';
import { Router } from '@angular/router';
import { MarchandService } from '../../../service/marchand/marchand.service';
import { CurrentUser } from '../../../model/auth.model';
import { MarchandSearch } from '../../../model/common.model';
import { Marchand } from '../../../model/marchand.model';
import { Subscription } from 'rxjs';

export interface InfoUser<T> {
  current: CurrentUser;
  user: T;
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, DoCheck {

  constructor(private authService: AuthService,
    private marchandService: MarchandService,
    private readonly router: Router) { }

  title = 'Green Repack';
  infoUser: InfoUser<Marchand> = <InfoUser<Marchand>>{};
  user_active: boolean = false;
  subcriptions: Subscription[] = [];
  ngOnInit(): void {
    this.checkUser();
  }

  ngDoCheck(){
    //this.checkUser();
  }

  // ngOnDestroy(){
  //   this.subcriptions.forEach(s => s.unsubscribe);
  // }

  checkUser(){
    this.authService.currentUser(new MarchandProfils)
    .subscribe((user: CurrentUser) => {
      this.user_active = user.email !== null && user.token !== null;
      if (!this.user_active) {
        this.router.navigate(['connexion']);
      } else {
        this.infoUser.current = user;
        this.marchandService.searchMarchand('email', user.email)
        .subscribe(rst => {
          if(rst.value.email !== user.email ) this.router.navigateByUrl('connexion');
          this.infoUser.user = rst.value;
        })
      }
    });
  }

}
