import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthentificationComponent } from './page/authentification/authentification.component';
import { InscriptionMarchandComponent } from './page/inscription/inscription-marchand/inscription-marchand.component';
import { InscriptionComponent } from './page/inscription/inscription.component';
import { MaterialModule } from './lib/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { PrimengLibModule } from './lib/primeng-lib/primeng-lib.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { AuthMarchandComponent } from './page/authentification/auth-marchand/auth-marchand.component';
import { HomeMarchandComponent } from './page/marchand/home-marchand/home-marchand.component';
import { AngularFireAuthModule } from '@angular/fire/auth';

@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    InscriptionComponent,
    InscriptionMarchandComponent,
    AuthMarchandComponent,
    HomeMarchandComponent
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
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
