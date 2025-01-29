import { Component, Input } from '@angular/core';
import { TareasService } from 'src/app/services/tareas.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {

  @Input() visualizacion: string = 'inline-block';

  tareas: {
    id: number;
    nombre: string;
    descripcion: string;
    correo: string;
    usuario: string;
    departamento: string;
  }[] = [];

  constructor(private tareasService: TareasService) {}

  ngOnInit() {
    // Cargar la lista inicial de tareas
    this.tareas = this.tareasService.getTareas();
  }

  eliminarTarea(id: number) {
    this.tareasService.deleteTarea(id); // Eliminamos la tarea del servicio
    this.tareas = this.tareasService.getTareas(); // Actualizamos la lista en la vista
  }

  enlace: HTMLCollectionOf<HTMLAnchorElement> = document.getElementsByTagName('a');
  isDarkMode: Boolean = document.body.classList.contains("darkMode");

  changeStyle() {

    if (!this.isDarkMode) {

      document.getElementsByTagName("span")[1].innerHTML = 'dark_mode';
      document.getElementsByTagName("span")[1].classList.add("dark");

      document.body.classList.add("darkMode");
      document.body.style.backgroundColor = 'var(--dark-bg)';

      Array.from(this.enlace).forEach(text => {
        text.style.color = 'var(--white-bg)';
      });

      this.isDarkMode = true;

    } else {

      document.getElementsByTagName("span")[1].innerHTML = 'light_mode';
      document.getElementsByTagName("span")[1].classList.remove("dark");

      document.body.classList.remove("darkMode");
      document.body.style.backgroundColor = 'var(--white-bg)';

      Array.from(this.enlace).forEach(text => {
        text.style.color = 'var(--dark-bg)';
      });

      this.isDarkMode = false;
    }
  };
}
