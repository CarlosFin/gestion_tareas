import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario-tarea-editar',
  templateUrl: './formulario-tarea-editar.component.html',
  styleUrls: ['./formulario-tarea-editar.component.css'],
})
export class FormularioTareaEditarComponent {
  textoBoton: string = '';

  actualizar: string = 'Actualizar';
  cancelar: string = 'Cancelar';

  tareaRead: boolean = false;
  descripcionRead: boolean = false;
  emailRead: boolean = false;
  usuarioRead: boolean = false;
  departamentoRead: boolean = true;
}
