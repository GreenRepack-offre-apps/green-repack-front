import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MarchandProfils } from 'src/app/model/auth.model';
import { ProduitResume, EtatProduitType, ProduitRecap } from '../../../model/produit.model';
import { AuthService } from '../../../service/common/auth/auth.service';
import { ProduitMarchandService } from '../../../service/produit/produit-marchand.service';
import { get_etat } from '../../../model/workflow-produit.model';
import DateDiff from 'date-diff';
import { environment } from 'src/environments/environment';
import { PaimentService } from '../../../service/paiment/paiment.service';
import { PAIEMENT_INIT } from '../../../../assets/app-const';

@Component({
  selector: 'app-etat-gestion-demande-list',
  templateUrl: './etat-gestion-demande-list.component.html',
  styleUrls: ['./etat-gestion-demande-list.component.scss']
})
export class EtatGestionDemandeListComponent implements OnInit {

  constructor(private fbuilder: FormBuilder,
    private authService: AuthService,
    private produitService: ProduitMarchandService,
    private paiementService: PaimentService) { }
  etatFiltre = this.fbuilder.group({
    stateProductSelected: new FormControl('')
  });
  stateProductSelected = this.fbuilder.control('');
  produitRecaps: ProduitResume[] = [];

  priceFormControl = new FormControl(0, [Validators.required]);
  nbjourRestant = 15;
  validReponse:string = '';
  paiement_link = '';

  ngOnInit(): void {
    this.authService.currentUser(new MarchandProfils()).subscribe(user => {
      if( this.authService.isFetch) {
       this.produitService.fetchAllProducts(null).subscribe(rst => {
         if(rst.status === 'SUCCES' && rst.data.length > 0) {
           //console.log("produits fetched: " + JSON.stringify(rst.data))
           rst.data.forEach(d => {
            this.produitRecaps.push({recap:d, label: get_etat(d.statut_validation).label});

           });
         }
       });
      }
     });
  }

  applyFiltre(){
    this.produitRecaps.forEach(p => {
      this.produitRecaps.pop();
    });
    this.produitRecaps.pop();
    const state  = this.etatFiltre.controls.stateProductSelected.value;
    console.log("Filtre = "+ state);
    this.produitService.fetchAllProducts(state !== ''? state:null).subscribe(rst => {
      if(rst.status === 'SUCCES' && rst.data.length > 0) {
        rst.data.forEach(d => {
          this.produitRecaps.push({recap:d, label: get_etat(d.statut_validation).label});
        });
      }
    });
  }

  validationReponse(anwser:string){
    this.validReponse = anwser;
  }

  validate(recap: ProduitRecap) {
    switch(recap.statut_validation){
      case 'INIT': //passage manuelle si non automatique
        if(this.priceFormControl.value !== 0){
          const val: number = this.priceFormControl.value;
          console.log('price :'+val);
          this.produitService.updateProduct({email_user: recap.user, idproduit: recap.idprod, etat_dem_now: recap.statut_validation,
          etat_dem_next: 'EN_ATTENTE_REPONSE_', prix: val});
        }
        break;
      case 'DEMANDE_GENERATION_COLIS': //passage manuelle si non automatique
      this.produitService.updateProduct({email_user: recap.user, idproduit: recap.idprod, etat_dem_now: recap.statut_validation,
        etat_dem_next: 'EN_ATTENTE_RECEPTION_PRODUIT'});
        break;
      case 'EN_ATTENTE_RECEPTION_PRODUIT': //passage manuelle et besoin de validation automatique externe
        console.log('reponse admin :'+this.nbjourRestant);
        this.produitService.updateProduct({email_user: recap.user, idproduit: recap.idprod, etat_dem_now: recap.statut_validation,
        etat_dem_next: 'EN_ATTENTE_VALIDATION_'});
        break;
      case 'EN_ATTENTE_VALIDATION_':
        console.log('reponse admin :'+this.validReponse);
        if(this.validReponse === 'oui') {
          this.produitService.updateProduct({email_user: recap.user, idproduit: recap.idprod, etat_dem_now: recap.statut_validation,
            etat_dem_next: 'VALIDATION_EN_ATTENTE_PAIEMENT'});
        } else if(this.validReponse === 'non') {
          this.produitService.updateProduct({email_user: recap.user, idproduit: recap.idprod, etat_dem_now: recap.statut_validation,
            etat_dem_next: 'ANNULATION_EN_ATTENTE_REMBOURSEMENT'});
        } else if(this.validReponse === 'offre' && this.priceFormControl.value !== 0) {
          const val: number = this.priceFormControl.value;
          this.produitService.updateProduct({email_user: recap.user, idproduit: recap.idprod, etat_dem_now: recap.statut_validation,
            etat_dem_next: 'EN_ATTENTE_REPONSE_', prix: val});
        }
        break;
      case 'VALIDATION_EN_ATTENTE_PAIEMENT':
        this.authService.currentUser(new MarchandProfils()).subscribe(user => {
          if( this.authService.isFetch) {
            window.location.href = PAIEMENT_INIT + '?marchand='+user.email;
            this.paiement_link = PAIEMENT_INIT +'?marchand='+user.email;
            this.paiementService.paybox(user.email, 'MARCHAND');
          }
        });
        // this.produitService.updateProduct({email_user: recap.user, idproduit: recap.idprod, etat_dem_now: recap.statut_validation,
        //   etat_dem_next: 'VALIDATION'});
        break;
    }
  }

  validateProduit(recap: ProduitRecap, rst:any) {
    switch(recap.statut_validation){
      // case 'INIT': //passage manuelle si non automatique
      //   const val: number = this.priceFormControl.value;
      //   console.log('price :'+val);
      //   this.produitService.updateProduct({email_user: recap.user, idproduit: recap.idprod, etat_dem_now: recap.statut_validation,
      //   etat_dem_next: 'EN_ATTENTE_REPONSE_', prix: val});
      //   break;
      // case 'DEMANDE_GENERATION_COLIS': //passage manuelle si non automatique
      // this.produitService.updateProduct({email_user: recap.user, idproduit: recap.idprod, etat_dem_now: recap.statut_validation,
      //   etat_dem_next: 'EN_ATTENTE_RECEPTION_PRODUIT'});
      //   break;
      case 'EN_ATTENTE_RECEPTION_PRODUIT': //passage manuelle et besoin de validation automatique externe
        this.produitService.updateProduct({email_user: recap.user, idproduit: recap.idprod, etat_dem_now: recap.statut_validation,
        etat_dem_next: rst===true?'EN_ATTENTE_VALIDATION_':'ANNULATION'});
        break;
      //case 'EN_ATTENTE_VALIDATION_':
      default:
        break;
    }
  }

}
