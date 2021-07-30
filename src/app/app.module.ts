import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthentificationComponent } from './page/authentification/authentification.component';
import { InscriptionManagerComponent } from './page/inscription/inscription-manager/inscription-manager.component';
import { InscriptionComponent } from './page/inscription/inscription.component';
import { MaterialModule } from './lib/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { PrimengLibModule } from './lib/primeng-lib/primeng-lib.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    InscriptionComponent,
    InscriptionManagerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialModule,
    PrimengLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
