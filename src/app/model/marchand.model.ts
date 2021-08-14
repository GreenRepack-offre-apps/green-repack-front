import { ProduitData } from './produit.model';

export class Marchand {
  id?: string;
  nom: string;
  email: string;
  datecreation?: string;
  adresse: string;

  constructor(){
    this.nom = "";
    this.email = ""
    this.adresse = "";
  }
}

export interface Adresse {
  voie: string;
  complement?: string;
  codePostal: string;
  ville: string;
}

export class MarchandViewModel implements Marchand {
  id?: string | undefined;
  nom!: string;
  email!: string;
  password?: string | undefined;
  datecreation?: string | undefined;
  adresse!: string;
  adresseModel: Adresse;
   constructor(){
     this.adresseModel = <Adresse>{}
   }


   createMarchand() {
     let adr = '';
    adr += (this.adresseModel.complement !== ''? this.adresseModel.complement + ', ': '') + this.adresseModel.voie + ', '
    + this.adresseModel.codePostal+' '+ this.adresseModel.ville;
     return {nom: this.nom, email: this.email, password: this.password, adresse: adr}
   }

}

// firebase database
export interface MarchandData {
  email?: string;
  produits?:ProduitData[];
}
