import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioGenericoTareaEditarAdminComponent } from './formulario-generico-tarea-editar-admin.component';

describe('FormularioGenericoTareaEditarAdminComponent', () => {
  let component: FormularioGenericoTareaEditarAdminComponent;
  let fixture: ComponentFixture<FormularioGenericoTareaEditarAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioGenericoTareaEditarAdminComponent]
    });
    fixture = TestBed.createComponent(FormularioGenericoTareaEditarAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
