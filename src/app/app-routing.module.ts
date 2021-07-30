import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationComponent } from './page/authentification/authentification.component';
import { InscriptionComponent } from './page/inscription/inscription.component';

const routes: Routes = [
  {
    path: 'connexion',
    component: AuthentificationComponent
  },
  {
    path: 'inscription',
    component: InscriptionComponent
  },
  {
    path: '**',
    redirectTo:'inscription',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
