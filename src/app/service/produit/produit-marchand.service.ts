import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ProduitAjoutRequest, ProduitRecap } from 'src/app/model/produit.model';
import { Observable, pipe } from 'rxjs';
import { PRODUIT_AJOUT_ENDPOINT, PRODUIT_MISAJOURS_ENDPOINT, PRODUIT_LIST_RECHERCHE_ENDPOINT, PRODUIT_GET_RECHERCHE_ENDPOINT, PRODUIT_LIST_ADMIN_RECHERCHE_ENDPOINT } from '../../../assets/app-const';
import { ProduitAjoutResponse, ProduitMisAJoursRequest } from '../../model/produit.model';
import { DataResult } from '../../model/common.model';
import { distinctUntilChanged, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProduitMarchandService {

  constructor(private http: HttpClient) { }

  addProduit(body: ProduitAjoutRequest): Observable<any> {
    return this.http.post<ProduitAjoutResponse>(PRODUIT_AJOUT_ENDPOINT, body);
  }

  updateProduct(body: ProduitMisAJoursRequest){
    const result: Observable<string> = new Observable();
    this.http.post(PRODUIT_MISAJOURS_ENDPOINT, body)
    .subscribe(r => console.log("API PRODUIT_MISAJOURS_ENDPOINT <= STATUS =" + JSON.stringify(r)));
  }

  fetchMarchandProducts(usermail: string, etat_dem: string | any): Observable<DataResult<ProduitRecap[]>> {
    let paramSearch = new HttpParams();
    paramSearch = paramSearch.append('email_user', usermail);
    if (etat_dem !== null) {
      paramSearch = paramSearch.append('etat_dem', etat_dem);
    }
    return this.http.get<DataResult<ProduitRecap[]>>(PRODUIT_LIST_RECHERCHE_ENDPOINT, { params: paramSearch})
    .pipe(
      distinctUntilChanged(),
      map(val => {
        console.log("API PRODUIT_MARCHAND_LIST_RECHERCH <= " + JSON.stringify(val));
        return val;
      })
    );
  }

  fetchAllProducts(etat_dem: any): Observable<DataResult<ProduitRecap[]>> {
    let paramSearch = new HttpParams();
    if (etat_dem !== null) {
      paramSearch = paramSearch.append('etat_dem', etat_dem);
    }
    return  paramSearch.has('etat_dem')? this.http.get<DataResult<ProduitRecap[]>>(PRODUIT_LIST_ADMIN_RECHERCHE_ENDPOINT, { params:paramSearch})
    :this.http.get<DataResult<ProduitRecap[]>>(PRODUIT_LIST_ADMIN_RECHERCHE_ENDPOINT)
    .pipe(
      distinctUntilChanged(),
      map(val => {
        console.log("API PRODUIT_LIST_RECHERCH <= " + JSON.stringify(val));
        return val;
      })
    );
  }

  findProduct(idProd: string): Observable<DataResult<ProduitRecap>> {
    let paramSearch = new HttpParams();
    paramSearch = paramSearch.append('idprod', idProd);
    return this.http.get<DataResult<ProduitRecap>>(PRODUIT_GET_RECHERCHE_ENDPOINT, { params: paramSearch}) ;
  }
}
