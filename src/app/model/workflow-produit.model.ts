import { EtatProduitType, EtatProduitData, EtatProduitEnum, OffreProposition, OffreReponse } from './produit.model';

export type Usertype = 'admin' | 'vendeur';

export function gestionNextEtat(prevState: EtatProduitType, idProduit: string, expediteur: Usertype, echangeNumero:number=1,
   actionReponse: any, conditionParitculiere: boolean ) {
  switch(prevState){
    case EtatProduitEnum.NONE.etat:
      let etatProduit = new EtatProduitData(EtatProduitEnum.INIT.etat, EtatProduitEnum.INIT.label, EtatProduitEnum.INIT.hasContent, idProduit, echangeNumero);
      etatProduit.notification = {message: 'Un demande de cession de produit à été ajouter !!'}  //dest = admin.
      etatProduit.action = null;
      break;

    case EtatProduitEnum.INIT.etat:
      /**
       * création du produit par le marchand
       */
      if(expediteur === 'admin') {
        let etatProduit2 = new EtatProduitData(EtatProduitEnum.EN_ATTENTE_REPONSE_.etat,EtatProduitEnum.EN_ATTENTE_REPONSE_.label, EtatProduitEnum.EN_ATTENTE_REPONSE_.hasContent, idProduit, echangeNumero);
        etatProduit2.notification = {message: 'Une demande de reponse est en attente de la part de la gestion !!'}  //dest = vendeur
        etatProduit2.action = {prix:actionReponse.prix, raison: echangeNumero === 1 ? 'Première de Offre de reprise !!':actionReponse.raison};
        return etatProduit2;
      }
      break;

    case EtatProduitEnum.EN_ATTENTE_REPONSE_.etat:

      const reponse: OffreReponse = actionReponse;
      if(reponse === 'non' && echangeNumero === 1 && expediteur === 'vendeur') {
        /**
         * Refus marchand de l'offre.
         */
        const etatProduit3 = new EtatProduitData(EtatProduitEnum.ANNULATION.etat, EtatProduitEnum.ANNULATION.label, EtatProduitEnum.ANNULATION.hasContent,
          idProduit, echangeNumero);
          etatProduit3.notification = {message: 'L\'offre ' + etatProduit3.niemeEchange + ' est refusé par le Marchand !!'};
        etatProduit3.action = null;
        return etatProduit3;
      } else if(reponse === 'non' && echangeNumero > 1 && expediteur === 'vendeur') {
        /**
         * Refus marchand de l'offre avec tentative récupération produit.
         */
        const etatProduit3 = new EtatProduitData(EtatProduitEnum.ANNULATION_EN_ATTENTE_REMBOURSEMENT.etat, EtatProduitEnum.ANNULATION_EN_ATTENTE_REMBOURSEMENT.label,
           EtatProduitEnum.ANNULATION_EN_ATTENTE_REMBOURSEMENT.hasContent, idProduit, echangeNumero);
        etatProduit3.action = 'remboursement';
        etatProduit3.notification = {message: 'L\'offre ' + etatProduit3.niemeEchange + ' est refusé par le Marchand !!'}; //dest = admin
        return etatProduit3;
      } else if(reponse === 'oui' && echangeNumero === 1 && expediteur === 'vendeur') {
        /**
         * génération colismo pour evoie de colis
         */
        const etatProduit3 = new EtatProduitData(EtatProduitEnum.DEMANDE_GENERATION_COLIS.etat, EtatProduitEnum.DEMANDE_GENERATION_COLIS.label,
          EtatProduitEnum.DEMANDE_GENERATION_COLIS.hasContent, idProduit, echangeNumero);
          etatProduit3.notification = {message: 'L\'offre ' + etatProduit3.niemeEchange + ' est accepté par le Marchand !!'};
        etatProduit3.action = {type:'colis'};
        return etatProduit3;
      } else if(reponse === 'oui' && echangeNumero > 1 && expediteur === 'vendeur') {
        /**
         *  validation marchand de l'offre
         */
        const etatProduit3 = new EtatProduitData(EtatProduitEnum.VALIDATION_EN_ATTENTE_PAIEMENT.etat, EtatProduitEnum.VALIDATION_EN_ATTENTE_PAIEMENT.label,
           EtatProduitEnum.VALIDATION_EN_ATTENTE_PAIEMENT.hasContent, idProduit, echangeNumero);
           etatProduit3.notification = {message: 'L\'offre ' + etatProduit3.niemeEchange + ' est accpté par le Marchand !!'}; //dest = admin
        etatProduit3.action = 'paiement';
        etatProduit3.notification = {message: ''};
        return etatProduit3;
      }
      break;

    case EtatProduitEnum.ANNULATION_EN_ATTENTE_REMBOURSEMENT.etat:
      /**
      * Marchand remoursement pour récupértation produit.
      */
      if(expediteur === 'vendeur') {
        const etatProduit4 = new EtatProduitData(EtatProduitEnum.ANNULATION.etat, EtatProduitEnum.ANNULATION.label, EtatProduitEnum.ANNULATION.hasContent,
          idProduit, echangeNumero);
          etatProduit4.notification = {message: 'Le Marchand à payer pour récupérer son colis !!'};
          etatProduit4.action = null;
          return etatProduit4;
        }
        break;

     case EtatProduitEnum.VALIDATION_EN_ATTENTE_PAIEMENT.etat:
        /**
        * Gestion greenn repack paiement du produit au marchand.
        */
        if(expediteur === 'admin') {
          const etatProduit5 = new EtatProduitData(EtatProduitEnum.VALIDATION.etat, EtatProduitEnum.VALIDATION.label, EtatProduitEnum.VALIDATION.hasContent,
          idProduit, echangeNumero);
          etatProduit5.notification = {message: 'Le Marchand à payer pour récupérer son colis !!'}; //dest = "vendeur"
          etatProduit5.action = null;
          return etatProduit5;
        }
        break;

      case EtatProduitEnum.DEMANDE_GENERATION_COLIS.etat:
        /**
        * Suivi green repack de l'enoie du produit par green repack.
        */
        if(expediteur === 'admin') {
          const etatProduit5 = new EtatProduitData(EtatProduitEnum.EN_ATTENTE_RECEPTION_PRODUIT.etat, EtatProduitEnum.EN_ATTENTE_RECEPTION_PRODUIT.label,
             EtatProduitEnum.EN_ATTENTE_RECEPTION_PRODUIT.hasContent, idProduit, echangeNumero);
          etatProduit5.notification = {message: 'L\'etiquette pour l\'envoie du produit chez Green Repack!!'}; //dest = "vendeur"
          etatProduit5.action = 'suivi_colis';
          return etatProduit5;
        }
        break;

      case EtatProduitEnum.EN_ATTENTE_RECEPTION_PRODUIT.etat:
        /**
        * Validation de récupération du colis par green repack si 15 jours de délais sont pasés.
        * conditionParitculiere = date colismo - today < 15  && action = 'suivis_colis'
        *
        */
        if(expediteur === 'admin' && conditionParitculiere) {
          const etatProduit6 = new EtatProduitData(EtatProduitEnum.EN_ATTENTE_VALIDATION_.etat, EtatProduitEnum.EN_ATTENTE_VALIDATION_.label,
             EtatProduitEnum.EN_ATTENTE_VALIDATION_.hasContent, idProduit, echangeNumero);
          etatProduit6.notification = {message: 'Le produit est train d\'être verifier parn nos expert !!'}; //dest = "vendeur
          etatProduit6.action = null;
          return etatProduit6;
        } else if(expediteur === 'admin' && !conditionParitculiere) {
          /**
           * Non Reception & hors délais du prodiuit
           */
          const etatProduit6 = new EtatProduitData(EtatProduitEnum.ANNULATION.etat, EtatProduitEnum.ANNULATION.label, EtatProduitEnum.ANNULATION.hasContent,
            idProduit, echangeNumero);
            etatProduit6.notification = {message: 'Les délais de réception du produit àn expiré !!'};
            etatProduit6.action = null;
          return etatProduit6;
        }
        break;

      case EtatProduitEnum.VALIDATION.etat:
        return prevState;

      case EtatProduitEnum.ANNULATION.etat:
        return prevState;

      default:
        return null;
  }
}
