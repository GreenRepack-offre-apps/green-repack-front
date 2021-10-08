import { Injectable } from '@angular/core';
import { Client, ClientModel } from '../../model/client.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CLIENT_CREATE, CLIENT_GET } from '../../../assets/app-const';
import { DataResult, Status } from '../../model/common.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient){ }

  add(client:Client): Observable<boolean> {
    return this.http.post<Status>(CLIENT_CREATE, {body:client}).pipe(
      map(res =>{
        return res.status === 'SUCCES'?true:false;
      })
    );
  }
  get(key:string, value:string): Observable<ClientModel | null> {
    let param = new HttpParams();
    param = param.append(key,value);
    return this.http.get<DataResult<ClientModel>>(CLIENT_GET, {params: param})
    .pipe(
      map(res =>{
        console.log('API_CLIENT_GET <= '+JSON.stringify(res));
        return res.status === 'SUCCES' ? res.data:null;

      })
    );
  }

}
