import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {

  title = 'Inscription';

  profil:string = 'CLIENT';

  constructor(private readonly router: Router) { }

  ngOnInit(): void {

  }

  redirect() {
    this.router.navigate(['connexion']);
  }

}
