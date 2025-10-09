import { Routes } from '@angular/router';

import { RouteTitleKey } from './core/config/route-title-key.enum';

import { HomeComponent } from './features/pages/home/home.component';
import { DetailsComponent } from './features/pages/details/details.component';

export const appRoutesConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      titleKey: RouteTitleKey.Home,
    },
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    data: {
      titleKey: RouteTitleKey.Details,
    },
  },
];
