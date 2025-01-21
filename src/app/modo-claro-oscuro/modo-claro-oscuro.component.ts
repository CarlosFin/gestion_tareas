//import { Component } from '@angular/core';
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

  isDarkMode: Boolean = false;
  indice: Number = 0;

  changeTheme() {

    for (let i = 0; i < this.botones.length; i++) {

      if (!this.isDarkMode) {

        document.getElementsByClassName('button')[i].getElementsByTagName('span')[0].innerHTML = 'dark_mode';
        document.getElementsByClassName('button')[i].classList.add("dark");

        for (let i = 0; i < this.barraNavegacion.length; i++) {
          this.barraNavegacion[i].style.backgroundColor = 'var(--color-header-oscuro)';
        }

        document.body.style.backgroundColor = 'var(--dark-bg)';

        for (let i = 0; i < this.titulo.length; i++) {
          this.titulo[i].style.color = 'rgb(255, 255, 255)';
        }

        for (let i = 0; i < this.enlace.length; i++) {
          this.enlace[i].style.color = 'var(--white-bg)';
        }

        for (let i = 0; i < this.caja.length; i++) {

          if (this.caja[i].id === "infoUsuario" || this.caja[i].className === "card") {
            this.caja[i].style.backgroundColor = "var(--card-user-oscuro)";
            this.caja[i].style.color = "var(--white-bg)";
          }
        }

        for (let i = 0; i < this.caja.length; i++) {

          if (this.caja[i].className === "buttons") {

            for (let j = 0; j < this.caja[i].getElementsByTagName("button").length; j++) {
              this.caja[i].getElementsByTagName("button")[j].style.backgroundColor = "rgb(0, 0, 0)";
              this.caja[i].getElementsByTagName("button")[j].style.color = "rgb(255, 255, 255)";
            }
          }
        }

        this.isDarkMode = true;

      } else {

        document.getElementsByClassName('button')[i].getElementsByTagName('span')[0].innerHTML = 'light_mode';
        document.getElementsByClassName('button')[i].classList.remove("dark");

        for (let i = 0; i < this.barraNavegacion.length; i++) {
          this.barraNavegacion[i].style.backgroundColor = 'var(--color-header-claro)';
        }

        document.body.style.backgroundColor = 'var(--white-bg)';

        for (let i = 0; i < this.titulo.length; i++) {
          this.titulo[i].style.color = 'rgb(0, 0, 0)';
        }

        for (let i = 0; i < this.enlace.length; i++) {
          this.enlace[i].style.color = 'var(--dark-bg)';
        }

        for (let i = 0; i < this.caja.length; i++) {

          if (this.caja[i].id === "infoUsuario" || this.caja[i].className === "card") {
            this.caja[i].style.backgroundColor = "var(--card-user-claro)";
            this.caja[i].style.color = "var(--dark-bg)";
          }
        }

        for (let i = 0; i < this.caja.length; i++) {

          if (this.caja[i].className === "buttons") {

            for (let j = 0; j < this.caja[i].getElementsByTagName("button").length; j++) {
              this.caja[i].getElementsByTagName("button")[j].style.backgroundColor = "rgb(255, 255, 255)";
              this.caja[i].getElementsByTagName("button")[j].style.color = "rgb(0, 0, 0)";
            }
          }
        }

        this.isDarkMode = false;
      }
    }
  }
}
