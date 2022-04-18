import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthentificationComponent } from './customers-pages/authentification/authentification.component';
import { InscriptionMarchandComponent } from './customers-pages/inscription/inscription-marchand/inscription-marchand.component';
import { InscriptionComponent } from './customers-pages/inscription/inscription.component';
import { MaterialModule } from './lib/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { PrimengLibModule } from './lib/primeng-lib/primeng-lib.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { AuthMarchandComponent } from './customers-pages/authentification/auth-marchand/auth-marchand.component';
import { HomeMarchandComponent } from './customers-pages/customer-home/marchand/home-marchand/home-marchand.component';
import { AngularFireAuthModule, AngularFireAuth, PERSISTENCE } from '@angular/fire/auth';
import { GestionGreenRepackComponent } from './admin-pages/gestion-green-repack/gestion-green-repack.component';
import { SuiviDemandeListComponent } from './customers-pages/customer-home/marchand/components/suivi-demande-list/suivi-demande-list.component';
import { AjoutProduitComponent } from './customers-pages/customer-home/marchand/components/ajout-produit/ajout-produit.component';
import { FileUploadModule } from 'primeng/fileupload';
import { AngularFireStorageModule, AngularFireStorage } from '@angular/fire/storage';
import { AngularFireAuthGuardModule, AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { HeaderComponent } from './common/header/header/header.component';
import { AuthDialogComponent } from './admin-pages/components/auth-dialog/auth-dialog.component';
import { DatePipe } from '@angular/common';
import { EtatGestionDemandeListComponent } from './admin-pages/components/etat-gestion-demande-list/etat-gestion-demande-list.component';
import { DemandeGestionProjetassosComponent } from './admin-pages/components/demande-gestion-projetassos/demande-gestion-projetassos.component';
import { HomeClientComponent } from './customers-pages/customer-home/client/home-client/home-client.component';
import { ProduitsAchatsComponent } from './customers-pages/customer-home/client/components/produits-achats/produits-achats.component';
import { CommandesComponent } from './customers-pages/customer-home/client/components/commandes/commandes.component';
import { PanierComponent } from './customers-pages/customer-home/client/components/panier/panier.component';
import { CustomerHomeComponent } from './customers-pages/customer-home/customer-home.component';
import { StripeModule } from "stripe-angular";
import { PayboxComponent } from './paybox/paybox.component';

const FireSession = [{ provide: PERSISTENCE, useValue: 'local' }]
@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    InscriptionComponent,
    InscriptionMarchandComponent,
    AuthMarchandComponent,
    HomeMarchandComponent,
    GestionGreenRepackComponent,
    SuiviDemandeListComponent,
    AjoutProduitComponent,
    HeaderComponent,
    AuthDialogComponent,
    EtatGestionDemandeListComponent,
    DemandeGestionProjetassosComponent,
    HomeClientComponent,
    ProduitsAchatsComponent,
    CommandesComponent,
    PanierComponent,
    CustomerHomeComponent,
    PayboxComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    PrimengLibModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireAuthGuardModule,
    AngularFireStorageModule,
    FileUploadModule,
    //StripeModule.forRoot('pk_test_51JkjkqDKurM3h7MYJe4ZjVAIxnHME9dpYmCDNqQ5ZTjZZhqowW1DQea9epdzNboiWc5m2Bpn5FBEaA3pW17VUJEc00PtoYwsnZ')
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    DatePipe,
    FireSession,
    AngularFireStorage,
    AngularFireAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
