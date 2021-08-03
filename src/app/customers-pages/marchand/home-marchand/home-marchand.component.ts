import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MarchandService } from '../../../service/marchand/marchand.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-marchand',
  templateUrl: './home-marchand.component.html',
  styleUrls: ['./home-marchand.component.scss']
})
export class HomeMarchandComponent implements OnInit {

  constructor(private fbuilder: FormBuilder,
    private marchandService: MarchandService,
    private firebaseAuth: AngularFireAuth,
    private readonly router: Router) { }

  title = 'Espace pour marchand. Gerez vos produits ici !!';

  profil:string = 'MARCHAND';

  ngOnInit(): void {
  }

  redirect() {
    this.router.navigate(['connexion']);
  }
}
