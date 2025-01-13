import { Component } from '@angular/core';

@Component({
  selector: 'app-card-user-admin',
  templateUrl: './card-user-admin.component.html',
  styleUrls: ['./card-user-admin.component.css'],
})
export class CardUserAdminComponent {
  usuarios = [
    {
      id: 1,
      nombre: 'Juan',
      departamento: 'Dirección General',
      correo: 'juan@gmail.com',
      foto: '../../assets/img/user.png'
    },
    {
      id: 2,
      nombre: 'Clara',
      departamento: 'Administración',
      correo: 'clara@gmail.com',
      foto: '../../assets/img/user.png'
    },
    {
      id: 3,
      nombre: 'Marcelina',
      departamento: 'Finanzas',
      correo: 'marcelina@gmail.com',
      foto: '../../assets/img/user.png'
    },
    {
      id: 4,
      nombre: 'Antonio',
      departamento: 'Recursos Humanos',
      correo: 'antonio@gmail.com',
      foto: '../../assets/img/user.png'
    },
  ];
}
