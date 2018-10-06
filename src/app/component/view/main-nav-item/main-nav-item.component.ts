import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rb-main-nav-item',
  templateUrl: './main-nav-item.component.html',
  styleUrls: ['./main-nav-item.component.scss']
})
export class MainNavItemComponent implements OnInit {

  @Input() routerLink: string;
  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
