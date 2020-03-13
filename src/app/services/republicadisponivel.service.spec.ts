import { TestBed } from '@angular/core/testing';

import { RepublicadisponivelService } from './republicadisponivel.service';

describe('RepublicadisponivelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RepublicadisponivelService = TestBed.get(RepublicadisponivelService);
    expect(service).toBeTruthy();
  });
});
