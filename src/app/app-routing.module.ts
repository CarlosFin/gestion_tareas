import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { PrimaryButtonComponent } from './primary-button/primary-button.component'; // Importa el componente
import { LoginComponent } from './login/login.component';
import { ListaTareasUsuarioComponent } from './lista-tareas-usuario/lista-tareas-usuario.component';
import { ListaTareaAdminComponent } from './lista-tarea-admin/lista-tarea-admin.component';
import { ListaUsuariosAdminComponent } from './lista-usuarios-admin/lista-usuarios-admin.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'ListaTareaUsuario', component: ListaTareasUsuarioComponent },
  { path: 'ListaTareaAdmin', component: ListaTareaAdminComponent },
  { path: "ListaUsuarioAdmin", component: ListaUsuariosAdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
