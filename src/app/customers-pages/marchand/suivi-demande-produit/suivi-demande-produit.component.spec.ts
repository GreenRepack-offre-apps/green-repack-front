import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiviDemandeProduitComponent } from './suivi-demande-produit.component';

describe('SuiviDemandeProduitComponent', () => {
  let component: SuiviDemandeProduitComponent;
  let fixture: ComponentFixture<SuiviDemandeProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuiviDemandeProduitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuiviDemandeProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
