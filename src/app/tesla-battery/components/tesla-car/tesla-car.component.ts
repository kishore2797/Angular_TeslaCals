/*
 * tesla-car.component.ts
 */
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'tesla-car',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="tesla-car">
      <div class="tesla-wheels">
        <div class="tesla-wheel tesla-wheel--front tesla-wheel--{{ wheelSize }}"></div>
        <div class="tesla-wheel tesla-wheel--rear tesla-wheel--{{ wheelSize }}"></div>
      </div>
    </div>
  `,
  styleUrls: ['./tesla-car.component.scss']
})
export class TeslaCarComponent {
  @Input() wheelSize!: number;
  constructor() {}
}
