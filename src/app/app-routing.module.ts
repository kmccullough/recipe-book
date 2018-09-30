import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesRoutedComponent } from './component/routed/recipes/recipes.component';
import { MenusRoutedComponent } from './component/routed/menus/menus.component';
import { MealsRoutedComponent } from './component/routed/meals/meals.component';
import { PantryRoutedComponent } from './component/routed/pantry/pantry.component';
import { GroceriesRoutedComponent } from './component/routed/groceries/groceries.component';

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipesRoutedComponent },
  { path: 'menus', component: MenusRoutedComponent },
  { path: 'meals', component: MealsRoutedComponent },
  { path: 'pantry', component: PantryRoutedComponent },
  { path: 'groceries', component: GroceriesRoutedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
