import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthMarchandComponent } from './auth-marchand.component';

describe('AuthMarchandComponent', () => {
  let component: AuthMarchandComponent;
  let fixture: ComponentFixture<AuthMarchandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthMarchandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthMarchandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
