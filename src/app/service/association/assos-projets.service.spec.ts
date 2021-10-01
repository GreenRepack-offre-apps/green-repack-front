import { TestBed } from '@angular/core/testing';

import { AssosProjetsService } from './assos-projets.service';

describe('AssosProjetsService', () => {
  let service: AssosProjetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssosProjetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
