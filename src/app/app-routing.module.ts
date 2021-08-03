import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationComponent } from './customers-pages/authentification/authentification.component';
import { InscriptionComponent } from './customers-pages/inscription/inscription.component';
import { HomeMarchandComponent } from './customers-pages/marchand/home-marchand/home-marchand.component';
import { AngularFireAuthGuard, hasCustomClaim, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { GestionGreenRepackComponent } from './admin-pages/gestion-green-repack/gestion-green-repack.component';

//const profil: string = sessionStorage.getItem('PROFIL') == null ? String(localStorage.getItem('PROFIL')).toLowerCase()+'/home': 'connexion';
//const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['connexion']);
// let redirectLoggedHome = null;
// if(profil){
// export const redirectLoggedHome = () => redirectLoggedInTo([String(profil).toLowerCase()+'marchand/home']);
// // }
const belongsToAccount = (next:any) => hasCustomClaim(`account-${next.params.id}`);

const routes: Routes = [
  {
    path: 'connexion',
    component: AuthentificationComponent,
    //canActivate: [AngularFireAuthGuard],
    //data: { authGuardPipe: redirectLoggedInTo([profil]) }
  },
  {
    path: 'inscription',
    component: InscriptionComponent
  },
  {
    path:'marchand',
    children: [
      {
        path:'home/:id',
        component: HomeMarchandComponent,
        canActivateChild: [AngularFireAuthGuard],
        data: { authGuardPipe: belongsToAccount }
      },
      {
        path: '**',
        redirectTo:'home',
        pathMatch: 'full'
      }
    ]

  },
  {
    path: 'admin/auth',
    component: GestionGreenRepackComponent
    //canActivate: [AngularFireAuthGuard],
    //data: { authGuardPipe: redirectLoggedInTo([profil]) }
  },
  {
    path: '**',
    redirectTo: 'connexion',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
