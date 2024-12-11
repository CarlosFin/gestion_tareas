import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from './app.component';
import { PrimaryButtonComponent } from './primary-button/primary-button.component';
import { AppRoutingModule } from './app-routing.module';
import { CardComponent } from './card/card.component'; // Importa el módulo de enrutamiento
import { HeaderComponent } from './header/header.component';
import { CardUserComponent } from './card-user/card-user.component';
import { FormularioUsuarioComponent } from './formulario-usuario/formulario-usuario.component';
import { FormularioTareaComponent } from './formulario-tarea/formulario-tarea.component';
import { BotonRadioPendientesComponent } from './boton-radio-pendientes/boton-radio-pendientes.component';
import { BotonRadioTerminadasComponent } from './boton-radio-terminadas/boton-radio-terminadas.component';
import { BotonRadioTodasComponent } from './boton-radio-todas/boton-radio-todas.component';
import { LoginComponent } from './login/login.component';
import { BotonSuccessComponent } from './boton-success/boton-success.component';
import { BotonDangerComponent } from './boton-danger/boton-danger.component';
import { BotonDarkComponent } from './boton-dark/boton-dark.component';
import { BotonInfoComponent } from './boton-info/boton-info.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimaryButtonComponent,
    CardComponent,
    HeaderComponent,
    CardUserComponent,
    FormularioUsuarioComponent,
    FormularioTareaComponent,
    BotonRadioPendientesComponent,
    BotonRadioTerminadasComponent,
    BotonRadioTodasComponent,
    LoginComponent,
    BotonSuccessComponent,
    BotonDangerComponent,
    BotonDarkComponent,
    BotonInfoComponent,
    CardComponent
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
