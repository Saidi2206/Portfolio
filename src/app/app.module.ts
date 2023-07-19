import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AjouterComponent } from './components/ajouter/ajouter.component';
import { AfficherComponent } from './components/afficher/afficher.component';


@NgModule({
  declarations: [
    AppComponent,
    AjouterComponent,
    AfficherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule , // Module pour les formulaires réactifs
    BrowserAnimationsModule,
    ToastrModule.forRoot(), // Module pour les notifications Toastr
    HttpClientModule // Module pour les requêtes HTTP

  ],  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
