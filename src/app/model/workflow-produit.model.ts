import { EtatProduitType, EtatProduitData, EtatProduitEnum, OffreProposition, OffreReponse } from './produit.model';

export type Usertype = 'admin' | 'vendeur';

export function genererNextEtatOfProduit(prevState: EtatProduitType, idProduit: string, expediteurType: Usertype, echangeNumero:number, etape: number,
   actionReponse: any, conditionParitculiere: boolean ) {
  switch(prevState){
    case EtatProduitEnum.NONE.etat:
      /**
       * création du produit par le marchand
       */
      let etatProduit = new EtatProduitData(EtatProduitEnum.INIT.etat, 0, EtatProduitEnum.INIT.label, EtatProduitEnum.INIT.hasContent, idProduit, echangeNumero);
      etatProduit.notification = 'Un demande de cession de produit à été ajouter !!'  //dest = admin.
      return etatProduit;

    case EtatProduitEnum.INIT.etat:
      /**
       * 1ER Retour suite à la création du produit par le marchand
       */
      if(expediteurType === 'admin') {
        let etatProduit2 = new EtatProduitData(EtatProduitEnum.EN_ATTENTE_REPONSE_.etat, 1, EtatProduitEnum.EN_ATTENTE_REPONSE_.label, EtatProduitEnum.EN_ATTENTE_REPONSE_.hasContent, idProduit, echangeNumero);
        etatProduit2.notification = 'Une demande de reponse est en attente de la part de la gestion !!'  //dest = vendeur
        etatProduit2.contenu = {prix:actionReponse.prix, raison: echangeNumero === 1 ? 'Première de Offre de reprise !!':actionReponse.raison};
        return etatProduit2;
      }
      break;

    case EtatProduitEnum.EN_ATTENTE_REPONSE_.etat:

      const reponse: OffreReponse = actionReponse;
      if(reponse === 'non' && echangeNumero === 1 && expediteurType === 'vendeur') {
        /**
         * Refus marchand de l'offre.
         */
        const etatProduit3 = new EtatProduitData(EtatProduitEnum.ANNULATION.etat, etape, EtatProduitEnum.ANNULATION.label, EtatProduitEnum.ANNULATION.hasContent,
          idProduit, echangeNumero);
          etatProduit3.notification = 'L\'offre ' + etatProduit3.niemeEchange + ' est refusé par le Marchand !!';
        return etatProduit3;
      } else if(reponse === 'non' && echangeNumero > 1 && expediteurType === 'vendeur') {
        /**
         * Refus marchand de l'offre avec tentative récupération produit.
         */
        const etatProduit3 = new EtatProduitData(EtatProduitEnum.ANNULATION_EN_ATTENTE_REMBOURSEMENT.etat, etape, EtatProduitEnum.ANNULATION_EN_ATTENTE_REMBOURSEMENT.label,
           EtatProduitEnum.ANNULATION_EN_ATTENTE_REMBOURSEMENT.hasContent, idProduit, echangeNumero);
        etatProduit3.contenu = 'remboursement';
        etatProduit3.notification ='L\'offre ' + etatProduit3.niemeEchange + ' est refusé par le Marchand !!'; //dest = admin
        return etatProduit3;
      } else if(reponse === 'oui' && echangeNumero === 1 && expediteurType === 'vendeur') {
        /**
         * génération colismo pour evoie de colis
         */
        const etatProduit3 = new EtatProduitData(EtatProduitEnum.DEMANDE_GENERATION_COLIS.etat, 2, EtatProduitEnum.DEMANDE_GENERATION_COLIS.label,
          EtatProduitEnum.DEMANDE_GENERATION_COLIS.hasContent, idProduit, echangeNumero);
          etatProduit3.notification = 'L\'offre ' + etatProduit3.niemeEchange + ' est accepté par le Marchand !!';  //dest = admin
        etatProduit3.contenu = {type:'colis'};
        return etatProduit3;
      } else if(reponse === 'oui' && echangeNumero > 1 && expediteurType === 'vendeur') {
        /**
         *  validation marchand de l'offre
         */
        const etatProduit3 = new EtatProduitData(EtatProduitEnum.VALIDATION_EN_ATTENTE_PAIEMENT.etat, etape, EtatProduitEnum.VALIDATION_EN_ATTENTE_PAIEMENT.label,
           EtatProduitEnum.VALIDATION_EN_ATTENTE_PAIEMENT.hasContent, idProduit, echangeNumero);
           etatProduit3.notification = 'L\'offre ' + etatProduit3.niemeEchange + ' est accpté par le Marchand !!'; //dest = admin
        etatProduit3.contenu = 'paiement';
        return etatProduit3;
      }
      break;

    case EtatProduitEnum.ANNULATION_EN_ATTENTE_REMBOURSEMENT.etat:
      /**
      * Marchand remoursement pour récupértation produit.
      */
      if(expediteurType === 'vendeur') {
        const etatProduit4 = new EtatProduitData(EtatProduitEnum.ANNULATION.etat, etape, EtatProduitEnum.ANNULATION.label, EtatProduitEnum.ANNULATION.hasContent,
          idProduit, echangeNumero);
          etatProduit4.notification = 'Le Marchand à payer pour récupérer son colis !!';
          etatProduit4.contenu = null;
          return etatProduit4;
        }
        break;

     case EtatProduitEnum.VALIDATION_EN_ATTENTE_PAIEMENT.etat:
        /**
        * Gestion greenn repack paiement du produit au marchand.
        */
        if(expediteurType === 'admin') {
          const etatProduit5 = new EtatProduitData(EtatProduitEnum.VALIDATION.etat, etape, EtatProduitEnum.VALIDATION.label, EtatProduitEnum.VALIDATION.hasContent,
          idProduit, echangeNumero);
          etatProduit5.notification = 'Le Marchand à payer pour récupérer son colis !!'; //dest = "vendeur"
          etatProduit5.contenu = null;
          return etatProduit5;
        }
        break;

      case EtatProduitEnum.DEMANDE_GENERATION_COLIS.etat:
        /**
        * Suivi green repack de l'enoie du produit par green repack.
        */
        if(expediteurType === 'admin') {
          const etatProduit5 = new EtatProduitData(EtatProduitEnum.EN_ATTENTE_RECEPTION_PRODUIT.etat, 3, EtatProduitEnum.EN_ATTENTE_RECEPTION_PRODUIT.label,
             EtatProduitEnum.EN_ATTENTE_RECEPTION_PRODUIT.hasContent, idProduit, echangeNumero);
          etatProduit5.notification = 'L\'etiquette pour l\'envoie du produit chez Green Repack!!'; //dest = "vendeur"
          etatProduit5.contenu = 'suivi_colis';
          return etatProduit5;
        }
        break;

      case EtatProduitEnum.EN_ATTENTE_RECEPTION_PRODUIT.etat:
        /**
        * Validation de récupération du colis par green repack si 15 jours de délais sont pasés.
        * conditionParitculiere = date colismo - today < 15  && action = 'suivis_colis'
        *
        */
        if(expediteurType === 'admin' && conditionParitculiere) {
          const etatProduit6 = new EtatProduitData(EtatProduitEnum.EN_ATTENTE_VALIDATION_.etat, 4, EtatProduitEnum.EN_ATTENTE_VALIDATION_.label,
             EtatProduitEnum.EN_ATTENTE_VALIDATION_.hasContent, idProduit, echangeNumero);
          etatProduit6.notification = 'Le produit est en train d\'être verifier par nos expert !!'; //dest = "vendeur
          return etatProduit6;
        } else if(expediteurType === 'admin' && !conditionParitculiere) {
          /**
           * Non Reception & hors délais du prodiuit
           */
          const etatProduit6 = new EtatProduitData(EtatProduitEnum.ANNULATION.etat, 4, EtatProduitEnum.ANNULATION.label, EtatProduitEnum.ANNULATION.hasContent,
            idProduit, echangeNumero);
            etatProduit6.notification =  'Le délais de réception du produit à expiré !!';
          return etatProduit6;
        }
        break;

      case EtatProduitEnum.EN_ATTENTE_VALIDATION_.etat:
        if(expediteurType === 'admin' && echangeNumero > 1) {
          const action1: OffreProposition = actionReponse;
          const action2: OffreReponse = actionReponse;
          if(action1) {
            const etatProduit7 = new EtatProduitData(EtatProduitEnum.EN_ATTENTE_REPONSE_.etat, 5, EtatProduitEnum.EN_ATTENTE_REPONSE_.label,
              EtatProduitEnum.EN_ATTENTE_REPONSE_.hasContent, idProduit, echangeNumero);
            etatProduit7.notification = 'Une nouvelle offre à été soumis !!'; //dest = "vendeur"
            etatProduit7.contenu = action1;
            return etatProduit7;
          }else if(action2 === 'oui') {
            const etatProduit7 = new EtatProduitData(EtatProduitEnum.VALIDATION_EN_ATTENTE_PAIEMENT.etat, etape, EtatProduitEnum.VALIDATION_EN_ATTENTE_PAIEMENT.label,
              EtatProduitEnum.EN_ATTENTE_REPONSE_.hasContent, idProduit, echangeNumero);
            etatProduit7.notification = 'Le produit à été valider, le paiment va être effectué !!'; //dest = "vendeur"
            etatProduit7.contenu = 'paiement';
            return etatProduit7;
          }else if(action2 === 'non') {
            const etatProduit7 = new EtatProduitData(EtatProduitEnum.ANNULATION_EN_ATTENTE_REMBOURSEMENT.etat, etape, EtatProduitEnum.ANNULATION_EN_ATTENTE_REMBOURSEMENT.label,
              EtatProduitEnum.ANNULATION_EN_ATTENTE_REMBOURSEMENT.hasContent, idProduit, echangeNumero);
            etatProduit7.notification = 'Le produit à été valider, le paiment va être effectué !!'; //dest = "vendeur"
            etatProduit7.contenu = 'remboursement';
            return etatProduit7;
          }

        }
        break;

      // case EtatProduitEnum.VALIDATION.etat:
      //   return prevState;

      // case EtatProduitEnum.ANNULATION.etat:
      //   return prevState;

      default:
        let etatProduit$ = new EtatProduitData(EtatProduitEnum.NONE.etat, etape, EtatProduitEnum.NONE.label, EtatProduitEnum.NONE.hasContent, idProduit, echangeNumero);
        etatProduit$.notification = 'La demande en cours est suspendu !!'  //dest = admin.
        return etatProduit$;
  }
  return  <EtatProduitData>{};
}

