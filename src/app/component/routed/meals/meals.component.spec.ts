import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealsRoutedComponent } from './meals.component';

describe('MealsRoutedComponent', () => {
  let component: MealsRoutedComponent;
  let fixture: ComponentFixture<MealsRoutedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealsRoutedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealsRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
