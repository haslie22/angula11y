import { Component, inject, input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { HousingLocationInfo } from './housing-location.interface';

@Component({
  selector: 'app-housing-location',
  imports: [RouterLink],
  templateUrl: './housing-location.component.html',
  styleUrls: ['./housing-location.component.css'],
})
export class HousingLocationComponent {
  housingLocation = input.required<HousingLocationInfo>();
  private readonly router = inject(Router);
  protected readonly routeSegment = 'details';

  navigateTo(id: number) {
    this.router.navigate([this.routeSegment, `${id}`]);
  }
}
