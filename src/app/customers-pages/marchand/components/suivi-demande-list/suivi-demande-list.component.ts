import { Component, OnInit } from '@angular/core';
import { ProduitRecap, EtatProduitData, EtatProduitEnum, EtatProduitType, ProduitResume } from '../../../../model/produit.model';
import { get_etat} from '../../../../model/workflow-produit.model';
import { ProduitMarchandService } from '../../../../service/produit/produit-marchand.service';
import { AuthService } from '../../../../service/auth.service';
import { MarchandProfils } from '../../../../model/auth.model';
import { MarchandSyntheseService } from '../../../../service/marchand/synthese/marchand-synthese.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-suivi-demande-list',
  templateUrl: './suivi-demande-list.component.html',
  styleUrls: ['./suivi-demande-list.component.scss']
})
export class SuiviDemandeListComponent implements OnInit {

  items: any[] = [];// | EtatProduitData = <EtatProduitData>{};

  constructor(private produitService: ProduitMarchandService,
    private authService: AuthService,
    private marchandSyntheseService: MarchandSyntheseService) { }
  title_suivi_demande = 'Suivi de demande de produits';
  produitRecaps: ProduitResume[] = [];
  ngOnInit(): void {
    this.authService.currentUser(new MarchandProfils()).subscribe(user => {
     if( this.authService.isFetch) {
      //this.authService.currentUser(new MarchandProfils()).subscribe(u => {
        // this.marchandSyntheseService.valueFilter$.next(u.email);
      //})

      // this.marchandSyntheseService.MarchandProduitStateObs.pipe(
      //   map(dataSnapshot => {
      //     return dataSnapshot.map((s:any) => {
      //       const a = {key: s.key, value: s.payload.val()};
      //       return a;
      //     });
      //   })
      // ).subscribe(data => {
      //   this.items = data })
      this.produitService.fetchMarchandProducts(user.email, null).subscribe(rst => {
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

  label = (etat_actuelle: EtatProduitType) => {
    EtatProduitEnum[etat_actuelle].label;
  };
}

