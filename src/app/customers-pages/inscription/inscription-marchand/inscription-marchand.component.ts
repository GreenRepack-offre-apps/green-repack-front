import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm, FormBuilder } from '@angular/forms';
import { Marchand, MarchandViewModel } from '../../../model/marchand.model';
import { CHAMP_VIDE_MSG, CHAMP_INVALID_MSG, MDP_INVALID_MSG } from '../../../common/common';
import { AngularFireAuth } from '@angular/fire/auth';
import { MarchandService } from '../../../service/marchand/marchand.service';
import { Router } from '@angular/router';
import { Client } from '../../../model/client.model';

@Component({
  selector: 'app-inscription-marchand',
  templateUrl: './inscription-marchand.component.html',
  styleUrls: ['./inscription-marchand.component.scss']
})
export class InscriptionMarchandComponent implements OnInit {
  marchand = new MarchandViewModel;
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
    private firebaseAuth: AngularFireAuth,
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
    let marchandModel = new MarchandViewModel();
     Object.assign(marchandModel, {
      nom: nom,
      email: email,
      password: pswd,
      adresseModel: {
      voie: voie,
      complement: complement,
      codePostal: codepostal,
      ville: ville,
      client: client
    }});

    console.log('Marchand = '+ JSON.stringify(marchandModel));
    if( pswd2 === pswd && pswd  !== '') {
      this.err_send = '';

      // this.marchandService.createMarchand(marchandModel.createMarchand()).subscribe(data =>{
      //   console.log('Marchand was create with '+ data.status);
      //   if( data.status === "SUCCES") {
      //     this.firebaseAuth.createUserWithEmailAndPassword(email, pswd)
      //     .then(rst => {
      //       console.log("Inscription Marchand ..., work ");
      //       this.router.navigate(['connexion']);
      //     })
      //     .catch(err => {
      //       this.err_send = 'Erreur survenu !! /Donnee transmis sont erronnées';
      //        console.log('Inscription Marchand ..., failed');
      //       })
      //   }else{
      //     this.err_send = 'Les donnees transmis sont erronnées';
      //   }
      // });

    }else{
      this.err_send = MDP_INVALID_MSG;
    }

 }

}
