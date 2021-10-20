import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../../../service/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { ClientProfils } from '../../../model/auth.model';
import { CHAMP_INVALID_MSG } from '../../../common/common';
import { Router } from '@angular/router';
import { ClientService } from '../../../service/client/client.service';

@Component({
  selector: 'app-auth-client',
  templateUrl: './auth-client.component.html',
  styleUrls: ['./auth-client.component.scss']
})
export class AuthClientComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private fbuilder: FormBuilder,
    private firebaseAuth: AngularFireAuth,
    private clientService: ClientService,
    private readonly router: Router) { }

  err_send = '';
  messageErreur = [
    {value:'', errMsg:''}, //nom
    {value:'', errMsg:''} //pswd
  ]

  clientForm = this.fbuilder.group({
    nomControl: ['', [Validators.required, Validators.email]],
    pswdControl: ['', [Validators.required, Validators.minLength(5)]]
  });


  ngOnInit(): void {
    this.authService.currentUser(new ClientProfils()).subscribe(rst => {
      if( rst && rst.uid && rst.email) {
        this.router.navigate(['client/home/'+rst.uid])
      }
    });
    this.clientForm.valueChanges.subscribe(v => {
      const{ email, pswd } = v;
      //console.log('user change: ' + JSON.stringify(v));
       this.messageErreur[1].errMsg = pswd === '' && !(email.length >= 5)? CHAMP_INVALID_MSG:'';
       this.messageErreur[0].errMsg = email === '' && !pswd.includes('@')? CHAMP_INVALID_MSG:'';
    });
  }

  onSubmit(){
    this.firebaseAuth.signOut();
    sessionStorage.clear();
    const {nomControl, pswdControl} = this.clientForm.value;
    console.log('user : ' + nomControl);

    this.clientService.get('email',nomControl).subscribe( cl =>{
      this.err_send ='';
      if(cl){
        this.firebaseAuth.signInWithEmailAndPassword(nomControl, pswdControl)
        .then(rst =>{
            console.log("connexion start ... " + JSON.stringify(rst));
            this.err_send = '';
            sessionStorage.setItem('PROFIL', 'CLIENT'.toLowerCase());
            //sessionStorage.setItem('USER_CURRENT', nomControl);
            this.router.navigateByUrl('client/home/'+ rst.user?.uid);
        })
        .catch(err => {
          console.log("connexion fail ... " + JSON.stringify(err));
          this.err_send = 'les données renseignées sont invalid !!';
        });
      }else{
        this.err_send = 'L\'identifiant renseignées n\'est pas reconnu !!';
      }
    })

  }
}
