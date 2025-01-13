import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListaTareasUsuarioComponent } from './lista-tareas-usuario/lista-tareas-usuario.component';
import { FormularioPerfilUsuarioComponent } from './formulario-perfil-usuario/formulario-perfil-usuario.component';
import { FormularioTareaVerComponent } from './formulario-tarea-ver/formulario-tarea-ver.component';
import { FormularioTareaEditarComponent } from './formulario-tarea-editar/formulario-tarea-editar.component';
import { FormularioTareaComponent } from './formulario-tarea/formulario-tarea.component';

import { ListaTareaAdminComponent } from './lista-tarea-admin/lista-tarea-admin.component';
import { ListaUsuariosAdminComponent } from './lista-usuarios-admin/lista-usuarios-admin.component';
import { FormularioUsuarioComponent } from './formulario-usuario/formulario-usuario.component';
import { FormularioUsuarioVerComponent } from './formulario-usuario-ver/formulario-usuario-ver.component';
import { FormularioUsuarioEditarComponent } from './formulario-usuario-editar/formulario-usuario-editar.component';


const routes: Routes = [
  // { path: '', component: ListaTareaAdminComponent },

  { path: '', component: ListaUsuariosAdminComponent },
  { path: 'lista-usuario-admin', component: ListaUsuariosAdminComponent },
  { path: 'lista-tarea-admin', component: ListaTareaAdminComponent },
  { path: 'formulario-usuario', component: FormularioUsuarioComponent },
  { path: 'formulario-usuario-ver/:id', component: FormularioUsuarioVerComponent },
  { path: 'formulario-usuario-editar', component: FormularioUsuarioEditarComponent },

  // { path: '', component: ListaTareasUsuarioComponent },
  { path: 'lista-tareas-usuario', component: ListaTareasUsuarioComponent },
  { path: 'formulario-perfil-usuario', component: FormularioPerfilUsuarioComponent },
  { path: 'formulario-tarea-ver/:id', component: FormularioTareaVerComponent },
  { path: 'formulario-tarea-editar', component: FormularioTareaEditarComponent },
  { path: 'formulario-tarea', component: FormularioTareaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
