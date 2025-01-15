import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonInfoAceptarComponent } from './boton-info-aceptar.component';

describe('BotonInfoAceptarComponent', () => {
  let component: BotonInfoAceptarComponent;
  let fixture: ComponentFixture<BotonInfoAceptarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotonInfoAceptarComponent]
    });
    fixture = TestBed.createComponent(BotonInfoAceptarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
