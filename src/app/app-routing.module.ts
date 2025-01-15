import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListaTareasUsuarioComponent } from './templates/lista-tareas-usuario/lista-tareas-usuario.component';
import { FormularioPerfilUsuarioComponent } from './components/formulario-perfil-usuario/formulario-perfil-usuario.component';
import { FormularioTareaVerComponent } from './components/formulario-tarea-ver/formulario-tarea-ver.component';
import { FormularioTareaEditarComponent } from './components/formulario-tarea-editar/formulario-tarea-editar.component';
import { FormularioTareaComponent } from './components/formulario-tarea/formulario-tarea.component';

import { ListaTareaAdminComponent } from './templates/lista-tarea-admin/lista-tarea-admin.component';
import { ListaUsuariosAdminComponent } from './templates/lista-usuarios-admin/lista-usuarios-admin.component';
import { FormularioUsuarioComponent } from './components/formulario-usuario/formulario-usuario.component';
import { FormularioUsuarioVerComponent } from './components/formulario-usuario-ver/formulario-usuario-ver.component';
import { FormularioUsuarioEditarComponent } from './components/formulario-usuario-editar/formulario-usuario-editar.component';

const routes: Routes = [
  { path: '', component: ListaTareaAdminComponent },

  // { path: '', component: ListaUsuariosAdminComponent },
  { path: 'lista-usuario-admin', component: ListaUsuariosAdminComponent },
  { path: 'lista-tarea-admin', component: ListaTareaAdminComponent },
  { path: 'formulario-usuario', component: FormularioUsuarioComponent },
  { path: 'formulario-usuario-ver', component: FormularioUsuarioVerComponent },
  { path: 'formulario-usuario-editar', component: FormularioUsuarioEditarComponent },

  // { path: '', component: ListaTareasUsuarioComponent },
  { path: 'lista-tareas-usuario', component: ListaTareasUsuarioComponent },
  { path: 'formulario-perfil-usuario', component: FormularioPerfilUsuarioComponent },
  { path: 'formulario-tarea-ver', component: FormularioTareaVerComponent },
  { path: 'formulario-tarea-editar', component: FormularioTareaEditarComponent },
  { path: 'formulario-tarea', component: FormularioTareaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
