import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModoClaroOscuroComponent } from './modo-claro-oscuro.component';

describe('ModoClaroOscuroComponent', () => {
  let component: ModoClaroOscuroComponent;
  let fixture: ComponentFixture<ModoClaroOscuroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModoClaroOscuroComponent]
    });
    fixture = TestBed.createComponent(ModoClaroOscuroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
