import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-boton-dark',
  templateUrl: './boton-dark.component.html',
  styleUrls: ['./boton-dark.component.css'],
})
export class BotonDarkComponent {
  @Input() textoBoton: string = '';
}
