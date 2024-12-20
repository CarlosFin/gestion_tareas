import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioGenericoTareaComponent } from './formulario-generico-tarea.component';

describe('FormularioGenericoTareaComponent', () => {
  let component: FormularioGenericoTareaComponent;
  let fixture: ComponentFixture<FormularioGenericoTareaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioGenericoTareaComponent]
    });
    fixture = TestBed.createComponent(FormularioGenericoTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
