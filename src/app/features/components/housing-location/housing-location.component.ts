import { Component, input } from '@angular/core';

import { HousingLocationInfo } from './housing-location.interface';

@Component({
  selector: 'app-housing-location',
  templateUrl: './housing-location.component.html',
  styleUrls: ['./housing-location.component.css'],
})
export class HousingLocationComponent {
  housingLocation = input.required<HousingLocationInfo>();
}
