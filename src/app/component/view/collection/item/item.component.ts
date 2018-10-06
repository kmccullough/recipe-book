import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rb-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() values: { [key: string]: any };

  constructor() { }

  ngOnInit() {
  }

}
