import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rb-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  @Input() recipes: any;

  constructor() { }

  ngOnInit() {
  }

}
