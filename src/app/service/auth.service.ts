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
  profilRegister:  MarchandProfils | ClientProfils | AdminProfils | null;
  constructor( private firebaseAuth: AngularFireAuth, private readonly router: Router) {
  const sessionProfil = sessionStorage.getItem('PROFIL');
    if( sessionProfil ===  new MarchandProfils().type.toLowerCase()) {
      this.profilRegister = new MarchandProfils();
    } else if( sessionProfil ===  new ClientProfils().type.toLowerCase()) {
      this.profilRegister = new ClientProfils();
    } else if( sessionProfil ===  new AdminProfils().type.toLowerCase()) {
      this.profilRegister = new AdminProfils();
    } else {
      this.profilRegister = null ;
    }
  }

  currentUser(profils: MarchandProfils | ClientProfils | AdminProfils):  Observable<CurrentUser> {
    let token: any = null;
    this.firebaseAuth.idToken.subscribe(t => token = t)
    return this.firebaseAuth.authState.pipe(
      map(s => {
        console.log("current user & auth state " + JSON.stringify(s));
        this.isFetch = token !== null && s?.email !== null;
        const current_user: CurrentUser = { profil: profils.type, sessionActive: false, email: s?.email, token: token, uid: s?.uid };
        console.log("current user is " + JSON.stringify(current_user));
        return current_user;
      }),
      distinctUntilChanged()
    );
  }

  forceLogout(redirect_url:any = null) {
    let token: any = null;
    this.firebaseAuth.authState.subscribe(auth => {
      if(auth !== null) {
        this.firebaseAuth.signOut().then(r => {
          sessionStorage.clear();
          this.router.navigateByUrl(redirect_url !== null ? redirect_url: 'connexion');
        })
        .catch(err => console.log('error; Can\'t logout '));
      }
    })

  }
}
