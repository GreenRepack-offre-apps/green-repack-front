import { Component, Input, OnInit } from '@angular/core';
import { ProduitMarchandService } from '../../../../../service/produit/produit-marchand.service';
import { AuthService } from '../../../../../service/common/auth/auth.service';
import { ProduitResume, ProduitRecap } from '../../../../../model/produit.model';
import { UserProfils } from '../../../../../model/auth.model';
import { get_etat } from '../../../../../model/workflow-produit.model';
import { environment } from '../../../../../../environments/environment.prod';
import { User } from '../../../../../model/users.model';
import { NavigationService } from '../../../../../service/common/navigation/navigation.service';
import { combineLatest } from 'rxjs';
import { DataResult } from '../../../../../model/common.model';


@Component({
  selector: 'app-suivi-demande-list',
  templateUrl: './suivi-demande-list.component.html',
  styleUrls: ['./suivi-demande-list.component.scss']
})
export class SuiviDemandeListComponent implements OnInit {
  constructor(private produitService: ProduitMarchandService,
    private authService: AuthService,
    private navigationService: NavigationService) { }

  @Input()
  customer!: User;

  title_suivi_demande = 'Suivi de demande de produits';
  produitRecaps: ProduitResume[] = [];
  validationReponse: boolean = false;
  ngOnInit(): void {
    if(!this.customer || this.customer.email == null) {
      this.authService.currentUser(new UserProfils()).subscribe( current => {
        this.produitService.fetchMarchandProducts(sessionStorage.getItem('USER_ID'), null).subscribe(rst => {
          if(rst.status === 'SUCCES' && rst.data.length > 0) {
            rst.data.forEach((d:any) => {
              this.produitRecaps.push({recap:d, label: get_etat(d.statut_validation).label});
            });
          }
        });
      });
    } else {
      this.produitService.fetchMarchandProducts(this.customer.iduser).subscribe( (productResult: DataResult<any>) => {
        if(productResult && productResult.status === 'SUCCES' && productResult.data.length > 0) {
          productResult.data.forEach((d:any) => {
            this.produitRecaps.push({recap:d, label: get_etat(d.statut_validation).label});
          });
        }
      });
    }
  //this.produitService.fetchMarchandProducts(this.customer.email, null).subscribe
    // this.authService.currentUser(new UserProfils()).subscribe(user => {
    //  if(this.authService.isFetch) {

    //  }
    // });
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
    this.navigationService.reloadCurrentRoute();
  }

  reponseOffre(reponse: boolean) {
    this.validationReponse = reponse;
    console.log("offre rep " + this.validationReponse);
  }


}

