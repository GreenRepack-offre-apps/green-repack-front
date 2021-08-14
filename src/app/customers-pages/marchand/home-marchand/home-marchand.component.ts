import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MarchandService } from '../../../service/marchand/marchand.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AjoutProduitComponent } from '../components/ajout-produit/ajout-produit.component';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home-marchand',
  templateUrl: './home-marchand.component.html',
  styleUrls: ['./home-marchand.component.scss']
})
export class HomeMarchandComponent implements OnInit, OnDestroy {

  constructor(private fbuilder: FormBuilder,
    private marchandService: MarchandService,
    private firebaseAuth: AngularFireAuth,
    private readonly router: Router,
    public dialog: MatDialog) { }

    subs: Subscription[] = [];

  ngOnDestroy(): void {
    this.subs.forEach(s => s.unsubscribe());
  }

  title = 'Espace pour marchand. Gerez vos produits ici !!';

  ngOnInit(): void {
  }

  redirect() {
    this.firebaseAuth.signOut()
    .then(e => this.router.navigate(['connexion']))
    .catch(err => console.log('error; Can\'t logout '));
  }
  openPopinAjoutProduit() {
    const dialogRef = this.dialog.open(AjoutProduitComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
