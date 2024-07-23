import { Routes } from '@angular/router';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { DrinksListComponent } from './drinks-list/drinks-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: '', redirectTo: '/drinks', pathMatch: 'full' }, // Redirect to item list
    { path: 'drinks', component: DrinksListComponent }, // Route for the item list
    { path: 'drinks/filter/:letter', component: DrinksListComponent }, // Route with letter parameter
    { path: 'drinks/letter/:letter', component: DrinksListComponent }, // Route with letter parameter
    { path: 'drinks/:id', component: ItemDetailsComponent }, // Route for item details
    { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];
