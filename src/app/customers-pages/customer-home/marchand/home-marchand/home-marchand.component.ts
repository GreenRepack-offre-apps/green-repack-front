import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AjoutProduitComponent } from '../components/ajout-produit/ajout-produit.component';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { DatePipe } from '@angular/common';
import { AuthService } from '../../../../service/common/auth/auth.service';
import { UserProfils } from '../../../../model/auth.model';
import { User } from '../../../../model/users.model';
import { UserService } from '../../../../service/user/user.service';

@Component({
  selector: 'app-home-marchand',
  templateUrl: './home-marchand.component.html',
  styleUrls: ['./home-marchand.component.scss']
})
export class HomeMarchandComponent implements OnInit, OnDestroy {

  constructor(private fbuilder: FormBuilder,
    private userService: UserService,
    private firebaseAuth: AngularFireAuth,
    private authService: AuthService,
    private readonly router: Router,
    public dialog: MatDialog) { }

  subs: Subscription[] = [];
  profil = 'MARCHAND';
  customer: User = <User>{};
  ngOnDestroy(): void {
    this.subs.forEach(s => s.unsubscribe());
  }

  title = 'Gerez vos produits à reconditioner! Acheter nos produit ici !!';

  ngOnInit(): void {
    this.authService.currentUser(new UserProfils()).subscribe(usr => {
      if(usr && usr.email){
        this.userService.searchUser('email',usr.email).subscribe(m => {
          this.customer = m.value;
          console.log("Marchand customer ="+JSON.stringify(this.customer));
        });
      }
    });
  }

  redirect() {
    this.firebaseAuth.signOut()
    .then(e => {
      this.router.navigate(['connexion']);
      sessionStorage.removeItem('PROFIL');
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
    this.userService.update(this.customer).subscribe(m => this.customer = m);
  }
}
