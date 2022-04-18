import { Component, OnInit } from '@angular/core';
import { UserProfils } from '../../model/auth.model';
import { AuthService } from '../../service/common/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-home',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.scss']
})
export class CustomerHomeComponent implements OnInit {

  constructor(private authService: AuthService, private readonly router: Router) {
    if(sessionStorage.getItem('PROFILS') && sessionStorage.getItem('PROFILS') === 'client') {
      this.home_page_owner = 'client';
    } else if(sessionStorage.getItem('PROFILS') && sessionStorage.getItem('PROFILS') === 'marchand') {
      this.home_page_owner = 'marchand';
    }
   }

  home_page_owner: string = '';
  session=false;
  ngOnInit(): void {
    if(this.home_page_owner !== '') {
        if(this.home_page_owner === 'client'){

        }
    } else if(sessionStorage.getItem('PROFILS') && sessionStorage.getItem('PROFILS') === 'marchand') {
      this.home_page_owner = 'marchand';
      this.authService.currentUser(new UserProfils()).subscribe(rst => {
        this.home_page_owner = 'marchand';
        if( rst && rst.uid && rst.email) {
          this.home_page_owner = 'marchand';
          this.session = true;
        }
      });
    }else{
      this.router.navigate(['connexion']);
    }
  }

}
