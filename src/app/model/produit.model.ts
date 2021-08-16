
// produit marchand

import { DecimalPipe } from "@angular/common";
import { PrefixNot } from "@angular/compiler";

export interface ProduitAjoutRequest{
  user_email: string;
  marque: string;
  model: string;
  categorie: string;
  info_tech: string;
  info_esth: string;
}

export interface ProduitAjoutResponse {
  status: string;
  data: string[];
}


export interface ProduitMisAJoursRequest {
  email_user?: string;
  idproduit: string;
  etat_dem_next: string;
  etat_dem_now: string;
}

export interface ProduitRecap {
  idprod: string,
  refmar: string;
  date_ajout: Date;
  statut_validation: string;
  marque: string;
  model: string;
  categorie: string;
  info_tech: string;
  info_esth: string;
  prix: DecimalPipe;
}

export interface EtatProduitName{
  etat: EtatProduitType;
  label: string;
  hasContent: boolean;
}

export type OffreReponse = 'oui' | 'non';

export interface OffreProposition {
  prix: number| DecimalPipe;
  raison?: string;
}

export type DocType = 'colis' | 'facture';
export type TraitementProduitType = 'suivi_colis' | 'remboursement' | 'paiement';
export interface ContenuDocument {
  file?: File;
  type: DocType;
}
export interface MessageProduit {
  message: string;
}

export class EtatProduitData implements EtatProduitName {
  etat: EtatProduitType = "NONE";
  label: string = "Suspendu";
  hasContent: boolean;
  idProduit: string
  notification?: OffreReponse | OffreProposition | ContenuDocument | MessageProduit | null;
  action?:  OffreReponse | OffreProposition | ContenuDocument | TraitementProduitType | null;
  niemeEchange?:number;

  constructor(etat: EtatProduitType, label: string, hasContent: boolean, idProduit: string, niemeEchange: number) {

    this.etat = etat;
    this.label = label;
    this.idProduit = idProduit;
    this.hasContent = hasContent;
    this.notification = null;
    this.niemeEchange = niemeEchange;

    if(!this.hasContent){
      this.action = null;
    }
  }
}

export type EtatProduitType = 'NONE' |
                          'INIT'|
                          'EN_ATTENTE_REPONSE_' |
                          'DEMANDE_GENERATION_COLIS' |
                          'EN_ATTENTE_RECEPTION_PRODUIT' |
                          'PRODUIT_RECEPTIONNE' |
                          'EN_ATTENTE_VALIDATION_' |
                          'ANNULATION_EN_ATTENTE_REMBOURSEMENT' | //jusqu'a 15 jours
                          'ANNULATION' |
                          'VALIDATION_EN_ATTENTE_PAIEMENT' |
                          'VALIDATION';

export const EtatProduitEnum: Record<EtatProduitType, EtatProduitName> = {
  NONE: {etat:'NONE', label:'Suspendu', hasContent:false},
  INIT: {etat:'INIT', label:'Demande créer', hasContent: false},
  EN_ATTENTE_REPONSE_: {etat:'EN_ATTENTE_REPONSE_', label:'Demande créer', hasContent:true}, //Le marchand retourne offre reponse, la gestion retourne offre proposition
  DEMANDE_GENERATION_COLIS: {etat:'DEMANDE_GENERATION_COLIS', label:'Demande créer', hasContent:true}, // document colismo à générer.
  EN_ATTENTE_RECEPTION_PRODUIT: {etat:'EN_ATTENTE_RECEPTION_PRODUIT', label:'Demande créer', hasContent:true}, //document
  PRODUIT_RECEPTIONNE: {etat:'PRODUIT_RECEPTIONNE', label:'Demande créer', hasContent:true}, //offre reponse
  EN_ATTENTE_VALIDATION_: {etat:'EN_ATTENTE_VALIDATION_', label:'Demande créer', hasContent:true}, // offre reponse
  ANNULATION_EN_ATTENTE_REMBOURSEMENT: {etat:'ANNULATION_EN_ATTENTE_REMBOURSEMENT', label:'Demande créer', hasContent:false},
  ANNULATION: {etat:'ANNULATION', label:'Demande créer', hasContent:false},
  VALIDATION_EN_ATTENTE_PAIEMENT: {etat:'VALIDATION_EN_ATTENTE_PAIEMENT', label:'Demande créer', hasContent:false},
  VALIDATION: {etat:'VALIDATION_EN_ATTENTE_PAIEMENT', label:'Demande créer', hasContent:true} //content = facture paiement
};

// firebase database
export interface ProduitData {
  urls_image?: string[];
  produitId?: string;
  facture?: string;
}
