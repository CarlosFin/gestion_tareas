import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-menssage',
  templateUrl: './error-menssage.component.html',
  styleUrls: ['./error-menssage.component.css'],
})
export class ErrorMenssageComponent {
  @Input() mensaje_error: string = '';
}