export function get_etat(type: EtatProduitType | string) {
  switch(type) {
    case 'INIT':
      return EtatProduitEnum.INIT;
    case 'ANNULATION_EN_ATTENTE_REMBOURSEMENT':
      return EtatProduitEnum.ANNULATION_EN_ATTENTE_REMBOURSEMENT;
    case 'DEMANDE_GENERATION_COLIS':
      return EtatProduitEnum.DEMANDE_GENERATION_COLIS;
    case 'EN_ATTENTE_REPONSE_':
      return EtatProduitEnum.EN_ATTENTE_REPONSE_;
    case 'EN_ATTENTE_VALIDATION_':
      return EtatProduitEnum.EN_ATTENTE_VALIDATION_;
    case 'ANNULATION':
      return EtatProduitEnum.ANNULATION;
    case 'VALIDATION_EN_ATTENTE_PAIEMENT':
      return EtatProduitEnum.VALIDATION_EN_ATTENTE_PAIEMENT;
    case 'EN_ATTENTE_RECEPTION_PRODUIT':
      return EtatProduitEnum.EN_ATTENTE_RECEPTION_PRODUIT;
    case 'VALIDATION':
      return EtatProduitEnum.VALIDATION;
    default:
      return EtatProduitEnum.NONE;
  }
}
