import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario-tarea-editar-admin',
  templateUrl: './formulario-tarea-editar-admin.component.html',
  styleUrls: ['./formulario-tarea-editar-admin.component.css'],
})
export class FormularioTareaEditarAdminComponent {
  textoBoton: string = '';

  actualizar: string = 'Actualizar';
  cancelar: string = 'Cancelar';

  tareaRead: boolean = false;
  descripcionRead: boolean = false;
  emailRead: boolean = false;
  usuarioRead: boolean = false;
  departamentoRead: boolean = true;
}
