import { ProduitData } from './produit.model';

export interface Marchand {
  idmar?: string;
  nom: string;
  email: string;
  datecreation?: string;
  adresse: string;
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

export class MarchandViewModel implements Marchand {
  idmar?: string | undefined;
  nom!: string;
  email!: string;
  password?: string | undefined;
  datecreation?: string | undefined;
  adresse!: string;
  adresseModel: Adresse;
  client:boolean;

   constructor(){
     this.adresseModel = <Adresse>{}
     this.client = false;
   }


   createMarchand() {
     let adr = '';
    adr += (this.adresseModel.complement !== ''? this.adresseModel.complement + ', ': '') + this.adresseModel.voie + ', '
    + this.adresseModel.codePostal+' '+ this.adresseModel.ville;
     return {nom: this.nom, email: this.email, password: this.password, adresse: adr, client: this.client}
   }

}

// firebase database
export interface MarchandData {
  email?: string;
  produits?:ProduitData[] | null;
}
