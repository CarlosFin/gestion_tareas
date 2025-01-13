import { Component, OnInit, Renderer2 } from '@angular/core';
//import { ModoClaroOscuroService } from './modo-claro-oscuro/modo-claro-oscuro.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string = "";

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
