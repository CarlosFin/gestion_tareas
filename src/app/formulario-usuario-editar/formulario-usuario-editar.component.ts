import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario-usuario-editar',
  templateUrl: './formulario-usuario-editar.component.html',
  styleUrls: ['./formulario-usuario-editar.component.css'],
})
export class FormularioUsuarioEditarComponent {
  textoBoton: string = '';

  editar: string = 'Actualizar';
  cancelar: string = 'Cancelar';
}
