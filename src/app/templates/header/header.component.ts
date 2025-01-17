import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ModoClaroOscuroComponent } from "../../modo-claro-oscuro/modo-claro-oscuro.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  usuarios = [
    {
      id: 1,
      nombre: 'Juan',
      departamento: 'Dirección General',
      correo: 'juan@gmail.com',
      foto: '../../assets/img/user.png',
    },
    {
      id: 2,
      nombre: 'Clara',
      departamento: 'Administración',
      correo: 'clara@gmail.com',
      foto: '../../assets/img/user.png',
    },
    {
      id: 3,
      nombre: 'Marcelina',
      departamento: 'Finanzas',
      correo: 'marcelina@gmail.com',
      foto: '../../assets/img/user.png',
    },
    {
      id: 4,
      nombre: 'Antonio',
      departamento: 'Recursos Humanos',
      correo: 'antonio@gmail.com',
      foto: '../../assets/img/user.png',
    },
  ];
}
