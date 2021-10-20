import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { CHAMP_INVALID_MSG } from '../../../common/common';
import { Router } from '@angular/router';
import { AuthService } from '../../../service/auth.service';
import { MarchandProfils } from 'src/app/model/auth.model';

@Component({
  selector: 'app-auth-marchand',
  templateUrl: './auth-marchand.component.html',
  styleUrls: ['./auth-marchand.component.scss']
})
export class AuthMarchandComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private fbuilder: FormBuilder,
    private firebaseAuth: AngularFireAuth,
     private readonly router: Router) { }
  @Input() profil:string = '';
  err_send = '';
  messageErreur = [
    {value:'', errMsg:''}, //nom
    {value:'', errMsg:''} //pswd
  ]

  marchandForm = this.fbuilder.group({
    nomControl: ['', [Validators.required, Validators.email]],
    pswdControl: ['', [Validators.required, Validators.minLength(5)]]
  });


  ngOnInit(): void {
    sessionStorage.setItem('PROFIL','');
    this.marchandForm.valueChanges.subscribe(v => {
      const{ email, pswd }  = v;
      //console.log('user change: ' + JSON.stringify(v));
       this.messageErreur[1].errMsg = pswd === '' && !(email.length >= 5)? CHAMP_INVALID_MSG:'';
       this.messageErreur[0].errMsg = email === '' && !pswd.includes('@')? CHAMP_INVALID_MSG:'';
    });
  }

  onSubmit(){
    this.firebaseAuth.signOut();
    const {nomControl, pswdControl} = this.marchandForm.value;
    console.log('user : ' + nomControl);
    this.firebaseAuth.signInWithEmailAndPassword(nomControl, pswdControl)
    .then(rst =>{
        console.log("connexion start ... " + JSON.stringify(rst));
        this.err_send = '';
        sessionStorage.setItem('PROFIL', this.profil);
        //sessionStorage.setItem('USER_CURRENT', nomControl);
        this.router.navigate(['home/'+rst.user?.uid]);
    })
    .catch(err => {
      console.log("connexion fail ... " + JSON.stringify(err));
      this.err_send = 'les données renseignées sont invalid !!';
    });
  }

}
