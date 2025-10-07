import { Component } from '@angular/core';

import { Home } from './home/home';

@Component({
  selector: 'app-root',
  imports: [Home],
  template: `
    <main>
      <header class="brand-name">
        <img class="brand-logo" src="/assets/logo.svg" alt="" />
        <h1 class="sr-only">Explore Rental Houses at the Best Price</h1>
      </header>
      <section class="content">
        <app-home></app-home>
      </section>
    </main>
  `,
  styleUrls: ['./app.css'],
})
export class App {}
