import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario-tarea-ver',
  templateUrl: './formulario-tarea-ver.component.html',
  styleUrls: ['./formulario-tarea-ver.component.css'],
})
export class FormularioTareaVerComponent {
  textoBoton: string = '';

  regresar: string = 'Regresar';

  tareaRead: boolean = true;
  descripcionRead: boolean = true;
  emailRead: boolean = true;
  usuarioRead: boolean = true;
  departamentoRead: boolean = true;
}
