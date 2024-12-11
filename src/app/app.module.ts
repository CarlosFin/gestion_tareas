import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from './app.component';
import { PrimaryButtonComponent } from './primary-button/primary-button.component';
import { AppRoutingModule } from './app-routing.module'; // Importa el módulo de enrutamiento

@NgModule({
  declarations: [
    AppComponent,
    PrimaryButtonComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    AppRoutingModule // Asegúrate de importar el módulo de enrutamiento aquí
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
