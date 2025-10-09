import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HousingLocationInfo } from '../../../shared/models/housing-location-info.model';

import { HousingService } from '../../../core/services/housing.service';

import { ApplyFormComponent } from '../../components/apply-form/apply-form.component';

@Component({
  selector: 'app-details',
  imports: [ApplyFormComponent],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  private route: ActivatedRoute = inject(ActivatedRoute);
  private housingService = inject(HousingService);
  protected housingLocation: HousingLocationInfo | undefined;

  constructor() {
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);
  }
}
