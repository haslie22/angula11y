/*!
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
import { ApplicationConfig } from '@angular/core';

import { provideProtractorTestingSupport } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

import { appRoutesConfig } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideProtractorTestingSupport(), provideRouter(appRoutesConfig)],
};
