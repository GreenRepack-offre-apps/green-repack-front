import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Usertype } from '../../model/workflow-produit.model';
import { PAIEMENT_INIT, APP_URL } from '../../app-const';
import { ProfilsType } from '../../model/auth.model';
import { Stripe } from 'stripe';
import {loadStripe} from '@stripe/stripe-js';
@Injectable({
  providedIn: 'root'
})
export class PaimentService {
  stripe = loadStripe("pk_test_51JkjkqDKurM3h7MYJe4ZjVAIxnHME9dpYmCDNqQ5ZTjZZhqowW1DQea9epdzNboiWc5m2Bpn5FBEaA3pW17VUJEc00PtoYwsnZ");
  constructor(private http: HttpClient) {
  }

  paybox(user: string, type: ProfilsType) {
    let params = new HttpParams();
    if(type === 'MARCHAND'){
      params = params.append('marchand', user);
    }else if(type === 'CLIENT'){
      params = params.append('client', user);
    }
    return this.http.get(PAIEMENT_INIT, {params: params});
  }

  createPaiementIntent(body:any): Promise<any>{
    return this.http.post<any>(APP_URL + 'paiement/gestion/to/marchand', body)
      .toPromise();
  }
}
