import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonDarkComponent } from './boton-dark.component';

describe('BotonDarkComponent', () => {
  let component: BotonDarkComponent;
  let fixture: ComponentFixture<BotonDarkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotonDarkComponent]
    });
    fixture = TestBed.createComponent(BotonDarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
