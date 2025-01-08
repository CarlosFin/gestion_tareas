import { TestBed } from '@angular/core/testing';
import { ModoClaroOscuroService } from './modo-claro-oscuro.service';

describe('ModoClaroOscuroService', () => {
  let service: ModoClaroOscuroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModoClaroOscuroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
