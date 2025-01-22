import { Component, OnInit, ViewChildren, QueryList, ElementRef } from '@angular/core';

@Component({
  selector: 'app-modo-claro-oscuro',
  templateUrl: './modo-claro-oscuro.component.html',
  styleUrls: ['./modo-claro-oscuro.component.css']
})

export class ModoClaroOscuroComponent {

  botones: HTMLCollectionOf<HTMLButtonElement> = document.getElementsByTagName('button');
  barraNavegacion: HTMLCollectionOf<HTMLElement> = document.getElementsByTagName('nav');
  titulo: HTMLCollectionOf<HTMLHeadingElement> = document.getElementsByTagName('h1');
  enlace: HTMLCollectionOf<HTMLAnchorElement> = document.getElementsByTagName('a');
  caja: HTMLCollectionOf<HTMLDivElement> = document.getElementsByTagName('div');
  formulario: HTMLCollectionOf<HTMLFormElement> = document.getElementsByTagName("form");

  isDarkMode: Boolean = false;
  indice: Number = 0;

  changeTheme() {

    for (let i = 0; i < this.botones.length; i++) {

      if (!this.isDarkMode) {

        document.getElementsByClassName('button')[i].getElementsByTagName('span')[0].innerHTML = 'dark_mode';
        document.getElementsByClassName('button')[i].classList.add("dark");

        Array.from(this.barraNavegacion).forEach(nav => {
          nav.style.backgroundColor = 'var(--color-header-oscuro)';
        });

        document.body.style.backgroundColor = 'var(--dark-bg)';

        Array.from(this.titulo).forEach(title => {
          title.style.color = 'rgb(255, 255, 255)';
        });

        Array.from(this.enlace).forEach(link => {
          link.style.color = 'var(--white-bg)';
        });

        Array.from(this.formulario).forEach(form => {

          form.style.backgroundColor = 'var(--card-user-oscuro)';
          form.style.color = 'var(--white-bg)';

          form.querySelectorAll('label').forEach(formLabel => {
            formLabel.style.color = "rgb(255, 255, 255)";
          });

          form.querySelectorAll('input').forEach(formInput => {
            formInput.style.backgroundColor = 'rgb(0, 0, 0)';
            formInput.style.color = "rgb(255, 255, 255)";
          });
        });

        Array.from(this.caja).forEach(box => {

          if (box.id === "infoUsuario" || box.className === "card" || box.classList.contains("login")) {
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

        document.getElementsByClassName('button')[i].getElementsByTagName('span')[0].innerHTML = 'light_mode';
        document.getElementsByClassName('button')[i].classList.remove("dark");

        Array.from(this.barraNavegacion).forEach(nav => {
          nav.style.backgroundColor = 'var(--color-header-claro)';
        });

        document.body.style.backgroundColor = 'var(--white-bg)';

        Array.from(this.titulo).forEach(title => {
          title.style.color = 'rgb(0, 0, 0)';
        });

        Array.from(this.enlace).forEach(link => {
          link.style.color = 'var(--dark-bg)';
        });

        Array.from(this.formulario).forEach(form => {

          form.style.backgroundColor = 'var(--card-user-claro)';
          form.style.color = 'var(--dark-bg)';

          form.querySelectorAll('label').forEach(formLabel => {
            formLabel.style.color = "rgb(0, 0, 0)";
          });

          form.querySelectorAll('input').forEach(formInput => {
            formInput.style.backgroundColor = 'rgb(255, 255, 255)';
            formInput.style.color = "rgb(0, 0, 0)";
          });
        });

        Array.from(this.caja).forEach(box => {

          if (box.id === "infoUsuario" || box.className === "card" || box.classList.contains("login")) {
            box.style.backgroundColor = "var(--card-user-claro)";
            box.style.color = "var(--dark-bg)";
          } else if (box.className === "buttons") {

            box.querySelectorAll('button').forEach(boton => {
              boton.style.backgroundColor = "rgb(255, 255, 255)";
              boton.style.color = "rgb(0, 0, 0)";
            });
          }

        });

        this.isDarkMode = false;
      }
    }
  }
}
