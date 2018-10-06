import { Component, OnInit } from '@angular/core';
import recipes from '../../../../assets/recipes.json';

@Component({
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesRoutedComponent implements OnInit {

  recipes: any = Object.keys(recipes).map(k => {
    recipes[k].id = k;
    return recipes[k];
  });

  constructor() { }

  ngOnInit() {
    console.log(recipes);
  }

}
