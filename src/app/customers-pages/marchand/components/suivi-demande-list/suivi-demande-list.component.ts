import { Component, OnInit } from '@angular/core';
import { ProduitRecap, EtatProduitData, EtatProduitEnum, EtatProduitType, ProduitResume } from '../../../../model/produit.model';
import { get_etat} from '../../../../model/workflow-produit.model';
import { ProduitMarchandService } from '../../../../service/produit/produit-marchand.service';
import { AuthService } from '../../../../service/auth.service';
import { MarchandProfils } from '../../../../model/auth.model';
import { MarchandSyntheseService } from '../../../../service/marchand/synthese/marchand-synthese.service';
import { map } from 'rxjs/operators';
import DateDiff from 'date-diff';
import { Window } from 'selenium-webdriver';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-suivi-demande-list',
  templateUrl: './suivi-demande-list.component.html',
  styleUrls: ['./suivi-demande-list.component.scss']
})
export class SuiviDemandeListComponent implements OnInit {
  constructor(private produitService: ProduitMarchandService,
    private authService: AuthService,
    private marchandSyntheseService: MarchandSyntheseService) { }
  title_suivi_demande = 'Suivi de demande de produits';
  produitRecaps: ProduitResume[] = [];
  validationReponse: boolean = false;
  ngOnInit(): void {
    this.authService.currentUser(new MarchandProfils()).subscribe(user => {
     if(this.authService.isFetch) {
      this.produitService.fetchMarchandProducts(user.email, null).subscribe(rst => {
        if(rst.status === 'SUCCES' && rst.data.length > 0) {
          rst.data.forEach(d => {
            this.produitRecaps.push({recap:d, label: get_etat(d.statut_validation).label});
          });
        }
      });
     }
    });

  }

  // evaluate = (produitRecap: ProduitResume) => {
  //   return produitRecap?.nbJourRestant >= 0;
  // }
  validate(recap: ProduitRecap) {
    switch(recap.statut_validation){
      case 'EN_ATTENTE_REPONSE_': //passage manuelle si non automatique
        let next_state = '';
        if(this.validationReponse === true) {
          next_state = recap.ex_state==='INIT'?'DEMANDE_GENERATION_COLIS':'VALIDATION_EN_ATTENTE_PAIEMENT';
        } else {
          next_state = recap.ex_state==='INIT'?'ANNULATION':'ANNULATION_EN_ATTENTE_REMBOURSEMENT';
        }
        this.produitService.updateProduct({email_user: recap.user, idproduit: recap.idprod, etat_dem_now: recap.statut_validation, etat_dem_next: next_state});
        break;
      case 'ANNULATION_EN_ATTENTE_REMBOURSEMENT':
        window.location.href = environment.admin_remboursement_static_link;
        // this.produitService.updateProduct({email_user: recap.user, idproduit: recap.idprod, etat_dem_now: recap.statut_validation, etat_dem_next: 'VALIDATION'});
        // break;
    }
  }

  reponseOffre(reponse: boolean) {
    this.validationReponse = reponse;
    console.log("offre rep " + this.validationReponse);
  }


}

