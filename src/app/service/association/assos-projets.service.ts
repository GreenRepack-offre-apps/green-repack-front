import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ASSOS_$_PROJECTS_GET_ALL, UPDATE_PROJECT_EN_ATTENTE, UPDATE_PROJECT_VALIDER } from '../../../assets/app-const';

import { HttpParams, HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Status, DataResult } from '../../model/common.model';
import { Projet, AssosProjets } from '../../model/assos-projets.model';

@Injectable({
  providedIn: 'root'
})
export class AssosProjetsService {

  constructor(private http: HttpClient) { }

  getAll(withEnAttente: boolean): Observable<AssosProjets[]> {
    let params = new HttpParams();
    params = params.append('withattente', withEnAttente?'1':'0');
    return this.http.get<DataResult<AssosProjets[]>>(ASSOS_$_PROJECTS_GET_ALL, { params: params})
    .pipe(
      map(rst => {
        console.log("API ASSOS_$_PROJECTS_GET_ALL <= " + JSON.stringify(rst));
        return rst.status==='ECHEC' || rst.data.length === 0? []:rst.data;
      })
    );
  }

  updateEnAttente(body: Projet): Observable<Status> {
    return this.http.post<Status>(UPDATE_PROJECT_EN_ATTENTE, body).pipe(
      map(rst => {
        console.log("API UPDATE_PROJECT_EN_ATTENTE <= " + JSON.stringify(rst));
        return rst;
      }),
      // catchError((err) => {
      //   console.log("API UPDATE_PROJECT_EN_ATTENTE <= " + JSON.stringify(err));
      //   return null;
      // })
    );
  }

  updateValider(body: Projet): Observable<Status> {
    return this.http.post<Status>(UPDATE_PROJECT_VALIDER, body).pipe(
      map(rst => {
        console.log("API UPDATE_PROJECT_VALIDER <= " + JSON.stringify(rst));
        return rst;
      })
    );
  }

}
