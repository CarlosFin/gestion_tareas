import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModoClaroOscuroComponent } from './modo-claro-oscuro.component';

describe('ModoClaroOscuroComponent', () => {
  let component: ModoClaroOscuroComponent;
  let fixture: ComponentFixture<ModoClaroOscuroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModoClaroOscuroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModoClaroOscuroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
