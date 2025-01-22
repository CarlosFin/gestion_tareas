import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioGenericoTareaCrearComponent } from './formulario-generico-tarea-crear.component';

describe('FormularioGenericoTareaCrearComponent', () => {
  let component: FormularioGenericoTareaCrearComponent;
  let fixture: ComponentFixture<FormularioGenericoTareaCrearComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioGenericoTareaCrearComponent]
    });
    fixture = TestBed.createComponent(FormularioGenericoTareaCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
