import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-boton-danger',
  templateUrl: './boton-danger.component.html',
  styleUrls: ['./boton-danger.component.css']
})
export class BotonDangerComponent {
  @Input() textoBoton2: string = '';

}
