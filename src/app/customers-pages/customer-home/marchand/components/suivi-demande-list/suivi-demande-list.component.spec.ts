import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiviDemandeListComponent } from './suivi-demande-list.component';

describe('SuiviDemandeListComponent', () => {
  let component: SuiviDemandeListComponent;
  let fixture: ComponentFixture<SuiviDemandeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuiviDemandeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuiviDemandeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
