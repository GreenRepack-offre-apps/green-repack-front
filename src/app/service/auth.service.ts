import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SessionUser, Profils } from '../model/auth.model';
import { Marchand } from '../model/manager.model';
import { API_URL } from '../../assets/app-const';

@Injectable({
  providedIn: 'root'
})
export class AuthService<T> {
  current_user$: Observable<SessionUser<T>>;
  isFetch: boolean = false;
  constructor(private http: HttpClient) {
  }

  authentifier(username: string, password: string, profil: Profils) {
    this.current_user$ = this.http.post<SessionUser<T>>(API_URL + '/auth', {email: username, password: password, usertype: profil})
    .pipe(
      map(u => {
        this.isFetch = u.profil !== null && u.token !== null && u.user !== null;
        return u;
      )
    });
  }
}
