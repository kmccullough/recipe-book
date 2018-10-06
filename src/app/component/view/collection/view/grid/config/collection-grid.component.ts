import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rb-collection-grid',
  templateUrl: './collection-grid.component.html',
  styleUrls: ['./collection-grid.component.scss']
})
export class CollectionGridComponent implements OnInit {

  @Input() columns: string;

  constructor() { }

  ngOnInit() {
  }

}
