import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesRoutedComponent } from './recipes.component';

describe('RecipesRoutedComponent', () => {
  let component: RecipesRoutedComponent;
  let fixture: ComponentFixture<RecipesRoutedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipesRoutedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
