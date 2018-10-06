import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rb-collection-view-grid',
  templateUrl: './collection-view-grid.component.html',
  styleUrls: ['./collection-view-grid.component.scss']
})
export class CollectionViewGridComponent {

  @Input() items: any[];

  constructor() { }

}
