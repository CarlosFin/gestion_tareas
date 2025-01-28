import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioTareaCrearAdminComponent } from './formulario-tarea-crear-admin.component';

describe('FormularioTareaCrearAdminComponent', () => {
  let component: FormularioTareaCrearAdminComponent;
  let fixture: ComponentFixture<FormularioTareaCrearAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioTareaCrearAdminComponent]
    });
    fixture = TestBed.createComponent(FormularioTareaCrearAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
