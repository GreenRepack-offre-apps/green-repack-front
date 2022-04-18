import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ProduitAjoutRequest, ProduitRecap } from 'src/app/model/produit.model';
import { forkJoin, Observable, pipe } from 'rxjs';
import { PRODUIT_AJOUT_ENDPOINT, PRODUIT_MISAJOURS_ENDPOINT, PRODUIT_LIST_RECHERCHE_ENDPOINT, PRODUIT_GET_RECHERCHE_ENDPOINT, PRODUIT_LIST_ADMIN_RECHERCHE_ENDPOINT } from '../../app-const';
import { ProduitAjoutResponse, ProduitMisAJoursRequest } from '../../model/produit.model';
import { DataResult, Status } from '../../model/common.model';
import { distinctUntilChanged, map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProduitMarchandService {

  constructor(private http: HttpClient) { }

  addProduit(body: ProduitAjoutRequest): Observable<any> {
    return this.http.post<ProduitAjoutResponse>(PRODUIT_AJOUT_ENDPOINT, body);
  }

  updateProduct(body: ProduitMisAJoursRequest, state: string = ''): Observable<any>{
    const result: Observable<string> = new Observable();
    return forkJoin({
      upd:this.http.post(PRODUIT_MISAJOURS_ENDPOINT, body),
      refresh: this.fetchAllProducts(state).pipe(delay(1000))
    })
    .pipe(
      map(result => {
        if(result.refresh && result.upd && result.refresh.status === 'SUCCES'){
          return result.refresh.data;
        }
        return null;
      })
    )

  }

  fetchMarchandProducts(marchandId: string, etat_dem: string | any): Observable<DataResult<ProduitRecap[]>> {
    let paramSearch = new HttpParams();
    paramSearch = paramSearch.append('refmar', marchandId);
    if (etat_dem !== null || etat_dem !== '') {
      paramSearch = paramSearch.append('statut_validation', etat_dem);
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
      paramSearch = paramSearch.append('statut_validation', etat_dem);
    }
    return  paramSearch.has('statut_validation')? this.http.get<DataResult<ProduitRecap[]>>(PRODUIT_LIST_ADMIN_RECHERCHE_ENDPOINT, { params:paramSearch})
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
