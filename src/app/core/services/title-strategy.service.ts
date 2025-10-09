import { Injectable, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TitleStrategy, RouterStateSnapshot } from '@angular/router';

import { RouteTitleKey } from '../config/route-title-key.enum';
import { routeTitles } from '../config/route-titles';

import { HousingService } from './housing.service';

@Injectable()
export class TitleStrategyService extends TitleStrategy {
  private readonly appName = 'Homes';
  private readonly title = inject(Title);
  private readonly housingService = inject(HousingService);

  override updateTitle(snapshot: RouterStateSnapshot): void {
    const route = snapshot.root.firstChild;
    const titleKey = route?.data?.['titleKey'] as RouteTitleKey | undefined;

    if (!titleKey) return;

    let baseTitle = '';

    switch (titleKey) {
      case RouteTitleKey.Home:
        baseTitle = routeTitles[RouteTitleKey.Home];
        break;

      case RouteTitleKey.Details: {
        const id = Number(route?.params['id']);
        const housing = this.housingService.getHousingLocationById(id);
        baseTitle = housing ? housing.name : routeTitles[RouteTitleKey.Details];
        break;
      }
    }

    this.setAppTitle(baseTitle);
  }

  private setAppTitle(baseTitle: string): void {
    this.title.setTitle(`${baseTitle} | ${this.appName}`);
  }
}
