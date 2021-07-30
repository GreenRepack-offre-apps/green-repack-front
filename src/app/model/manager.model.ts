
export class Marchand {
  id?: string;
  nom: string;
  email: string;
  password?: string;
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

export class MarchandViewModel extends Marchand {
   adresseModel: Adresse;
   constructor(){
     super();
     this.adresseModel = <Adresse>{}
   }

   createMarchand(): Marchand {
     let adr = '';
    adr += (this.adresseModel.complement !== ''? this.adresseModel.complement + ', ': '') + this.adresseModel.voie + ', '
    + this.adresseModel.codePostal+' '+ this.adresseModel.ville;
     return {nom: this.nom, email: this.email, password: this.password, adresse: adr}
   }

}
