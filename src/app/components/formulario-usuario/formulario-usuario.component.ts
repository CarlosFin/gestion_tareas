import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario-usuario',
  templateUrl: './formulario-usuario.component.html',
  styleUrls: ['./formulario-usuario.component.css'],
})
export class FormularioUsuarioComponent {
  textoBoton: string = '';

  crear: string = 'Crear';
  cancelar: string = 'Cancelar';

  nombreRead: boolean = false;
  departamentoRead: boolean = false;
  emailRead: boolean = false;
  contraRead: boolean = false;
  ccontraRead: boolean = false;

  imagenDisplay: string = 'block';
  fotoDisplay: string = 'block';
}
