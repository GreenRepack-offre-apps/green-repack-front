import { Injectable } from '@angular/core';
import { CurrentUser, UserProfils, AdminProfils } from '../../../model/auth.model';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, Observer, Subject } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthPayload, Status } from '../../../model/common.model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoad = true;
  isFetch: boolean = false;
  profilRegister:  UserProfils | AdminProfils | null;
  constructor( private firebaseAuth: AngularFireAuth, private readonly router: Router) {
  const sessionProfil = sessionStorage.getItem('PROFIL');
    if( sessionProfil ===  new UserProfils().type.toLowerCase()) {
      this.profilRegister = new UserProfils();
    } else if( sessionProfil ===  new AdminProfils().type.toLowerCase()) {
      this.profilRegister = new AdminProfils();
    }else {
      this.profilRegister = null;
    }
  }

  currentUser(profils: UserProfils | AdminProfils | undefined):  Observable<CurrentUser> {
    let token: any = null;
    this.firebaseAuth.idToken.subscribe(t => token = t)
    return this.firebaseAuth.authState.pipe(
      map(s => {
        console.log("current user & auth state " + JSON.stringify(s));
        this.isFetch = token !== null && s?.email !== null;
        const current_user: CurrentUser = { profil: profils!.type, sessionActive: false, email: s?.email, token: token, uid: s?.uid };
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

  signOut(payload: AuthPayload): Promise<void | Status>  {
    return this.firebaseAuth.createUserWithEmailAndPassword(payload.username, payload.password)
      .then(rst => {
        console.log("Inscription Marchand ..., work ");
        this.router.navigate(['connexion']);
      })
      .catch(err => {
        console.log('Inscription Marchand ..., failed');
        return {status:'Les donnees transmis sont erronnées !'};
      });
  }

  signIn(auth:AuthPayload): Promise<void | Status> {
    return this.firebaseAuth.signInWithEmailAndPassword(auth.username, auth.password)
    .then(rst =>{
        console.log("[AUTH] connexion start +> " + JSON.stringify(rst));
        sessionStorage.setItem('PROFIL','user');
        this.router.navigate(['home/'+rst.user?.uid]);
    })
    .catch(err => {
      console.log("[AUTH] connexion fail ... " + JSON.stringify(err));
      return {status:'les données renseignées sont invalid !!'};
    });
  }
}
