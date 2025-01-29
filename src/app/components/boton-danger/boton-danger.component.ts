import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-boton-danger',
  templateUrl: './boton-danger.component.html',
  styleUrls: ['./boton-danger.component.css'],
})
export class BotonDangerComponent {

  @Input() textoBoton2: string = '';

  texto: HTMLCollectionOf<HTMLElement> = document.getElementsByTagName("p");
  isDarkMode: Boolean = document.body.classList.contains("darkMode");

  changeTheme() {

    if (!this.isDarkMode) {

      Array.from(this.texto).forEach(link => {
        link.style.color = 'var(--white-bg)';
      });

      this.isDarkMode = true;

    } else {

      Array.from(this.texto).forEach(link => {
        link.style.color = 'var(--dark-bg)';
      });

      this.isDarkMode = false;
    }
  };
}
