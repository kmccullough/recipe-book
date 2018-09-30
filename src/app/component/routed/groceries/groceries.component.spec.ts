import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceriesRoutedComponent } from './groceries.component';

describe('GroceriesRoutedComponent', () => {
  let component: GroceriesRoutedComponent;
  let fixture: ComponentFixture<GroceriesRoutedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroceriesRoutedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroceriesRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
