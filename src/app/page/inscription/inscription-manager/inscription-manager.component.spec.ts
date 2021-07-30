import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionManagerComponent } from './inscription-manager.component';

describe('InscriptionManagerComponent', () => {
  let component: InscriptionManagerComponent;
  let fixture: ComponentFixture<InscriptionManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptionManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
