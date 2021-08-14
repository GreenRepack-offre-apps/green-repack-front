import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ProduitAjoutRequest, ProduitRecap } from 'src/app/model/produit.model';
import { Observable } from 'rxjs';
import { PRODUIT_AJOUT_ENDPOINT, PRODUIT_MISAJOURS_ENDPOINT, PRODUIT_LIST_RECHERCHE_ENDPOINT } from '../../../assets/app-const';
import { ProduitAjoutResponse, ProduitMisAJoursRequest } from '../../model/produit.model';
import { DataResult } from '../../model/common.model';

@Injectable({
  providedIn: 'root'
})
export class ProduitMarchandService {

  constructor(private http: HttpClient) { }

  addProduit(body: ProduitAjoutRequest): Observable<any> {
    return this.http.post<ProduitAjoutResponse>(PRODUIT_AJOUT_ENDPOINT, body);
  }

  updateProduct(body: ProduitMisAJoursRequest) {
    return this.http.post(PRODUIT_MISAJOURS_ENDPOINT, body)
  }

  fetchProducts(usermail: string, etat_dem: string | any): Observable<DataResult<ProduitRecap[]>> {
    let paramSearch = new HttpParams();
    paramSearch = paramSearch.append('email_user', usermail);
    if (etat_dem !== null) {
      paramSearch = paramSearch.append('etat_dem', etat_dem);
    }
    return this.http.get<DataResult<ProduitRecap[]>>(PRODUIT_LIST_RECHERCHE_ENDPOINT, { params: paramSearch}) ;
  }
}
