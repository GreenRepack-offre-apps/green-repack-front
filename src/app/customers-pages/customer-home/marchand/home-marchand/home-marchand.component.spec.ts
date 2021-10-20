import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMarchandComponent } from './home-marchand.component';

describe('HomeMarchandComponent', () => {
  let component: HomeMarchandComponent;
  let fixture: ComponentFixture<HomeMarchandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeMarchandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMarchandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
