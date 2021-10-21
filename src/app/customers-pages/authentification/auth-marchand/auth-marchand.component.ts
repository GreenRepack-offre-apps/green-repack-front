import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CHAMP_INVALID_MSG } from '../../../common/common';
import { AuthService } from '../../../service/common/auth/auth.service';

@Component({
  selector: 'app-auth-marchand',
  templateUrl: './auth-marchand.component.html',
  styleUrls: ['./auth-marchand.component.scss']
})
export class AuthMarchandComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private fbuilder: FormBuilder) { }

  //@Input() profil:string = '';
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
    //sessionStorage.setItem('PROFIL','');
    this.marchandForm.valueChanges.subscribe(v => {
      const{ email, pswd }  = v;
      //console.log('user change: ' + JSON.stringify(v));
       this.messageErreur[1].errMsg = pswd === '' && !(email.length >= 5)? CHAMP_INVALID_MSG:'';
       this.messageErreur[0].errMsg = email === '' && !pswd.includes('@')? CHAMP_INVALID_MSG:'';
    });
  }

  onSubmit(){
    const {nomControl, pswdControl} = this.marchandForm.value;

    this.err_send = '';
    // check with api if marchand exist in db.
    this.authService.signIn({username:nomControl, password:pswdControl})
    .then(rst =>{
      if(rst && rst.status){
        this.err_send = rst.status;
      }
    });
  }

}
