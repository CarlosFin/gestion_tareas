import { Component, OnInit, Renderer2 } from '@angular/core';
//import { ModoClaroOscuroService } from './modo-claro-oscuro/modo-claro-oscuro.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string = "";

  /*toggleTheme() {

    if (!document.getElementsByClassName('button')[0].getElementsByTagName('span')[0].classList.contains('dark')) {

      document.getElementsByClassName('button')[0].getElementsByTagName('span')[0].innerHTML = 'dark_mode';
      document.getElementsByClassName('button')[0].getElementsByTagName('span')[0].className += ' dark';

      document.getElementsByTagName('nav')[0].style.backgroundColor = 'var(--color-header-oscuro)';
      document.body.style.backgroundColor = 'var(--dark-bg)';
      document.getElementsByTagName('h1')[0].style.color = '--claro-letra';

      for (let i = 0; i < document.getElementsByTagName('a').length; i++) {
        document.getElementsByTagName('a')[i].style.color = 'var(--white-bg)';
      }

    } else {
      document.getElementsByClassName('button')[0].getElementsByTagName('span')[0].innerHTML = 'light_mode';
      document.getElementsByClassName('button')[0].getElementsByTagName('span')[0].className = 'material-icons';

      document.getElementsByTagName('nav')[0].style.backgroundColor = 'var(--color-header-claro)';
      document.body.style.backgroundColor = 'var(--white-bg)';
      document.getElementsByTagName('h1')[0].style.color = '--oscuro-letra';

      for (let i = 0; i < document.getElementsByTagName('a').length; i++) {
        document.getElementsByTagName('a')[i].style.color = 'var(--dark-bg)';
      }
    }
  }*/

  /*
  constructor (private themeService: ModoClaroOscuroService, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.themeService.themeChanges().subscribe(theme => {

      if (theme.oldValue) {
        this.renderer.removeClass(document.body, theme.oldValue);
      }
      this.renderer.addClass(document.body, theme.newValue);
    })
  }*/
}
