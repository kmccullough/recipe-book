import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rb-collection-table',
  templateUrl: './collection-table.component.html',
  styleUrls: ['./collection-table.component.scss']
})
export class CollectionTableComponent implements OnInit {

  @Input() columns: string;

  constructor() { }

  ngOnInit() {
  }

}
