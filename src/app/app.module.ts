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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardUserComponent,
    FormularioUsuarioComponent,
    FormularioTareaComponent,
    BotonRadioPendientesComponent,
    BotonRadioTerminadasComponent,
    BotonRadioTodasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
