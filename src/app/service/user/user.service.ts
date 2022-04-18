import { Injectable } from '@angular/core';


import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { DataResult, UsersAttrib, Status } from '../../model/common.model';
import { User } from '../../model/users.model';
import { USERS_RECHERCHE_ENDPOINT, USERS_INSCRIPTION_ENDPOINT, USERS_UPDATE_ENDPOINT } from '../../app-const';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  private user!: User;
  get customer() {
    return this.user;
  }
  set customer(user: User){
    this.user = user;
  }
  searchUser(key:UsersAttrib, value:string): Observable<any> {
    return this.http.get<DataResult<User>>(USERS_RECHERCHE_ENDPOINT + '?'+key+'='+value);
  }

  create(body: User): Observable<Status> {
    return this.http.post<any>(USERS_INSCRIPTION_ENDPOINT, body);
  }
  update(body: any, iduser: any): Observable<any> {
    let paramSearch = new HttpParams();
    paramSearch = paramSearch.append('iduser', iduser);
    return this.http.post<DataResult<User>>(
      USERS_UPDATE_ENDPOINT,
      body, {params: paramSearch})
      .pipe(
      map((rst:any) => {
        console.log('[USERS_UPDATE_ENDPOINT] => ' + JSON.stringify(rst))
        return rst.data?rst.data:null;
      })
    );
  }
}
