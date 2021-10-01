import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeGestionProjetassosComponent } from './demande-gestion-projetassos.component';

describe('DemandeGestionProjetassosComponent', () => {
  let component: DemandeGestionProjetassosComponent;
  let fixture: ComponentFixture<DemandeGestionProjetassosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeGestionProjetassosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeGestionProjetassosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
