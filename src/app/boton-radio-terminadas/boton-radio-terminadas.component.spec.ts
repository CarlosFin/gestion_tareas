import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonRadioTerminadasComponent } from './boton-radio-terminadas.component';

describe('BotonRadioTerminadasComponent', () => {
  let component: BotonRadioTerminadasComponent;
  let fixture: ComponentFixture<BotonRadioTerminadasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotonRadioTerminadasComponent]
    });
    fixture = TestBed.createComponent(BotonRadioTerminadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
