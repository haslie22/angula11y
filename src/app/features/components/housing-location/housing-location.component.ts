import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { HousingLocationInfo } from './housing-location.interface';

@Component({
  selector: 'app-housing-location',
  imports: [RouterLink],
  templateUrl: './housing-location.component.html',
  styleUrls: ['./housing-location.component.css'],
})
export class HousingLocationComponent {
  housingLocation = input.required<HousingLocationInfo>();
  protected readonly routeSegment = 'details';
}
