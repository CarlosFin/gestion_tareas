import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonRadioTodasComponent } from './boton-radio-todas.component';

describe('BotonRadioTodasComponent', () => {
  let component: BotonRadioTodasComponent;
  let fixture: ComponentFixture<BotonRadioTodasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotonRadioTodasComponent]
    });
    fixture = TestBed.createComponent(BotonRadioTodasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
