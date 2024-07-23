import { Component, OnInit, Input } from '@angular/core';
import { ItemCardComponent } from '../item-card/item-card.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

/**
 * Component for displaying a list of drinks based on a specified letter category.
 * 
 * Properties:
 * - letter: string | null - Stores the selected letter category
 * - drinks: any[] - Array to hold the drinks data
 * 
 * Methods:
 * - ngOnInit(): void - Initializes the component and fetches drinks based on the selected letter
 * - fetchDrinks(letter: string): void - Fetches drinks from the API based on the given letter category
 */

@Component({
  selector: 'app-drinks-list',
  standalone: true,
  imports: [ItemCardComponent, CommonModule],
  templateUrl: './drinks-list.component.html',
  styleUrl: './drinks-list.component.scss'
})

export class DrinksListComponent {
  letter: string | null = null; // Store the letter
  drinks: any[] = []; // Array to hold the drinks data

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.letter = params.get('letter'); // Get the letter from the route
      if (this.letter) {
        this.fetchDrinks(this.letter); // Fetch drinks based on the letter
      }
    })
  }

  fetchDrinks( letter: string): void {
    console.log(this.letter)
    let url: string = ''
    switch (letter) {
      case 'Alcoholic':
      case 'Non_Alcoholic':
      case 'Optional_alcohol':
        url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${letter}`
        break;

      case 'Cocktail_glass':
      case 'Champagne_flute':
      case 'Jar':
      case 'Pitcher':
        url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${letter}`
        break;

      case 'Ordinary_Drink':
      case 'Cocktail':
      case 'Shake':
      case 'Cocoa':
      case 'Shot':
      case 'Beer':
        url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${letter}`
        break;
        
      default:
        url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`;
        break;
    }
    const apiUrl = url
    
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        this.drinks = data.drinks; // Assuming the response structure
      })
      .catch(error => {
        console.error('Error fetching drinks:', error);
      });
  }
  
}
