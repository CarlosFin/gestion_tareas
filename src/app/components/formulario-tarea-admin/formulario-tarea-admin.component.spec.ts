import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioTareaAdminComponent } from './formulario-tarea-admin.component';

describe('FormularioTareaAdminComponent', () => {
  let component: FormularioTareaAdminComponent;
  let fixture: ComponentFixture<FormularioTareaAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioTareaAdminComponent]
    });
    fixture = TestBed.createComponent(FormularioTareaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
