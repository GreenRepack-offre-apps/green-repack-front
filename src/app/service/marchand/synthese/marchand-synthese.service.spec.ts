import { TestBed } from '@angular/core/testing';

import { MarchandSyntheseService } from './marchand-synthese.service';

describe('MarchandSyntheseService', () => {
  let service: MarchandSyntheseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarchandSyntheseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
