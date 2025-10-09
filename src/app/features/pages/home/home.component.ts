import { Component, inject } from '@angular/core';

import { HousingLocationInfo } from '../../../shared/models/housing-location-info.model';

import { HousingService } from '../../../core/services/housing.service';

import { HousingLocationComponent } from '../../components/housing-location/housing-location.component';
import { SearchFormComponent } from '../../components/search-form/search-form.component';

@Component({
  selector: 'app-home',
  imports: [SearchFormComponent, HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  protected housingLocationList: HousingLocationInfo[] = [];
  private housingService: HousingService = inject(HousingService);

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
}
