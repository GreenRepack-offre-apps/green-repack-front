import { ProduitData } from './produit.model';

export interface User {
  iduser?: string;
  nom: string;
  email: string;
  datecreation?: string;
  adresse?: string;
  isclient:boolean;
  ismarchand:boolean;
  // constructor(){
  //   this.nom = "";
  //   this.email = ""
  //   this.adresse = "";
  //   this.client = false;
  // }
}

export interface Adresse {
  voie: string;
  complement?: string;
  codePostal: string;
  ville: string;
}

export class UserFormPayload {
  nom: string;
  email: string;
  adresse: Adresse;
  client: boolean;
  marchand: boolean;

  constructor(nom: string, email: string, client: boolean,
    marchand: boolean,
    adresse: Adresse){
    this.nom = nom;
    this.email = email;
    this.client = client;
    this.marchand = marchand;
    this.adresse = adresse;
  }


  createUser() {
    let adr = '';
    adr += (this.adresse.complement !== ''? this.adresse.complement + ', ': '') + this.adresse.voie + ', '
    + this.adresse.codePostal+' '+ this.adresse.ville;
     return {nom: this.nom, email: this.email, adresse: adr, isclient: this.client, ismarchand: this.marchand}
  }

}

// firebase database
export interface MarchandData {
  email?: string;
  produits?:ProduitData[] | null;
}
