import { Component } from '@angular/core';

@Component({
  selector: 'app-car-user-admin',
  templateUrl: './car-user-admin.component.html',
  styleUrls: ['./car-user-admin.component.css'],
})
export class CarUserAdminComponent {
  usuarios = [
    { nombre: 'Juan', departamento: 'Aministracion' },
    { nombre: 'Ana', departamento: 'Mantenimiento' },
    { nombre: 'Luis', departamento: 'Contabilidad' },
    { nombre: 'Carlos', departamento: 'Contabilidad' },
  ];
}
