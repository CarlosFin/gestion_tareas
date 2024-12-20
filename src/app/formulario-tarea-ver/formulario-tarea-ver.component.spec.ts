import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioTareaVerComponent } from './formulario-tarea-ver.component';

describe('FormularioTareaVerComponent', () => {
  let component: FormularioTareaVerComponent;
  let fixture: ComponentFixture<FormularioTareaVerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioTareaVerComponent]
    });
    fixture = TestBed.createComponent(FormularioTareaVerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
