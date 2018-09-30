import { Component, OnInit } from '@angular/core';
import recipes from '../../../../assets/recipes.json';

@Component({
  selector: 'rb-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesRoutedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(recipes);
  }

}
