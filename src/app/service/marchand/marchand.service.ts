import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MARCHAND_RECHERCHE_ENDPOINT, MARCHAND_INSCRIPTION_ENDPOINT } from '../../../assets/app-const';
import { MarchandSearch, MarchandAttrib } from '../../model/common.model';
import { Marchand } from 'src/app/model/marchand.model';

@Injectable({
  providedIn: 'root'
})
export class MarchandService {

  constructor(private http: HttpClient) { }

  searchMarchand(key:MarchandAttrib, value:string): Observable<MarchandSearch> {
    return this.http.get<MarchandSearch>(MARCHAND_RECHERCHE_ENDPOINT + '?'+key+'='+value);
  }

  createMarchand(body: Marchand): Observable<any> {
    const req = {nom: body.nom, email: body.email, adresse: body.adresse};
    return this.http.post<any>(MARCHAND_INSCRIPTION_ENDPOINT, req);
  }
}
