import { Component, OnInit, OnDestroy, Input } from '@angular/core';
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
export class HomeMarchandComponent implements OnInit {

  constructor(public dialog: MatDialog){}
  @Input()
  customer!: User;

  ngOnInit(): void {
  }

  openPopinAjoutProduit() {
    const dialogRef = this.dialog.open(AjoutProduitComponent);
    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
