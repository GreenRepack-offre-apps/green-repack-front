import { ProduitData } from './produit.model';

export interface Marchand {
  idmar?: string;
  nom: string;
  email: string;
  datecreation?: string;
  adresse?: string;
  client:boolean;

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

export class MarchandFormPayload {
  nom: string;
  email: string;
  adresse: Adresse;
  client:boolean;

  constructor(nom: string, email: string, client: boolean, adresse: Adresse){
    this.nom = nom;
    this.email = email;
    this.client = client;
    this.adresse = adresse;
  }


  createMarchand() {
    let adr = '';
    adr += (this.adresse.complement !== ''? this.adresse.complement + ', ': '') + this.adresse.voie + ', '
    + this.adresse.codePostal+' '+ this.adresse.ville;
     return {nom: this.nom, email: this.email, adresse: adr, client: this.client}
  }

}

// firebase database
export interface MarchandData {
  email?: string;
  produits?:ProduitData[] | null;
}
