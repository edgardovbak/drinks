import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

/**
 * Component for displaying details of a specific item.
 */

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.scss'
})
export class ItemCardComponent {
  @Input() drink: any = null

  constructor(private router: Router) {}

  goToDrinkDetail(drinkId: string) {
    this.router.navigate(['/drinks', this.drink.idDrink]); // Navigate to the drink detail route
  }
}
