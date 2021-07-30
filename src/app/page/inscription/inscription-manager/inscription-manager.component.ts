import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Marchand, MarchandViewModel } from '../../../model/manager.model';
import { CHAMP_VIDE_MSG } from '../../../common/common';

@Component({
  selector: 'app-inscription-manager',
  templateUrl: './inscription-manager.component.html',
  styleUrls: ['./inscription-manager.component.scss']
})
export class InscriptionManagerComponent implements OnInit {
  marchand = new MarchandViewModel;
  nom_val: string = 'tototo'
  passwordConfirm: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  messageErreur = [
    {value:'', errMsg:''}, //nom
    {value:'', errMsg:''}, //email
    {value:'', errMsg:''}, //voie
    {value:'', errMsg:''}, //codep
    {value:'', errMsg:''}, //ville
    {value:'', errMsg:''}, //motdepasse
    {value:'', errMsg:''} //confirm mdp
  ]

 onSubmit(form: NgForm) {

   //if(form.value.validate) {
     const marchandModel = {nom: form.value.name, email: form.value.email,
       password: form.value.pswd,
       adresseModel: {
        voie:  form.value.voie,
        complement: form.value.complement,
        codePostal: form.value.codePostal,
        ville: form.value.ville
       }};

       this.passwordConfirm = form.value.psw2;
       this.valideBaseInfo();
       this.validAdresse();
   //}
 }

  // setNom(value:string) {
  //   this.marchand.nom = value;
  //   console.log('nom de Marchand = '+ value + ' vs '+ this.marchand.nom);
  // }
  // setEmail(value:string) {
  //   this.marchand.nom = value;
  //   console.log('email de Marchand = '+ value + ' vs ' + this.marchand.email);
  // }
  // setPswd(event:any) {
  //   this.marchand.password = event.value;
  //   console.log('Password de Marchand = '+ event.value + ' vs '+this.marchand.password);
  // }



  valideBaseInfo(): boolean {
    this.messageErreur[0].errMsg = this.marchand.adresseModel.voie !== '' ? '': CHAMP_VIDE_MSG;
    this.messageErreur[1].errMsg = this.marchand.adresseModel.voie !== '' ? '': CHAMP_VIDE_MSG;
    let hasError = false;
    if(this.marchand.password === '') {
        console.log("Le mot de passe n\'est pas enseigné !");
        this.messageErreur[5].errMsg = 'Le mot de passe n\'est pas enseigné !';
        hasError = true;
    } else {
        this.messageErreur[5].errMsg = '';
    }

    if(this.marchand.password !== this.passwordConfirm) {
      console.log("Les mots de passe ne correspondent pas !");
      this.messageErreur[6].errMsg = 'Les mots de passe ne correspondent pas !';
      hasError = true;
    } else {
      this.messageErreur[6].errMsg = '';
    }
    return !hasError &&  this.messageErreur[0].errMsg !== '' && this.messageErreur[0].errMsg !== '';
  }

  validAdresse(): boolean {
    this.messageErreur[2].errMsg = this.marchand.adresseModel.voie !== '' ? '': CHAMP_VIDE_MSG;
    this.messageErreur[3].errMsg = this.marchand.adresseModel.codePostal !== '' ? '':CHAMP_VIDE_MSG;
    this.messageErreur[4].errMsg = this.marchand.adresseModel.ville !== '' ? '':CHAMP_VIDE_MSG;
    return  this.messageErreur[2].errMsg !== '' &&   this.messageErreur[3].errMsg !== '' &&  this.messageErreur[4].errMsg !== '';
  }

}
