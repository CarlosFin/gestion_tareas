import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario-tarea',
  templateUrl: './formulario-tarea.component.html',
  styleUrls: ['./formulario-tarea.component.css'],
})
export class FormularioTareaComponent {
  textoBoton: string = '';

  crear: string = 'Crear';
  cancelar: string = 'Cancelar';

  tareaRead: boolean = false;
  descripcionRead: boolean = false;
  emailRead: boolean = false;
  usuarioRead: boolean = false;
  departamentoRead: boolean = false;
}
