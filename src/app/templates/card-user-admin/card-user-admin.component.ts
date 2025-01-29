import { Component, OnInit } from '@angular/core';
import { TareasService } from 'src/app/services/tareas.service';

@Component({
  selector: 'app-card-user-admin',
  templateUrl: './card-user-admin.component.html',
  styleUrls: ['./card-user-admin.component.css'],
})
export class CardUserAdminComponent implements OnInit {
  usuarios: {
    id: number;
    nombre: string;
    departamento: string;
    correo: string;
    foto: string;
  }[] = [];

  constructor(private tareasService: TareasService) {}

  ngOnInit() {
    // Cargar la lista inicial de tareas
    this.usuarios = this.tareasService.getUsuarios();
  }

  eliminarUsuario(id: number) {
    this.tareasService.deleteUsuario(id); // Eliminamos la tarea del servicio
    this.usuarios = this.tareasService.getUsuarios(); // Actualizamos la lista en la vista
  }

  enlace: HTMLCollectionOf<HTMLAnchorElement> = document.getElementsByTagName('a');
  isDarkMode: Boolean = document.body.classList.contains("darkMode");

  changeStyle() {

    if (!this.isDarkMode) {

      document.getElementsByTagName("span")[1].innerHTML = 'dark_mode';
      //document.getElementsByTagName("span")[1].classList.add("dark");*/

      document.body.classList.add("darkMode");
      document.body.style.backgroundColor = 'var(--dark-bg)';

      Array.from(this.enlace).forEach(link => {
        link.style.color = 'var(--white-bg)';
      });

      this.isDarkMode = true;

    } else {

      document.getElementsByTagName("span")[1].innerHTML = 'light_mode';
      //document.getElementsByTagName("span")[1].classList.remove("dark");*/

      document.body.classList.remove("darkMode");
      document.body.style.backgroundColor = 'var(--white-bg)';

      Array.from(this.enlace).forEach(link => {
        link.style.color = 'var(--dark-bg)';
      });

      this.isDarkMode = false;
    }
  };

}
