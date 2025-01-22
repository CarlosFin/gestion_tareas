import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario-usuario',
  templateUrl: './formulario-usuario.component.html',
  styleUrls: ['./formulario-usuario.component.css'],
})
export class FormularioUsuarioComponent {
  textoBoton: string = '';

  cancelar: string = 'Regresar';

  nombreRead: boolean = false;
  departamentoRead: boolean = false;
  emailRead: boolean = false;
  contraRead: boolean = false;
  ccontraRead: boolean = false;

  imagenDisplay: string = 'block';
  fotoDisplay: string = 'block';
}
