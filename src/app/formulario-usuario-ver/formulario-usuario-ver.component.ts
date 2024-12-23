import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario-usuario-ver',
  templateUrl: './formulario-usuario-ver.component.html',
  styleUrls: ['./formulario-usuario-ver.component.css'],
})
export class FormularioUsuarioVerComponent {
  textoBoton: string = '';

  regresar: string = 'Regresar';

  nombreRead: boolean = false;
  departamentoRead: boolean = false;
  emailRead: boolean = false;
  contraRead: boolean = false;
  ccontraRead: boolean = false;

  imagenDisplay: string = 'bolck';
  fotoDisplay: string = 'none';
}
