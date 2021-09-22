import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtatGestionDemandeListComponent } from './etat-gestion-demande-list.component';

describe('EtatGestionDemandeListComponent', () => {
  let component: EtatGestionDemandeListComponent;
  let fixture: ComponentFixture<EtatGestionDemandeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtatGestionDemandeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtatGestionDemandeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
