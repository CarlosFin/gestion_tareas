import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-boton-success',
  templateUrl: './boton-success.component.html',
  styleUrls: ['./boton-success.component.css'],
})
export class BotonSuccessComponent {
  @Input() textoBoton: string = '';
}
