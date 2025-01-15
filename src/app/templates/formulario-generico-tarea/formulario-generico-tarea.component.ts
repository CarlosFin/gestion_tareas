import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-formulario-generico-tarea',
  templateUrl: './formulario-generico-tarea.component.html',
  styleUrls: ['./formulario-generico-tarea.component.css'],
})
export class FormularioGenericoTareaComponent {
  @Input() tareaR: boolean = false;
  @Input() descripcionR: boolean = false;
  @Input() emailR: boolean = false;
  @Input() usuarioR: boolean = false;
  @Input() departamentoR: boolean = false;
}
