import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AjoutProduitComponent } from '../components/ajout-produit/ajout-produit.component';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { DatePipe } from '@angular/common';
import { MarchandSyntheseService } from '../../../../service/marchand/synthese/marchand-synthese.service';
import { MarchandService } from '../../../../service/marchand/marchand.service';
import { AuthService } from '../../../../service/auth.service';
import { AccordionModule } from 'primeng/accordion';
import { MarchandProfils } from '../../../../model/auth.model';
import { Marchand } from '../../../../model/marchand.model';

@Component({
  selector: 'app-home-marchand',
  templateUrl: './home-marchand.component.html',
  styleUrls: ['./home-marchand.component.scss']
})
export class HomeMarchandComponent implements OnInit, OnDestroy {

  constructor(private fbuilder: FormBuilder,
    private marchandService: MarchandService,
    private firebaseAuth: AngularFireAuth,
    private authService: AuthService,
    private readonly router: Router,
    public dialog: MatDialog,
    private syntheseMarchand: MarchandSyntheseService) { }

  subs: Subscription[] = [];
  profil = 'CLIENT';
  customer: Marchand = <Marchand>{};
  ngOnDestroy(): void {
    this.subs.forEach(s => s.unsubscribe());
  }

  title = 'Gerez vos produits à reconditioner! Acheter nos produit ici !!';

  ngOnInit(): void {
    this.authService.currentUser(new MarchandProfils()).subscribe(usr => {
      if(usr && usr.email){
        this.marchandService.searchMarchand('email',usr.email).subscribe(m => this.customer = m.value);
      }
    });
  }

  redirect() {
    this.firebaseAuth.signOut()
    .then(e => {
      this.router.navigate(['connexion']);
      sessionStorage.setItem('PROFIL', '');

    })
    .catch(err => console.log('error; Can\'t logout '));
  }
  openPopinAjoutProduit() {
    const dialogRef = this.dialog.open(AjoutProduitComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  activateClient(){
    this.marchandService.update(this.customer).subscribe(m => this.customer = m);
  }
}
