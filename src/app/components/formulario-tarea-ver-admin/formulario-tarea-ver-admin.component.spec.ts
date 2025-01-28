import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioTareaVerAdminComponent } from './formulario-tarea-ver-admin.component';

describe('FormularioTareaVerAdminComponent', () => {
  let component: FormularioTareaVerAdminComponent;
  let fixture: ComponentFixture<FormularioTareaVerAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioTareaVerAdminComponent]
    });
    fixture = TestBed.createComponent(FormularioTareaVerAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
