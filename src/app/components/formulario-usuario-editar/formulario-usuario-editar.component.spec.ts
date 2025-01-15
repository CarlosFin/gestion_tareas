import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioUsuarioEditarComponent } from './formulario-usuario-editar.component';

describe('FormularioUsuarioEditarComponent', () => {
  let component: FormularioUsuarioEditarComponent;
  let fixture: ComponentFixture<FormularioUsuarioEditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioUsuarioEditarComponent]
    });
    fixture = TestBed.createComponent(FormularioUsuarioEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
