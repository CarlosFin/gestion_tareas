import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  @Input() nombreR: boolean = false;
  @Input() departamentoR: boolean = false;
  @Input() emailR: boolean = false;
  @Input() contraR: boolean = false;
  @Input() ccontraR: boolean = false;

  @Input() imagenD: string = 'block';
  @Input() fotoD: string = 'block';

  @Input() contraRD: string = 'block';
  @Input() ccontraRD: string = 'block';
}
