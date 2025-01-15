import { Component } from '@angular/core';

@Component({
  selector: 'app-card-user-admin',
  templateUrl: './card-user-admin.component.html',
  styleUrls: ['./card-user-admin.component.css'],
})
export class CardUserAdminComponent {
  usuarios = [
    { nombre: 'Juan', departamento: 'Aministracion' },
    { nombre: 'Ana', departamento: 'Mantenimiento' },
    { nombre: 'Luis', departamento: 'Contabilidad' },
    { nombre: 'Carlos', departamento: 'Contabilidad' },
  ];
}
