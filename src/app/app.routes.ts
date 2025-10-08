import { Routes } from '@angular/router';

import { HomeComponent } from './features/pages/home/home.component';
import { DetailsComponent } from './features/pages/details/details.component';

export const appRoutesConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page',
  },
  {
    path: 'details',
    component: DetailsComponent,
    title: 'Details page',
  },
];
