import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioTareaEditarComponent } from './formulario-tarea-editar.component';

describe('FormularioTareaEditarComponent', () => {
  let component: FormularioTareaEditarComponent;
  let fixture: ComponentFixture<FormularioTareaEditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioTareaEditarComponent]
    });
    fixture = TestBed.createComponent(FormularioTareaEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
