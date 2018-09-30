import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNavViewComponent } from './main-nav.component';

describe('MainNavViewComponent', () => {
  let component: MainNavViewComponent;
  let fixture: ComponentFixture<MainNavViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainNavViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainNavViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
