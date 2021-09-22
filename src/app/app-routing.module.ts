import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationComponent } from './customers-pages/authentification/authentification.component';
import { InscriptionComponent } from './customers-pages/inscription/inscription.component';
import { HomeMarchandComponent } from './customers-pages/marchand/home-marchand/home-marchand.component';
import { AngularFireAuthGuard, hasCustomClaim, redirectLoggedInTo, redirectUnauthorizedTo, canActivate } from '@angular/fire/auth-guard';
import { GestionGreenRepackComponent } from './admin-pages/gestion-green-repack/gestion-green-repack.component';

const profil: string = sessionStorage.getItem('PROFIL') !== null ? String(localStorage.getItem('PROFIL')):'user';

const redirectLoggedHome = () => redirectLoggedInTo([profil + '/home']);
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['connexion']);
const belongsToAccount = (next:any) => hasCustomClaim(`account-${next.params.id}`);
const adminOnly = () => hasCustomClaim('admin');

const routes: Routes = [
  {
    path: 'connexion',
    component: AuthentificationComponent,
    canLoad: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedHome}
    //...canActivate(redirectLoggedHome),
  },
  {
    path: 'inscription',
    component: InscriptionComponent
  },
  {
    path: 'marchand',
    canLoad: [AngularFireAuthGuard],
    //...canActivate(redirectUnauthorizedToLogin),
    children: [
      {
        path:'home/:id',
        component: HomeMarchandComponent,
        //canLoad: [AngularFireAuthGuard],
        data: { authGuardPipe: belongsToAccount}

      },
      {
        path: '**',
        redirectTo:'home',
        pathMatch: 'full'
      }
    ]
  },
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
