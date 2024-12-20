import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario-perfil-usuario',
  templateUrl: './formulario-perfil-usuario.component.html',
  styleUrls: ['./formulario-perfil-usuario.component.css'],
})
export class FormularioPerfilUsuarioComponent {
  textoBoton: string = '';

  actualizar: string = 'Actualizar';
  cancelar: string = 'Cancelar';
}
