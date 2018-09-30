import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenusRoutedComponent } from './menus.component';

describe('MenusRoutedComponent', () => {
  let component: MenusRoutedComponent;
  let fixture: ComponentFixture<MenusRoutedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenusRoutedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenusRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
