/*
 * tesla-battery.module.ts
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

// services
import { TeslaBatteryService } from './tesla-battery.service';
import { TeslaBatteryComponent } from './containers/tesla-battery/tesla-battery.component';
import { TeslaCarComponent } from './components/tesla-car/tesla-car.component';
import { TeslaStatsComponent } from './components/tesla-stats/tesla-stats.component';
import { TeslaClimateComponent } from './components/tesla-climate/tesla-climate.component';
import { TeslaCounterComponent } from './components/tesla-counter/tesla-counter.component';
import { TeslaWheelComponent } from './components/tesla-wheel/tesla-wheel.component';

@NgModule({
  declarations: [
    TeslaBatteryComponent,
    TeslaCarComponent,
    TeslaStatsComponent,
    TeslaClimateComponent,
    TeslaCounterComponent,
    TeslaWheelComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [
    // add the service to our sub-module
    TeslaBatteryService
  ],
  exports: [
    TeslaBatteryComponent
  ]
})
export class TeslaBatteryModule {}
