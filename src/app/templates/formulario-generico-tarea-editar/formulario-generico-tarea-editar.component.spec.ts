import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioGenericoTareaEditarComponent } from './formulario-generico-tarea-editar.component';

describe('FormularioGenericoTareaEditarComponent', () => {
  let component: FormularioGenericoTareaEditarComponent;
  let fixture: ComponentFixture<FormularioGenericoTareaEditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioGenericoTareaEditarComponent]
    });
    fixture = TestBed.createComponent(FormularioGenericoTareaEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
