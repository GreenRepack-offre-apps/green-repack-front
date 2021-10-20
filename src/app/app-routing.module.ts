import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationComponent } from './customers-pages/authentification/authentification.component';
import { InscriptionComponent } from './customers-pages/inscription/inscription.component';
import { AngularFireAuthGuard, hasCustomClaim, redirectLoggedInTo, redirectUnauthorizedTo, canActivate } from '@angular/fire/auth-guard';
import { GestionGreenRepackComponent } from './admin-pages/gestion-green-repack/gestion-green-repack.component';
import { CustomerHomeComponent } from './customers-pages/customer-home/customer-home.component';
import { HomeMarchandComponent } from './customers-pages/customer-home/marchand/home-marchand/home-marchand.component';
import { HomeClientComponent } from './customers-pages/customer-home/client/home-client/home-client.component';

export const PROFIL_ROUTING: string = sessionStorage.getItem('PROFIL') !== null ? String(localStorage.getItem('PROFIL')):'user';


const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['connexion']);
const belongsToAccount = (next:any) => hasCustomClaim(`account-${next.params.id}`);
const adminOnly = () => hasCustomClaim('admin');
const clientRedirect = () => redirectLoggedInTo(['home']);
const clientOnly = () => hasCustomClaim('client');
const marchandOnly = () => hasCustomClaim('marchand');

const routes: Routes = [
  {
    path: 'connexion',
    component: AuthentificationComponent,
    canLoad: [AngularFireAuthGuard],
    //data: { authGuardPipe: clientRedirect}
    //...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'inscription',
    component: InscriptionComponent
  },
  // {
  //   path: 'client',
  //   canLoad: [AngularFireAuthGuard],
  //   //canActivateChild: [AngularFireAuthGuard],
  //   //...canActivate(redirectUnauthorizedToLogin),
  //   children: [
  //     {
  //       path:':id',
  //       component: HomeClientComponent,
  //       //canLoad: [AngularFireAuthGuard],
  //       data: { authGuardPipe: belongsToAccount}
  //     },
  //     {
  //       path: '**',
  //       redirectTo:':id',
  //       pathMatch: 'full'
  //     }
  //   ]
  // },
  {
    path: 'home',
    //canLoad: [AngularFireAuthGuard],
    //...canActivate(redirectUnauthorizedToLogin),
    children: [
      {
        path:':id',
        component: HomeMarchandComponent,
        //dcanLoad: [AngularFireAuthGuard],
        data: { authGuardPipe: belongsToAccount}
      },
      {
        path: '**',
        redirectTo: ':id',
        pathMatch: 'full'
      }
    ]
  },
  // {
  //   path: 'client',
  //   canLoad: [AngularFireAuthGuard],
  //   component: HomeClientComponent,
  // },

  {
    path: 'admin',
    component: GestionGreenRepackComponent
  },
  {
    path: 'admin',
    children: [
      {
        path:':id',
        component: GestionGreenRepackComponent,
        canLoad: [AngularFireAuthGuard],
      },
      {
        path: '**',
        redirectTo:':id',
        pathMatch: 'full',
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'connexion',
    //redirectTo: 'admin',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
