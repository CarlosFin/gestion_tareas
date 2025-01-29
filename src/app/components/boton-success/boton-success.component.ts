import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-boton-success',
  templateUrl: './boton-success.component.html',
  styleUrls: ['./boton-success.component.css'],
})
export class BotonSuccessComponent {

  @Input() textoBoton: string = '';

  texto: HTMLCollectionOf<HTMLElement> = document.getElementsByTagName("p");
  isDarkMode: Boolean = document.body.classList.contains("darkMode");

  changeTheme() {

    if (!this.isDarkMode) {

      Array.from(this.texto).forEach(text => {
        text.style.color = 'var(--white-bg)';
      });

      this.isDarkMode = true;

    } else {

      Array.from(this.texto).forEach(text => {
        text.style.color = 'var(--dark-bg)';
      });

      this.isDarkMode = false;
    }
  };
}
