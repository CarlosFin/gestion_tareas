import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './templates/header/header.component';
import { CardUserComponent } from './templates/card-user/card-user.component';
import { FormularioUsuarioComponent } from './components/formulario-usuario/formulario-usuario.component';
import { FormularioTareaComponent } from './components/formulario-tarea/formulario-tarea.component';
import { BotonRadioPendientesComponent } from './components/boton-radio-pendientes/boton-radio-pendientes.component';
import { BotonRadioTerminadasComponent } from './components/boton-radio-terminadas/boton-radio-terminadas.component';
import { BotonRadioTodasComponent } from './components/boton-radio-todas/boton-radio-todas.component';
import { LoginComponent } from './templates/login/login.component';
import { BotonSuccessComponent } from './components/boton-success/boton-success.component';
import { BotonDangerComponent } from './components/boton-danger/boton-danger.component';
import { BotonDarkComponent } from './components/boton-dark/boton-dark.component';
import { BotonInfoComponent } from './components/boton-info/boton-info.component';
import { CardComponent } from './templates/card/card.component';
import { FormularioTareaEditarComponent } from './components/formulario-tarea-editar/formulario-tarea-editar.component';
import { FormularioTareaVerComponent } from './components/formulario-tarea-ver/formulario-tarea-ver.component';
import { FormularioUsuarioEditarComponent } from './components/formulario-usuario-editar/formulario-usuario-editar.component';
import { FormularioUsuarioVerComponent } from './components/formulario-usuario-ver/formulario-usuario-ver.component';
import { ListaTareasUsuarioComponent } from './templates/lista-tareas-usuario/lista-tareas-usuario.component';
import { ListaUsuariosAdminComponent } from './templates/lista-usuarios-admin/lista-usuarios-admin.component';
import { FormularioPerfilUsuarioComponent } from './components/formulario-perfil-usuario/formulario-perfil-usuario.component';
import { FormularioComponent } from './templates/formulario/formulario.component';
import { FormularioGenericoTareaComponent } from './templates/formulario-generico-tarea/formulario-generico-tarea.component';
import { FormularioTareaEditarAdminComponent } from './components/formulario-tarea-editar-admin/formulario-tarea-editar-admin.component';
import { CardUserAdminComponent } from './templates/card-user-admin/card-user-admin.component';
import { ListaTareaAdminComponent } from './templates/lista-tarea-admin/lista-tarea-admin.component';
import { BotonInfoUsuariosAdminComponent } from './components/boton-info-usuarios-admin/boton-info-usuarios-admin.component';


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
    CardUserAdminComponent,
    ListaTareaAdminComponent,
    BotonInfoUsuariosAdminComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
