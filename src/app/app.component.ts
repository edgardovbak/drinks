import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { ItemCardComponent } from './item-card/item-card.component';
import { SlideOutMenuComponent } from './slide-out-menu/slide-out-menu.component';
import { DrinksListComponent } from './drinks-list/drinks-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    ItemCardComponent,
    SlideOutMenuComponent,
    DrinksListComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
