import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonRadioPendientesComponent } from './boton-radio-pendientes.component';

describe('BotonRadioPendientesComponent', () => {
  let component: BotonRadioPendientesComponent;
  let fixture: ComponentFixture<BotonRadioPendientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotonRadioPendientesComponent]
    });
    fixture = TestBed.createComponent(BotonRadioPendientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
