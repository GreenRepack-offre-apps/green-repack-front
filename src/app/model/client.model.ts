import { Adresse } from './users.model';
export interface Client {
  nom:string;
  prenom:string;
  email:string;
  adresse: string;
}

export interface ClientModel {
  idcli:string;
  refmar?:string;
  nom:string;
  prenom:string;
  email:string;
  adresse: string;
}
export class ClientViewModel implements Client {
  nom!:string;
  prenom!: string;
  email!: string;
  password?: string | undefined;
  datecreate?: Date;
  adresse!: string;
  adresseModel: Adresse;
  constructor(){
    this.adresseModel = <Adresse>{}
  }


   createClient() {
     let adr = '';
    adr += (this.adresseModel.complement !== ''? this.adresseModel.complement + ', ': '') + this.adresseModel.voie + ', '
    + this.adresseModel.codePostal+' '+ this.adresseModel.ville;
     return {nom: this.nom, prenom: this.prenom, email: this.email, password: this.password, adresse: adr}
   }

}
