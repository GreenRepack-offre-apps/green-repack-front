import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm, FormBuilder } from '@angular/forms';
import { MarchandFormPayload } from '../../../model/marchand.model';
import { CHAMP_INVALID_MSG, MDP_INVALID_MSG } from '../../../common/common';
import { MarchandService } from '../../../service/marchand/marchand.service';
import { Router } from '@angular/router';
import { AuthService } from '../../../service/common/auth/auth.service';

@Component({
  selector: 'app-inscription-marchand',
  templateUrl: './inscription-marchand.component.html',
  styleUrls: ['./inscription-marchand.component.scss']
})
export class InscriptionMarchandComponent implements OnInit {
  
  err_champs: string = CHAMP_INVALID_MSG;
  err_send = '';
  clientOption = new FormControl(false);
  marchandForm: FormGroup = this.fbuilder.group({
    nom: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    voie: new FormControl('', Validators.required),
    complement: new FormControl(''),
    codepostal: new FormControl('', Validators.required),
    ville: new FormControl('', Validators.required),
    pswd: new FormControl('', [Validators.required,  Validators.minLength(5)]),
    pswd2: new FormControl('', [Validators.required,  Validators.minLength(5)]),
    client: this.clientOption
  });

  constructor(private fbuilder: FormBuilder,
    private marchandService: MarchandService,
    private authService: AuthService,
    private readonly router: Router) { }

  ngOnInit(): void {
    // this.marchandForm.valueChanges.subscribe(v => {

    //   //const {nom, email, voie, complement, codepostal, ville, pswd, pswd2} = v;
    //   console.log("nouveau marchand "+ JSON.stringify(v));
    //   this.messageErreur[0].errMsg =  this.marchandForm.controls.nom.touched && this.marchandForm.controls.nom.hasError? CHAMP_INVALID_MSG:'';
    // });
  }



  updateNom() {
    this.marchandForm.controls.nom.valueChanges.subscribe(v => console.log("nouveau marchand "+ v));
  }

 onSubmit() {
    const {nom, email, voie, complement, codepostal, ville, pswd, pswd2, client} = this.marchandForm.value;
    console.log('Marchand with client  = '+ client);

    if( pswd2 === pswd && pswd  !== '') {
      const marchandModel = new MarchandFormPayload(nom, email, client,
        {voie: voie, complement: complement, codePostal: codepostal, ville: ville});
      this.err_send = '';
      this.marchandService.createMarchand(marchandModel.createMarchand()).subscribe(data => {
        console.log('Marchand was create with '+ data.status);
        if( data.status === "SUCCES") {
          this.authService.signOut({username:email, password:pswd});
        }else{
          this.err_send = 'Les donnees transmises sont erronnées !';
        }
      });

    }else{
      this.err_send = MDP_INVALID_MSG;
    }

 }

}
