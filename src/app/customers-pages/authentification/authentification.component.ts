import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.scss']
})
export class AuthentificationComponent implements OnInit {
  title = 'Connexion';

  profil:string = 'CLIENT';

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
  }

  redirect() {
    this.router.navigate(['inscription']);
  }
}
