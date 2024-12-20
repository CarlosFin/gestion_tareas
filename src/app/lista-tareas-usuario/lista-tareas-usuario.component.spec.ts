import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTareasUsuarioComponent } from './lista-tareas-usuario.component';

describe('ListaTareasUsuarioComponent', () => {
  let component: ListaTareasUsuarioComponent;
  let fixture: ComponentFixture<ListaTareasUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaTareasUsuarioComponent]
    });
    fixture = TestBed.createComponent(ListaTareasUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
