import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonInfoAdminComponent } from './boton-info-admin.component';

describe('BotonInfoAdminComponent', () => {
  let component: BotonInfoAdminComponent;
  let fixture: ComponentFixture<BotonInfoAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotonInfoAdminComponent]
    });
    fixture = TestBed.createComponent(BotonInfoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
