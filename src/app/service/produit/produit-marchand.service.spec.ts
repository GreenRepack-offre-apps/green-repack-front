import { TestBed } from '@angular/core/testing';

import { ProduitMarchandService } from './produit-marchand.service';

describe('ProduitMarchandService', () => {
  let service: ProduitMarchandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProduitMarchandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
