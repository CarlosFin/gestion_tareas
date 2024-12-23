import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTareaAdminComponent } from './lista-tarea-admin.component';

describe('ListaTareaAdminComponent', () => {
  let component: ListaTareaAdminComponent;
  let fixture: ComponentFixture<ListaTareaAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaTareaAdminComponent]
    });
    fixture = TestBed.createComponent(ListaTareaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
