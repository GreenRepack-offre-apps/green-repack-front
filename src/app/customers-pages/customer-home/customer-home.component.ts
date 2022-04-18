import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserProfils } from '../../model/auth.model';
import { AuthService } from '../../service/common/auth/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../../model/users.model';
import { UserService } from '../../service/user/user.service';

@Component({
  selector: 'app-customer-home',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.scss']
})
export class CustomerHomeComponent implements OnInit, OnDestroy {

  constructor(private userService: UserService,
    private authService: AuthService,
    private readonly router: Router) { }

  subs: Subscription[] = [];
  profil = 'MARCHAND';
  customer: User = <User>{};

  ngOnDestroy(): void {
    this.subs.forEach(s => s.unsubscribe());
  }

  title = 'Gerez vos produits à reconditioner! Acheter nos produits ici !!';

  ngOnInit(): void {   this.authService.currentUser(new UserProfils()).subscribe(usr => {
      if(usr && usr.email){
        if(this.userService.customer != null){
          this.customer = this.userService.customer;
        } else {
          this.userService.searchUser('email', usr.email).subscribe(m => {
            this.customer = m.data;
            console.log("customer ="+JSON.stringify(this.customer));
          });
        }
        this.profil = this.customer.ismarchand ? 'MARCHAND' : 'CLIENT';
      }
    });
  }

  redirect() {
    this.authService.forceLogout();
  }

  activateClient(){
    this.userService
    .update({isclient: true},
      this.customer.iduser).subscribe(m => this.customer = m);
  }
  activateMarchand(){
    this.userService
    .update({ismarchand: true},
      this.customer.iduser).subscribe(m => this.customer = m);
  }

}
