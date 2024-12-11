import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
    BotonInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
