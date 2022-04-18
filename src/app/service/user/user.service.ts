import { Injectable } from '@angular/core';


import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { DataResult, UsersAttrib, Status } from '../../model/common.model';
import { User } from '../../model/users.model';
import { USERS_RECHERCHE_ENDPOINT, USERS_INSCRIPTION_ENDPOINT, USERS_UPDATE_ENDPOINT } from '../../app-const';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  searchUser(key:UsersAttrib, value:string): Observable<any> {
    return this.http.get<DataResult<User>>(USERS_RECHERCHE_ENDPOINT + '?'+key+'='+value);
  }

  create(body: User): Observable<Status> {
    return this.http.post<any>(USERS_INSCRIPTION_ENDPOINT, body);
  }
  update(body: User): Observable<any> {
    return this.http.post<DataResult<User>>(USERS_UPDATE_ENDPOINT, body).pipe(
      map((rst:any) => {
        console.log
        return rst.data?rst.data:null;
      })
    );
  }
}
