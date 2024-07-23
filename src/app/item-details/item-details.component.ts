import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

/**
 * Component for displaying details of a specific item.
 * Retrieves item details from an API based on the item ID.
 */

@Component({
  selector: 'app-item-details',
  standalone: true,
  imports: [],
  templateUrl: './item-details.component.html',
  styleUrl: './item-details.component.scss'
})
export class ItemDetailsComponent {
  itemId: string | null | undefined;
  drinkDetails: any = null

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.itemId = this.route.snapshot.paramMap.get('id');
    if (this.itemId) {
      this.fetchItemDetails(this.itemId);
    }
  }

  fetchItemDetails(id: string): void {
    const apiUrl = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
    
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        this.drinkDetails = data.drinks[0]; // Assuming the response structure
      })
      .catch(error => {
        console.error('Error fetching item details:', error);
      });
  }
}
