import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/common/auth/auth.service';
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
  }

  redirect() {
    this.router.navigate(['inscription']);
  }
}
