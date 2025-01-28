import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorMenssageComponent } from './error-menssage.component';

describe('ErrorMenssageComponent', () => {
  let component: ErrorMenssageComponent;
  let fixture: ComponentFixture<ErrorMenssageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorMenssageComponent]
    });
    fixture = TestBed.createComponent(ErrorMenssageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
