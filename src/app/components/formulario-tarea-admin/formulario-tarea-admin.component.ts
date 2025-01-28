import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario-tarea-admin',
  templateUrl: './formulario-tarea-admin.component.html',
  styleUrls: ['./formulario-tarea-admin.component.css'],
})
export class FormularioTareaAdminComponent {
  textoBoton: string = '';

  cancelar: string = 'Regresar';

  tareaRead: boolean = false;
  descripcionRead: boolean = false;
  emailRead: boolean = false;
  usuarioRead: boolean = false;
  departamentoRead: boolean = false;
}
