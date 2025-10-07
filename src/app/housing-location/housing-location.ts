import { Component, input } from '@angular/core';

import { HousingLocationInfo } from '../housing-location.interface';

@Component({
  selector: 'app-housing-location',
  imports: [],
  template: `
    <section class="listing">
      <img
        class="listing-photo"
        [src]="housingLocation().photo"
        alt="Exterior photo of {{ housingLocation().name }}"
        crossorigin
      />
      <h3 class="listing-heading">{{ housingLocation().name }}</h3>
      <p class="listing-location">{{ housingLocation().city }}, {{ housingLocation().state }}</p>
    </section>
  `,
  styleUrls: ['./housing-location.css'],
})
export class HousingLocation {
  housingLocation = input.required<HousingLocationInfo>();
}
