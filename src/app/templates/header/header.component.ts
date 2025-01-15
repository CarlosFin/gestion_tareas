import { Component } from '@angular/core';
/*import { ThemeObiect } from '../modo-claro-oscuro/modo-claro-oscuro.service';*/

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {


  toggleTheme() {

    for (let i = 0; i < document.getElementsByTagName('button').length; i++) {

      if (!document.getElementsByClassName('button')[i].getElementsByTagName('span')[0].classList.contains('dark')) {

        document.getElementsByClassName('button')[i].getElementsByTagName('span')[0].innerHTML = 'dark_mode';
        document.getElementsByClassName('button')[i].getElementsByTagName('span')[0].className += ' dark';

        for (let i = 0; i < document.getElementsByTagName('nav').length; i++) {
          document.getElementsByTagName('nav')[i].style.backgroundColor = 'var(--color-header-oscuro)';
        }

        document.body.style.backgroundColor = 'var(--dark-bg)';

        for (let i = 0; i < document.getElementsByTagName('h1').length; i++) {
          document.getElementsByTagName('h1')[i].style.color = '--claro-letra';
        }

        for (let i = 0; i < document.getElementsByTagName('a').length; i++) {
          document.getElementsByTagName('a')[i].style.color = 'var(--white-bg)';
        }

        for (let i = 0; i < document.getElementsByTagName("div").length; i++) {

          if (document.getElementsByTagName("div")[i].id === "infoUsuario") {
            document.getElementsByTagName("div")[i].style.backgroundColor = "var(--card-user-oscuro)";
            document.getElementsByTagName("div")[i].style.color = "var(--white-bg)";
          }
        }

      } else {

        document.getElementsByClassName('button')[i].getElementsByTagName('span')[0].innerHTML = 'light_mode';
        document.getElementsByClassName('button')[i].getElementsByTagName('span')[0].className = 'material-icons';

        for (let i = 0; i < document.getElementsByTagName('nav').length; i++) {
          document.getElementsByTagName('nav')[i].style.backgroundColor = 'var(--color-header-claro)';
        }

        document.body.style.backgroundColor = 'var(--white-bg)';

        for (let i = 0; i < document.getElementsByTagName('h1').length; i++) {
          document.getElementsByTagName('h1')[i].style.color = '--oscuro-letra';
        }

        for (let i = 0; i < document.getElementsByTagName('a').length; i++) {
          document.getElementsByTagName('a')[i].style.color = 'var(--dark-bg)';
        }

        for (let i = 0; i < document.getElementsByTagName("div").length; i++) {

          if (document.getElementsByTagName("div")[i].id === "infoUsuario") {
            document.getElementsByTagName("div")[i].style.backgroundColor = "var(--card-user-claro)";
            document.getElementsByTagName("div")[i].style.color = "var(--dark-bg)";
          }
        }
      }
    }
  }
}
