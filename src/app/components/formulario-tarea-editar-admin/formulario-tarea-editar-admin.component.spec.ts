import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioTareaEditarAdminComponent } from './formulario-tarea-editar-admin.component';

describe('FormularioTareaEditarAdminComponent', () => {
  let component: FormularioTareaEditarAdminComponent;
  let fixture: ComponentFixture<FormularioTareaEditarAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioTareaEditarAdminComponent]
    });
    fixture = TestBed.createComponent(FormularioTareaEditarAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
