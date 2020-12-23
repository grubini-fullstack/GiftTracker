import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthdaytrackerComponent } from './birthdaytracker.component';

describe('BirthdaytrackerComponent', () => {
  let component: BirthdaytrackerComponent;
  let fixture: ComponentFixture<BirthdaytrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirthdaytrackerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BirthdaytrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
