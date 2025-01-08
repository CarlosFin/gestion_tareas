import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardUserAdminComponent } from './card-user-admin.component';

describe('CardUserAdminComponent', () => {
  let component: CardUserAdminComponent;
  let fixture: ComponentFixture<CardUserAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardUserAdminComponent]
    });
    fixture = TestBed.createComponent(CardUserAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
