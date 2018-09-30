import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNavContainerComponent } from './main-nav.component';

describe('MainNavViewComponent', () => {
  let component: MainNavContainerComponent;
  let fixture: ComponentFixture<MainNavContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainNavContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainNavContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
