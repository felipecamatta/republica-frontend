import { TestBed } from '@angular/core/testing';

import { ReceitadespesaService } from './receitadespesa.service';

describe('ReceitadespesaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReceitadespesaService = TestBed.get(ReceitadespesaService);
    expect(service).toBeTruthy();
  });
});
