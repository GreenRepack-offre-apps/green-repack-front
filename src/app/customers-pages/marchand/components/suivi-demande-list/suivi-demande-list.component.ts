import { Component, OnInit } from '@angular/core';
import { ProduitRecap } from '../../../../model/produit.model';
import { ProduitMarchandService } from '../../../../service/produit/produit-marchand.service';
import { AuthService } from '../../../../service/auth.service';
import { MarchandProfils } from '../../../../model/auth.model';

@Component({
  selector: 'app-suivi-demande-list',
  templateUrl: './suivi-demande-list.component.html',
  styleUrls: ['./suivi-demande-list.component.scss']
})
export class SuiviDemandeListComponent implements OnInit {

  constructor(private produitService: ProduitMarchandService, private authService: AuthService) { }
  title_suivi_demande = 'Suivi de demande de produits';
  produitRecaps: ProduitRecap[] = [];
  ngOnInit(): void {
    this.authService.currentUser(new MarchandProfils()).subscribe(user => {
     if( this.authService.isFetch){
      this.produitService.fetchProducts(user.email, null).subscribe(rst => {
        if(rst.status === 'SUCCES' && rst.data.length > 0) {
          console.log("produits fetched: " + JSON.stringify(rst.data))
          rst.data.forEach(d => {
            this.produitRecaps.push(d);
          });
        }
      });
     }
    });

  }
}
