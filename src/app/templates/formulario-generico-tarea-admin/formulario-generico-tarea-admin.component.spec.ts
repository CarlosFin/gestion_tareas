import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioGenericoTareaAdminComponent } from './formulario-generico-tarea-admin.component';

describe('FormularioGenericoTareaAdminComponent', () => {
  let component: FormularioGenericoTareaAdminComponent;
  let fixture: ComponentFixture<FormularioGenericoTareaAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioGenericoTareaAdminComponent]
    });
    fixture = TestBed.createComponent(FormularioGenericoTareaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
