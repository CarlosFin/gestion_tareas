import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { HeaderComponent } from './templates/header/header.component';
import { CardUserComponent } from './templates/card-user/card-user.component';
import { FormularioUsuarioComponent } from './components/formulario-usuario/formulario-usuario.component';
import { FormularioTareaComponent } from './components/formulario-tarea/formulario-tarea.component';
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
import { BotonInfoAceptarComponent } from './components/boton-info-aceptar/boton-info-aceptar.component';
import { ModoClaroOscuroComponent } from './modo-claro-oscuro/modo-claro-oscuro.component';
import { BotonRadioPendientesComponent } from './components/boton-radio-pendientes/boton-radio-pendientes.component';
import { BotonRadioTerminadasComponent } from './components/boton-radio-terminadas/boton-radio-terminadas.component';
import { BotonRadioTodasComponent } from './components/boton-radio-todas/boton-radio-todas.component';
import { FormularioGenericoTareaEditarComponent } from './templates/formulario-generico-tarea-editar/formulario-generico-tarea-editar.component';
import { FormularioGenericoTareaCrearComponent } from './templates/formulario-generico-tarea-crear/formulario-generico-tarea-crear.component';
import { FormularioEditarComponent } from './templates/formulario-editar/formulario-editar.component';
import { FormularioCrearComponent } from './templates/formulario-crear/formulario-crear.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/compat/auth';
import { HeaderAdminComponent } from './templates/header-admin/header-admin.component';
import { ErrorMenssageComponent } from './components/error-menssage/error-menssage.component';
import { CardAdminComponent } from './templates/card-admin/card-admin.component';
import { FormularioTareaVerAdminComponent } from './components/formulario-tarea-ver-admin/formulario-tarea-ver-admin.component';
import { FormularioGenericoTareaAdminComponent } from './templates/formulario-generico-tarea-admin/formulario-generico-tarea-admin.component';
import { FormularioGenericoTareaEditarAdminComponent } from './templates/formulario-generico-tarea-editar-admin/formulario-generico-tarea-editar-admin.component';
import { BotonInfoAdminComponent } from './components/boton-info-admin/boton-info-admin.component';
import { FormularioTareaAdminComponent } from './components/formulario-tarea-admin/formulario-tarea-admin.component';
import { FormularioTareaCrearAdminComponent } from './templates/formulario-tarea-crear-admin/formulario-tarea-crear-admin.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyCnbVXEFMsgF01u0lNG7KYC41rQoUrZFOo',
  authDomain: 'fir-f5611.firebaseapp.com',
  projectId: 'fir-f5611',
  storageBucket: 'fir-f5611.firebasestorage.app',
  messagingSenderId: '844197985134',
  appId: '1:844197985134:web:19f0e60712e6a56e749f7f',
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardUserComponent,
    FormularioUsuarioComponent,
    FormularioTareaComponent,
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
    BotonInfoAceptarComponent,
    ModoClaroOscuroComponent,
    BotonRadioPendientesComponent,
    BotonRadioTerminadasComponent,
    BotonRadioTodasComponent,
    FormularioGenericoTareaEditarComponent,
    FormularioGenericoTareaCrearComponent,
    FormularioEditarComponent,
    FormularioCrearComponent,
    HeaderAdminComponent,
    ErrorMenssageComponent,
    CardAdminComponent,
    FormularioTareaVerAdminComponent,
    FormularioGenericoTareaAdminComponent,
    FormularioGenericoTareaEditarAdminComponent,
    BotonInfoAdminComponent,
    FormularioTareaAdminComponent,
    FormularioTareaCrearAdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

// rules_version = '2';

// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document=**} {
//       allow read, write: if
//           request.time < timestamp.date(2025, 2, 27);
//     }
//   }
// }
