import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCrearComponent } from './formulario-crear.component';

describe('FormularioCrearComponent', () => {
  let component: FormularioCrearComponent;
  let fixture: ComponentFixture<FormularioCrearComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioCrearComponent]
    });
    fixture = TestBed.createComponent(FormularioCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
