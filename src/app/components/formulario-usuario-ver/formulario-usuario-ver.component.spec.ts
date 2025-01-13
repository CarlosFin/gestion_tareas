import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioUsuarioVerComponent } from './formulario-usuario-ver.component';

describe('FormularioUsuarioVerComponent', () => {
  let component: FormularioUsuarioVerComponent;
  let fixture: ComponentFixture<FormularioUsuarioVerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioUsuarioVerComponent]
    });
    fixture = TestBed.createComponent(FormularioUsuarioVerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
