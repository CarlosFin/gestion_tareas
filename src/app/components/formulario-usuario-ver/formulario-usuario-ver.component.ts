import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario-usuario-ver',
  templateUrl: './formulario-usuario-ver.component.html',
  styleUrls: ['./formulario-usuario-ver.component.css'],
})
export class FormularioUsuarioVerComponent {
  textoBoton: string = '';

  regresar: string = 'Regresar';

  nombreRead: boolean = true;
  departamentoRead: boolean = true;
  emailRead: boolean = true;
  contraRead: boolean = true;
  ccontraRead: boolean = true;

  imagenDisplay: string = 'none';
  fotoDisplay: string = 'block';

  contraDisplay: string = 'none';
  ccontraDisplay: string = 'none';
}
