import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainNavContainerComponent } from './component/container/main-nav/main-nav.component';
import { MainNavViewComponent } from './component/view/main-nav/main-nav.component';

import { RecipesRoutedComponent } from './component/routed/recipes/recipes.component';
import { MealsRoutedComponent } from './component/routed/meals/meals.component';
import { PantryRoutedComponent } from './component/routed/pantry/pantry.component';
import { GroceriesRoutedComponent } from './component/routed/groceries/groceries.component';
import { MenusRoutedComponent } from './component/routed/menus/menus.component';

@NgModule({
  declarations: [
    AppComponent,

    RecipesRoutedComponent,
    MealsRoutedComponent,
    PantryRoutedComponent,
    GroceriesRoutedComponent,
    MenusRoutedComponent,

    MainNavContainerComponent,
    MainNavViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
