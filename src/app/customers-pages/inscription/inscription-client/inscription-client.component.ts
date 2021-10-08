import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { CHAMP_INVALID_MSG, MDP_INVALID_MSG } from '../../../common/common';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { MarchandViewModel } from '../../../model/marchand.model';
import { ClientViewModel } from '../../../model/client.model';
import { ClientService } from '../../../service/client/client.service';

@Component({
  selector: 'app-inscription-client',
  templateUrl: './inscription-client.component.html',
  styleUrls: ['./inscription-client.component.scss']
})
export class InscriptionClientComponent implements OnInit {


  constructor(private fbuilder: FormBuilder,
    private firebaseAuth: AngularFireAuth,
    private clientService: ClientService,
    private readonly router: Router) { }

  err_champs: string = CHAMP_INVALID_MSG;
  err_send = '';

  clientForm: FormGroup = this.fbuilder.group({
    nom: new FormControl('', Validators.required),
    prenom: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    voie: new FormControl('', Validators.required),
    complement: new FormControl(''),
    codepostal: new FormControl('', Validators.required),
    ville: new FormControl('', Validators.required),
    pswd: new FormControl('', [Validators.required,  Validators.minLength(5)]),
    pswd2: new FormControl('', [Validators.required,  Validators.minLength(5)]),

  });

  messageErreur = [
    {value:'', errMsg:''}, //nom
    {value:'', errMsg:''}, //prenom
    {value:'', errMsg:''}, //email
    {value:'', errMsg:''}, //voie
    {value:'', errMsg:''}, //codep
    {value:'', errMsg:''}, //ville
    {value:'', errMsg:''}, //motdepasse
    {value:'', errMsg:''} //confirm mdp
  ]


  ngOnInit(): void {
    this.clientForm.valueChanges.subscribe(v => {

      //const {nom, email, voie, complement, codepostal, ville, pswd, pswd2} = v;
      console.log("nouveau client "+ JSON.stringify(v));
      this.messageErreur[0].errMsg =  this.clientForm.controls.nom.touched && this.clientForm.controls.nom.hasError('required')? CHAMP_INVALID_MSG:'';
    });
  }



  updateNom() {
    this.clientForm.controls.nom.valueChanges.subscribe(v => console.log("nouveau marchand "+ v));
  }

 onSubmit() {

    const {nom, prenom, email, voie, complement, codepostal, ville, pswd, pswd2} = this.clientForm.value;

    let model = new ClientViewModel();
    Object.assign(model, {
      nom: nom,
      prenom:prenom,
      email: email,
      password: pswd,
      adresseModel: {
      voie: voie,
      complement: complement,
      codePostal: codepostal,
      ville: ville
    }});

    console.log('Client = '+ JSON.stringify(model) );
    if( pswd2 === pswd && pswd  !== '') {
      this.err_send = '';
      this.clientService.add(model.createClient()).subscribe(data =>{
        if(data == true) {
          this.err_send = '';
          this.firebaseAuth.createUserWithEmailAndPassword(email, pswd)
          .then(rst => {
            console.log("Inscription client ..., work ");
            this.router.navigate(['connexion']);
          })
          .catch(err => {
            this.err_send = 'Erreur survenu !! /Donnee transmis sont erronnées';
             console.log('Inscription Marchand ..., failed');
            })
        }else{
          this.err_send = 'Les donnees transmis sont erronnées';
        }
      });

    }else{
      this.err_send = MDP_INVALID_MSG;
    }
  }
}
