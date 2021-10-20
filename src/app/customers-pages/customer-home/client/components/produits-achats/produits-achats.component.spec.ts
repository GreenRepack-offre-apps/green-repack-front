import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitsAchatsComponent } from './produits-achats.component';

describe('ProduitsAchatsComponent', () => {
  let component: ProduitsAchatsComponent;
  let fixture: ComponentFixture<ProduitsAchatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitsAchatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitsAchatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
