import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MainNavContainerComponent } from '@component/container/main-nav/main-nav.component';

import { CollectionModule } from '@component/view/collection/collection.module';

import { RecipesComponent } from '@component/view/recipes/recipes.component';
import { MainNavViewComponent } from '@component/view/main-nav/main-nav.component';
import { MenusComponent } from '@component/view/menus/menus.component';
import { GroceriesComponent } from '@component/view/groceries/groceries.component';
import { PantryComponent } from '@component/view/pantry/pantry.component';
import { MainNavItemComponent } from '@component/view/main-nav-item/main-nav-item.component';
import { MealsComponent } from '@component/view/meals/meals.component';
import { CommonModule } from '@angular/common';

const modules = [
  CollectionModule
];

const containerComponents = [
  MainNavContainerComponent,
];

const viewComponents = [
  GroceriesComponent,
  MainNavViewComponent,
  MainNavItemComponent,
  MealsComponent,
  MenusComponent,
  PantryComponent,
  RecipesComponent,
];

const components = [
  ...containerComponents,
  ...viewComponents,
];

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    RouterModule,
    CommonModule,
    ...modules,
  ],
  exports: [
    ...modules,
    ...components,
  ],
})
export class ComponentModule { }
