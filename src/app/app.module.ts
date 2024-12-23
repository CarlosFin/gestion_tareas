import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

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
import { CardComponent } from './card/card.component';
import { FormularioTareaEditarComponent } from './formulario-tarea-editar/formulario-tarea-editar.component';
import { FormularioTareaVerComponent } from './formulario-tarea-ver/formulario-tarea-ver.component';
import { FormularioUsuarioEditarComponent } from './formulario-usuario-editar/formulario-usuario-editar.component';
import { FormularioUsuarioVerComponent } from './formulario-usuario-ver/formulario-usuario-ver.component';
import { ListaTareasUsuarioComponent } from './lista-tareas-usuario/lista-tareas-usuario.component';
import { ListaUsuariosAdminComponent } from './lista-usuarios-admin/lista-usuarios-admin.component';
import { FormularioPerfilUsuarioComponent } from './formulario-perfil-usuario/formulario-perfil-usuario.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FormularioGenericoTareaComponent } from './formulario-generico-tarea/formulario-generico-tarea.component';
import { FormularioTareaEditarAdminComponent } from './formulario-tarea-editar-admin/formulario-tarea-editar-admin.component';
import { CarUserAdminComponent } from './car-user-admin/car-user-admin.component';
import { ListaTareaAdminComponent } from './lista-tarea-admin/lista-tarea-admin.component';

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
    BotonInfoComponent,
    CardComponent,
    FormularioTareaEditarComponent,
    FormularioTareaVerComponent,
    FormularioUsuarioEditarComponent,
    FormularioUsuarioVerComponent,
    ListaTareasUsuarioComponent,
    ListaUsuariosAdminComponent,
    FormularioPerfilUsuarioComponent,
    FormularioComponent,
    FormularioGenericoTareaComponent,
    FormularioTareaEditarAdminComponent,
    CarUserAdminComponent,
    ListaTareaAdminComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
