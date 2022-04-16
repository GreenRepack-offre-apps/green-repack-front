import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayboxComponent } from './paybox.component';

describe('PayboxComponent', () => {
  let component: PayboxComponent;
  let fixture: ComponentFixture<PayboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
