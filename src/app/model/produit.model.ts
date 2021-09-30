
// produit marchand

import { DecimalPipe, DatePipe } from '@angular/common';
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
  prix?: number;
}

export interface ProduitRecap {
  idprod: string,
  refmar?: string;
  date_ajout: Date;
  date_fin: Date;
  statut_validation: string;
  marque: string;
  model: string;
  categorie: string;
  info_tech: string;
  info_esth: string;
  prix: DecimalPipe;
  user?: string;
  ex_state: string;
}

export interface ProduitResume {
  recap: ProduitRecap;
  label?: string;
  body?: any;
  nbJourRestant?: number;
}

export interface EtatProduitName {
  etat: EtatProduitType;
  steps?: number[];
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
  date_time: Date;
  message: string;
  destinataire?: string;
}

export class EtatProduitData implements EtatProduitName {
  date_time: any;
  etat: EtatProduitType = "NONE";
  step: number;
  label: string = "Suspendu";
  hasContent: boolean;
  idProduit: string
  notification: string;
  notifDestinataire: string;
  contenu?:  OffreReponse | OffreProposition | ContenuDocument | TraitementProduitType | null;
  niemeEchange?:number;
  expediteur: string;
  destinataire: string;

  constructor(etat: EtatProduitType, step: number, label: string, hasContent: boolean,
    idProduit: string, niemeEchange: number) {
    this.date_time = null;
    this.etat = etat;
    this.step = step
    this.label = label;
    this.idProduit = idProduit;
    this.hasContent = hasContent;
    this.notification = '';
    this.notifDestinataire = '';
    this.niemeEchange = niemeEchange;
    this.expediteur = '';
    this.destinataire = '';

    if(!this.hasContent){
      this.contenu = null;
    }
  }
  setDate(date: any){
    this.date_time = date;
  }

}

export type EtatProduitType = 'NONE' |
                          'INIT'|
                          'EN_ATTENTE_REPONSE_' |
                          'DEMANDE_GENERATION_COLIS' |
                          'EN_ATTENTE_RECEPTION_PRODUIT' |
                          //'PRODUIT_RECEPTIONNE' |
                          'EN_ATTENTE_VALIDATION_' |
                          'ANNULATION_EN_ATTENTE_REMBOURSEMENT' | //jusqu'a 15 jours
                          'ANNULATION' |
                          'VALIDATION_EN_ATTENTE_PAIEMENT' |
                          'VALIDATION';

export const EtatProduitEnum: Record<EtatProduitType, EtatProduitName> = {
  NONE: {etat:'NONE', steps:[-1], label:'Suspendu', hasContent:false},
  INIT: {etat:'INIT', steps:[0], label:'Demande de session créer.', hasContent: false},
  EN_ATTENTE_REPONSE_: {etat:'EN_ATTENTE_REPONSE_', steps:[1,5], label:'Demande en attente de réponse.', hasContent:true}, // La gestion retourne une 1ere offre
  DEMANDE_GENERATION_COLIS: {etat:'DEMANDE_GENERATION_COLIS', steps:[2],label:'Document pour colis en cours de création.', hasContent:true}, // document colismo à générer par admin ou auto.
  EN_ATTENTE_RECEPTION_PRODUIT: {etat:'EN_ATTENTE_RECEPTION_PRODUIT', steps:[3], label:'En attente de réception du produit dans nos locaux.', hasContent:true}, //document + suivi
  //PRODUIT_RECEPTIONNE: {etat:'PRODUIT_RECEPTIONNE', label:'Demande créer', hasContent:false},
  EN_ATTENTE_VALIDATION_: {etat:'EN_ATTENTE_VALIDATION_', steps:[4], label:'Demande en cours d\'expertise', hasContent:true}, // offre reponse
  ANNULATION_EN_ATTENTE_REMBOURSEMENT: {etat:'ANNULATION_EN_ATTENTE_REMBOURSEMENT', steps:[5,6], label:'En attente de remboursement des frais de gestion du produit.', hasContent:true}, //action de remoursement
  ANNULATION: {etat:'ANNULATION', steps:[2,4,6,7], label:'Demande annulée', hasContent:false},
  VALIDATION_EN_ATTENTE_PAIEMENT: {etat:'VALIDATION_EN_ATTENTE_PAIEMENT', steps:[5,6], label:'Demande créer', hasContent:true}, //action de paiement
  VALIDATION: {etat:'VALIDATION', steps:[6,7], label:'Demande validée', hasContent:false}
};

// firebase database
export interface ProduitData {
  date_time: Date | any;
  urls_image?: string[];
  produitId?: string;
  facture?: string;
}
