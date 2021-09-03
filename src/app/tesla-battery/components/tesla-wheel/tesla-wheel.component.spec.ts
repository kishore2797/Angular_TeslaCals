import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeslaWheelComponent } from './tesla-wheel.component';

describe('TeslaWheelComponent', () => {
  let component: TeslaWheelComponent;
  let fixture: ComponentFixture<TeslaWheelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeslaWheelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeslaWheelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
