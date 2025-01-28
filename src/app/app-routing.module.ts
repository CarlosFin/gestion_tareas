import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListaTareasUsuarioComponent } from './templates/lista-tareas-usuario/lista-tareas-usuario.component';
import { FormularioPerfilUsuarioComponent } from './components/formulario-perfil-usuario/formulario-perfil-usuario.component';
import { FormularioTareaVerComponent } from './components/formulario-tarea-ver/formulario-tarea-ver.component';
import { FormularioTareaEditarComponent } from './components/formulario-tarea-editar/formulario-tarea-editar.component';
import { FormularioTareaComponent } from './components/formulario-tarea/formulario-tarea.component';
import { FormularioTareaEditarAdminComponent } from './components/formulario-tarea-editar-admin/formulario-tarea-editar-admin.component';
import { FormularioTareaAdminComponent } from './components/formulario-tarea-admin/formulario-tarea-admin.component';
import { FormularioTareaVerAdminComponent } from './components/formulario-tarea-ver-admin/formulario-tarea-ver-admin.component';

import { ListaTareaAdminComponent } from './templates/lista-tarea-admin/lista-tarea-admin.component';
import { ListaUsuariosAdminComponent } from './templates/lista-usuarios-admin/lista-usuarios-admin.component';
import { FormularioUsuarioComponent } from './components/formulario-usuario/formulario-usuario.component';
import { FormularioUsuarioVerComponent } from './components/formulario-usuario-ver/formulario-usuario-ver.component';
import { FormularioUsuarioEditarComponent } from './components/formulario-usuario-editar/formulario-usuario-editar.component';
import { LoginComponent } from './templates/login/login.component';

const routes: Routes = [
  // { path: '', component: ListaTareaAdminComponent },

  // { path: '', component: ListaUsuariosAdminComponent },
  { path: 'lista-usuario-admin', component: ListaUsuariosAdminComponent },
  { path: 'lista-tarea-admin', component: ListaTareaAdminComponent },
  { path: 'formulario-usuario', component: FormularioUsuarioComponent },
  { path: 'formulario-usuario-ver/:id', component: FormularioUsuarioVerComponent },
  { path: 'formulario-usuario-editar/:id', component: FormularioUsuarioEditarComponent },
  { path: 'formulario-tarea-admin', component: FormularioTareaAdminComponent },

  // { path: '', component: ListaTareasUsuarioComponent },
  { path: 'lista-tareas-usuario', component: ListaTareasUsuarioComponent },
  { path: 'formulario-perfil-usuario', component: FormularioPerfilUsuarioComponent },
  { path: 'formulario-tarea-ver/:id', component: FormularioTareaVerComponent },
  { path: 'formulario-tarea-ver-admin/:id', component: FormularioTareaVerAdminComponent },
  { path: 'formulario-tarea-editar/:id', component: FormularioTareaEditarComponent },
  { path: 'formulario-tarea-editar-admin/:id', component: FormularioTareaEditarAdminComponent },
  { path: 'formulario-tarea', component: FormularioTareaComponent },

  { path: '', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
