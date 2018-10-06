import { Component, Host, Input, OnInit, Self } from '@angular/core';
import { CollectionComponent } from 'app/component/view/collection/collection.component';

@Component({
  selector: 'rb-item-value',
  templateUrl: './item-value.component.html',
  styleUrls: ['./item-value.component.scss']
})
export class ItemValueComponent implements OnInit {

  @Input() name: string;

  constructor(
    @Host() @Self() private collection: CollectionComponent
  ) {
  }

  ngOnInit() {

  }

}
