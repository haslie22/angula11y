import { Component, input } from '@angular/core';

import { HousingLocationInfo } from '../housing-location.interface';

@Component({
  selector: 'app-housing-location',
  templateUrl: './housing-location.html',
  styleUrls: ['./housing-location.css'],
})
export class HousingLocation {
  housingLocation = input.required<HousingLocationInfo>();
}
