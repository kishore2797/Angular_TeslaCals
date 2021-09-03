import { TestBed } from '@angular/core/testing';

import { TeslaBatteryService } from './tesla-battery.service';

describe('TeslaBatteryService', () => {
  let service: TeslaBatteryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeslaBatteryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
