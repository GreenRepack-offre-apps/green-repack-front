import { NgModule } from '@angular/core';
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
import { HomeMarchandComponent } from './customers-pages/marchand/home-marchand/home-marchand.component';
import { AngularFireAuthModule, AngularFireAuth, PERSISTENCE } from '@angular/fire/auth';
import { GestionGreenRepackComponent } from './admin-pages/gestion-green-repack/gestion-green-repack.component';
import { SuiviDemandeProduitComponent } from './customers-pages/marchand/suivi-demande-produit/suivi-demande-produit.component';
import { SuiviDemandeListComponent } from './customers-pages/marchand/components/suivi-demande-list/suivi-demande-list.component';
import { AjoutProduitComponent } from './customers-pages/marchand/components/ajout-produit/ajout-produit.component';
import { FileUploadModule } from 'primeng/fileupload';
import { AngularFireStorageModule, AngularFireStorage } from '@angular/fire/storage';
import { AngularFireAuthGuardModule } from '@angular/fire/auth-guard';
import { HeaderComponent } from './common/header/header/header.component';

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
    SuiviDemandeProduitComponent,
    SuiviDemandeListComponent,
    AjoutProduitComponent,
    HeaderComponent
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
  ],
  providers: [
    FireSession,
    AngularFireStorage
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
