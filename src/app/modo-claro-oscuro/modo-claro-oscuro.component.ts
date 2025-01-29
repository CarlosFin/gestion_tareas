import { Component } from '@angular/core';

@Component({
  selector: 'app-modo-claro-oscuro',
  templateUrl: './modo-claro-oscuro.component.html',
  styleUrls: ['./modo-claro-oscuro.component.css']
})

export class ModoClaroOscuroComponent {

  barraNavegacion: HTMLCollectionOf<HTMLElement> = document.getElementsByTagName('nav');
  titulo: HTMLCollectionOf<HTMLHeadingElement> = document.getElementsByTagName('h1');
  enlace: HTMLCollectionOf<HTMLAnchorElement> = document.getElementsByTagName('a');
  caja: HTMLCollectionOf<HTMLDivElement> = document.getElementsByTagName('div');
  formulario: HTMLCollectionOf<HTMLFormElement> = document.getElementsByTagName("form");
  areaTexto: HTMLCollectionOf<HTMLTextAreaElement> = document.getElementsByTagName("textarea");
  texto: HTMLCollectionOf<HTMLElement> = document.getElementsByTagName("p");

  isDarkMode: Boolean = document.body.classList.contains("darkMode");
  indice: Number = 0;

  changeTheme() {

    if (!this.isDarkMode) {

      document.getElementsByTagName("span")[1].innerHTML = 'dark_mode';
      document.getElementsByTagName("span")[1].classList.add("dark");

      document.body.classList.add("darkMode");
      document.body.style.backgroundColor = 'var(--dark-bg)';

      Array.from(this.barraNavegacion).forEach(nav => {
        nav.style.backgroundColor = 'var(--color-header-oscuro)';
      });

      Array.from(this.titulo).forEach(title => {
        title.style.color = 'rgb(255, 255, 255)';
      });

      Array.from(this.enlace).forEach(link => {
        link.style.color = 'var(--white-bg)';
      });

      Array.from(this.texto).forEach(link => {
        link.style.color = 'var(--white-bg)';
      });

      Array.from(this.areaTexto).forEach(textArea => {
        textArea.style.backgroundColor = "rgb(0, 0, 0)";;
        textArea.style.color = "rgb(255, 255, 255)";
      });

      Array.from(this.caja).forEach(box => {

        if (box.id === "infoUsuario" || box.className === "card" || box.classList.contains("login") || box.classList.contains("formulario")) {
          box.style.backgroundColor = "var(--card-user-oscuro)";
          box.style.color = "var(--white-bg)";
        } else if (box.className === "buttons") {

          box.querySelectorAll('button').forEach(boton => {
            boton.style.backgroundColor = "rgb(0, 0, 0)";
            boton.style.color = "rgb(255, 255, 255)";
          });
        }
      });

      this.isDarkMode = true;

    } else {

      document.getElementsByTagName("span")[1].innerHTML = 'light_mode';
      document.getElementsByTagName("span")[1].classList.remove("dark");

      document.body.classList.remove("darkMode");
      document.body.style.backgroundColor = 'var(--white-bg)';

      Array.from(this.barraNavegacion).forEach(nav => {
        nav.style.backgroundColor = 'var(--color-header-claro)';
      });

      Array.from(this.titulo).forEach(title => {
        title.style.color = 'rgb(0, 0, 0)';
      });

      Array.from(this.enlace).forEach(link => {
        link.style.color = 'var(--dark-bg)';
      });

      Array.from(this.texto).forEach(link => {
        link.style.color = 'var(--dark-bg)';
      });

      Array.from(this.areaTexto).forEach(textArea => {
        textArea.style.backgroundColor = "rgb(255, 255, 255)";;
        textArea.style.color = "rgb(0, 0, 0)";
      });

      Array.from(this.caja).forEach(box => {

        if (box.id === "infoUsuario" || box.classList.contains("login") || box.className === "card") {
          box.style.backgroundColor = "var(--white-bg)";
          box.style.color = "var(--dark-bg)";
        } else if (box.className === "buttons") {

          box.querySelectorAll('button').forEach(boton => {
            boton.style.backgroundColor = "rgb(255, 255, 255)";
            boton.style.color = "rgb(0, 0, 0)";
          });

        } else if (box.classList.contains("formulario")) {
          box.style.backgroundColor = "rgb(255, 255, 255)";
          box.style.color = "var(--dark-bg)";
        }

      });

      this.isDarkMode = false;
    }
  };
}
