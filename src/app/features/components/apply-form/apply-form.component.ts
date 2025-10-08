import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { HousingService } from '../../../core/services/housing.service';

@Component({
  selector: 'app-apply-form',
  imports: [ReactiveFormsModule],
  templateUrl: './apply-form.component.html',
  styleUrls: ['./apply-form.component.css'],
})
export class ApplyFormComponent {
  private housingService: HousingService = inject(HousingService);
  protected applyForm = new FormGroup({
    firstName: new FormControl('', { nonNullable: true }),
    lastName: new FormControl('', { nonNullable: true }),
    email: new FormControl('', { nonNullable: true }),
  });

  submitApplication() {
    const { firstName = '', lastName = '', email = '' } = this.applyForm.value;
    this.housingService.submitApplication(firstName, lastName, email);
    this.applyForm.reset();
  }
}
