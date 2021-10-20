import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../../service/auth.service';
import { CurrentUser } from '../../../../model/auth.model';


@Component({
  selector: 'app-home-client',
  templateUrl: './home-client.component.html',
  styleUrls: ['./home-client.component.scss']
})
export class HomeClientComponent implements OnInit {

  constructor( private authService: AuthService, private readonly router: Router) { }

  current_user: CurrentUser = <CurrentUser>{};
  title = 'Espace client et achats';
  pageType = 'DEFAULT';
  pages = ['achats', 'panier', 'projets associatifs']

  ngOnInit(): void {
    //console.log("Profil en cours: " + this.authService.profilRegister);
    // this.authService.currentUser(new ClientProfils()).subscribe(rst => {
    //   if(rst && rst.uid){
    //     this.current_user = rst;
    //   // } else {
    //   //   this.redirect();
    //   }
    // });
  }

  redirect() {
    this.authService.forceLogout('connexion');
  }

}
