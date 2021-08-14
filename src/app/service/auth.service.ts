import { Injectable } from '@angular/core';
import { CurrentUser, MarchandProfils, ClientProfils, AdminProfils } from '../model/auth.model';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, Observer, Subject } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ObserveOnSubscriber } from 'rxjs/internal/operators/observeOn';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoad = true;
  isFetch: boolean = false;
  constructor( private firebaseAuth: AngularFireAuth, private readonly router: Router) {
  }

  //const c_user =  CreateSelector()

  currentUser(profils: MarchandProfils | ClientProfils | AdminProfils):  Observable<any> {
    let token: any = null;
    this.firebaseAuth.idToken.subscribe(t => token = t)
    return this.firebaseAuth.authState.pipe(
      map(s => {

        console.log("current user & auth state " + JSON.stringify(s));
        // s?.getIdToken(true)
        // .then(r => token = r)
        // .catch(err => {
        //     token = null;
        //     console.log("err: token id is " + err);
        // });

        this.isFetch = token !== null && s?.email !== null;
        const current_user: CurrentUser = { profil: profils.type, sessionActive: false, email: s?.email, token: token, uid: s?.uid };
        console.log("current user is " + JSON.stringify(current_user));
        return current_user;
        // observer.next(current_user);
        // observer.complete();
      }),
      distinctUntilChanged()
      // catchError(err => {
      //   this.isLoad = false;
      // })
    );
    //return observer;
  }
}
