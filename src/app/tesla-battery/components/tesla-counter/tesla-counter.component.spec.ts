import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeslaCounterComponent } from './tesla-counter.component';

describe('TeslaCounterComponent', () => {
  let component: TeslaCounterComponent;
  let fixture: ComponentFixture<TeslaCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeslaCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeslaCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
