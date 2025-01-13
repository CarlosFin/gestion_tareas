import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonDangerComponent } from './boton-danger.component';

describe('BotonDangerComponent', () => {
  let component: BotonDangerComponent;
  let fixture: ComponentFixture<BotonDangerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotonDangerComponent]
    });
    fixture = TestBed.createComponent(BotonDangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
