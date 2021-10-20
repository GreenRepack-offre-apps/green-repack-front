import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { ClientProfils, MarchandProfils } from '../../model/auth.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.scss']
})
export class AuthentificationComponent implements OnInit {
  title = 'Connexion';

  profil:string = 'CLIENT';
  subs: Subscription[] = [];
  constructor(private readonly router: Router,
    private authService: AuthService) { }
  ngOnDestroy(): void {
    this.subs.forEach(s => s.unsubscribe());
  }
  ngOnInit(): void {
    //if(sessionStorage.getItem('PROFILS') === this.authService.profilRegister && this.authService.profilRegister!= null) {

      if(sessionStorage.getItem('PROFILS') && sessionStorage.getItem('PROFILS') === 'client') {
        this.authService.currentUser(new ClientProfils()).subscribe(rst => {
          if( rst && rst.uid && rst.email) {
            this.router.navigate(['home/'+rst.uid]);
          }
        });
      } else if(sessionStorage.getItem('PROFILS') && sessionStorage.getItem('PROFILS') === 'marchand') {
        this.authService.currentUser(new MarchandProfils()).subscribe(rst => rst.uid !== null
          && rst.email ? this.router.navigate(['home/'+rst.uid]):null);
      }
  }

  redirect() {
    this.router.navigate(['inscription']);
  }
}
