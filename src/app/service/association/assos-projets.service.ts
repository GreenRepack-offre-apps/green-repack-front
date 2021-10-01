import { Injectable } from '@angular/core';
import { Status } from 'src/app/model/common.model';
import { Observable } from 'rxjs';
import { PRODUIT_AJOUT_ENDPOINT, UPDATE_PROJECT_EN_ATTENTE, UPDATE_PROJECT_VALIDER } from '../../../assets/app-const';
import { DataResult } from '../../model/common.model';
import { HttpParams, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AssosProjetsService {

  constructor(private http: HttpClient) { }
  getAll(withEnAttente: boolean): Observable<AssosProjets[]> {
    let params = new HttpParams();
    params = params.append('withattente', withEnAttente?'1':'0');
    return this.http.get<DataResult<AssosProjets[]>>(UPDATE_PROJECT_EN_ATTENTE, { params: params})
    .pipe(
      map(rst => {
        console.log("API PRODUIT_MARCHAND_LIST_RECHERCH <= " + JSON.stringify(rst));
        return rst.status==='ECHEC' || rst.data.length === 0? []:rst.data;
      })
    );
  }
  updateEnAttente(body: Projet): Observable<Status> {
    return this.http.post<Status>(UPDATE_PROJECT_EN_ATTENTE, body);
  }
  updateValider(body: Projet): Observable<Status> {
    return this.http.post<Status>(UPDATE_PROJECT_VALIDER, body);
  }

}
