import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MarchandProfils, AdminProfils } from '../../../model/auth.model';
import { CHAMP_INVALID_MSG } from '../../../common/common';
import { AngularFireAuth } from '@angular/fire/auth';
import { adminMailEquals } from '../../../model/admin.model';

@Component({
  selector: 'app-auth-dialog',
  templateUrl: './auth-dialog.component.html',
  styleUrls: ['./auth-dialog.component.scss']
})
export class AuthDialogComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private fbuilder: FormBuilder,
    private firebaseAuth: AngularFireAuth,
     private readonly router: Router) { }

  err_send = '';
  messageErreur = [
    {value:'', errMsg:''}, //nom
    {value:'', errMsg:''} //pswd
  ]

  adminForm = this.fbuilder.group({
    nomControl: ['', [Validators.required, Validators.email]],
    pswdControl: ['', [Validators.required, Validators.minLength(5)]]
  });


  ngOnInit(): void {
    this.adminForm.valueChanges.subscribe(v => {
      const{ email, pswd }  = v;
      //console.log('user change: ' + JSON.stringify(v));
      this.messageErreur[1].errMsg = pswd === '' && !(email.length >= 5)? CHAMP_INVALID_MSG:'';
      this.messageErreur[0].errMsg = email === '' && !pswd.includes('@')? CHAMP_INVALID_MSG:'';
    });
    this.adminForm.controls.nomControl.setValue('green-repack@admin.com');
  }

  formValid = () => this.adminForm.controls.nomControl.valid && this.adminForm.controls.pswdControl.valid;

  onSubmit(){
    const {nomControl, pswdControl} = this.adminForm.value;
    console.log('user : ' + nomControl);
    if(adminMailEquals(nomControl)){
      this.firebaseAuth.signInWithEmailAndPassword(nomControl, pswdControl)
      .then(rst =>{
          console.log("connexion start ... " + JSON.stringify(rst));
          this.err_send = '';
          sessionStorage.setItem('PROFIL', 'GESTION'.toLowerCase());
          //this.router.navigate(['/marchand/home/'+rst.user?.uid]);
      })
      .catch(err => {
        console.log("connexion fail ... " + JSON.stringify(err));
        this.err_send = 'les données renseignées sont invalid !!';
      });
    }

  }

}
