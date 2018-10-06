import { Component, Input } from '@angular/core';

@Component({
  selector: 'rb-collection-view-table',
  templateUrl: './collection-view-table.component.html',
  styleUrls: ['./collection-view-table.component.scss']
})
export class CollectionViewTableComponent {

  @Input() items: any[];

  constructor() { }

}
