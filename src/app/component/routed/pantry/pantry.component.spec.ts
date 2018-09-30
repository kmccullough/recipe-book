import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PantryRoutedComponent } from './pantry.component';

describe('PantryRoutedComponent', () => {
  let component: PantryRoutedComponent;
  let fixture: ComponentFixture<PantryRoutedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PantryRoutedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PantryRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
