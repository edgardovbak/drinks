import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

/**
 * Component for the slide-out menu functionality.
 * 
 * @remarks
 * This component handles the opening and closing of a slide-out menu, as well as navigation based on selected letters or filters.
 */

@Component({
  selector: 'app-slide-out-menu',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './slide-out-menu.component.html',
  styleUrl: './slide-out-menu.component.scss'
})
export class SlideOutMenuComponent {
  isOpen = false;

  alphabet: string[] = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ'); // Create an array of letters A-Z

  constructor(private router: Router) {}

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  selectLetter(letter: string) {
    this.router.navigate(['/drinks/letter', letter]); 
  }

  selectFilter(letter: string) {
    this.router.navigate(['/drinks/filter', letter]); 
  }
}
