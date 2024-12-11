import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonSuccessComponent } from './boton-success.component';

describe('BotonSuccessComponent', () => {
  let component: BotonSuccessComponent;
  let fixture: ComponentFixture<BotonSuccessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotonSuccessComponent]
    });
    fixture = TestBed.createComponent(BotonSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
