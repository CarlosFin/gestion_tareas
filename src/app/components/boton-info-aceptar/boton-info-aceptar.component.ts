import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-boton-info-aceptar',
  templateUrl: './boton-info-aceptar.component.html',
  styleUrls: ['./boton-info-aceptar.component.css']
})
export class BotonInfoAceptarComponent {
  @Input() textoBoton: string = '';
}
