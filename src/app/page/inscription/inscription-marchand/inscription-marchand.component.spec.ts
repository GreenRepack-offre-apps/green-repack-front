import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionMarchandComponent} from './inscription-marchand.component';

describe('InscriptionMarchandComponent', () => {
  let component: InscriptionMarchandComponent;
  let fixture: ComponentFixture<InscriptionMarchandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionMarchandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptionMarchandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
