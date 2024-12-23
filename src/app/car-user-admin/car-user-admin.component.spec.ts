import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarUserAdminComponent } from './car-user-admin.component';

describe('CarUserAdminComponent', () => {
  let component: CarUserAdminComponent;
  let fixture: ComponentFixture<CarUserAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarUserAdminComponent]
    });
    fixture = TestBed.createComponent(CarUserAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
