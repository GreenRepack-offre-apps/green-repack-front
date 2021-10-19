import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Usertype } from '../../model/workflow-produit.model';
import { PAIEMENT_INIT } from '../../../assets/app-const';
import { ProfilsType } from '../../model/auth.model';

@Injectable({
  providedIn: 'root'
})
export class PaimentService {

  constructor(private http: HttpClient) { }

  paybox(user: string, type: ProfilsType) {
    let params = new HttpParams();
    if(type === 'MARCHAND'){
      params = params.append('marchand', user);
    }else if(type === 'CLIENT'){
      params = params.append('client', user);
    }
    return this.http.get(PAIEMENT_INIT, {params: params});
  }
}
