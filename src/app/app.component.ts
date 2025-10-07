import { Component } from '@angular/core';

import { HeaderComponent } from './core/components/header/header.component';
import { HomeComponent } from './features/pages/home/home.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
