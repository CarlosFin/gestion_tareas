import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-tarea',
  templateUrl: './formulario-tarea.component.html',
  styleUrls: ['./formulario-tarea.component.css'],
})
export class FormularioTareaComponent{
  textoBoton: string = '';

  cancelar: string = 'Regresar';

  tareaRead: boolean = false;
  descripcionRead: boolean = false;
  emailRead: boolean = false;
  usuarioRead: boolean = false;
  departamentoRead: boolean = false;


}
