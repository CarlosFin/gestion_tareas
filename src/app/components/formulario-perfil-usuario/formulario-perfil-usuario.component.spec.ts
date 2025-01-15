import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPerfilUsuarioComponent } from './formulario-perfil-usuario.component';

describe('FormularioPerfilUsuarioComponent', () => {
  let component: FormularioPerfilUsuarioComponent;
  let fixture: ComponentFixture<FormularioPerfilUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioPerfilUsuarioComponent]
    });
    fixture = TestBed.createComponent(FormularioPerfilUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
