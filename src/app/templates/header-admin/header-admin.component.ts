import { Component } from '@angular/core';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.css'],
})
export class HeaderAdminComponent {
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
