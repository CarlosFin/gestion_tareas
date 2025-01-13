import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonInfoUsuariosAdminComponent } from './boton-info-usuarios-admin.component';

describe('BotonInfoUsuariosAdminComponent', () => {
  let component: BotonInfoUsuariosAdminComponent;
  let fixture: ComponentFixture<BotonInfoUsuariosAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotonInfoUsuariosAdminComponent]
    });
    fixture = TestBed.createComponent(BotonInfoUsuariosAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
