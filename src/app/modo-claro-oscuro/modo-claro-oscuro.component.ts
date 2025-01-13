import { Component, OnInit } from '@angular/core';
import { ModoClaroOscuroService } from './modo-claro-oscuro.service';

@Component({
  selector: 'modo-claro-oscuro',
  templateUrl: './modo-claro-oscuro.component.html',
  styleUrls: ['./modo-claro-oscuro.component.css']
})

export class ModoClaroOscuroComponent implements OnInit {

  theme: string = 'bootstrap';

  constructor(private themeService: ModoClaroOscuroService) { }

  ngOnInit(): void {}

  toggleTheme() {

    if (this.theme === 'bootstrap') {
      this.theme = 'bootstrap-dark';
    } else {
      this.theme = 'bootstrap';
    }

    this.themeService.setTheme(this.theme)
  }
}
