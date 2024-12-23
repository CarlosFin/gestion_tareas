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

  nombreRead: boolean = true;
  departamentoRead: boolean = true;
  emailRead: boolean = true;
  contraRead: boolean = true;
  ccontraRead: boolean = true;

  imagenDisplay: string = 'none';
  fotoDisplay: string = 'block';
}
