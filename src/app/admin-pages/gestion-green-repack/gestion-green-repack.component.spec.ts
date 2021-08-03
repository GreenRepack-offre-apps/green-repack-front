import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionGreenRepackComponent } from './gestion-green-repack.component';

describe('GestionGreenRepackComponent', () => {
  let component: GestionGreenRepackComponent;
  let fixture: ComponentFixture<GestionGreenRepackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionGreenRepackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionGreenRepackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
