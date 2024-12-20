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
}
