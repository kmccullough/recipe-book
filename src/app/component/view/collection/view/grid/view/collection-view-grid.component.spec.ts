import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionViewTableComponent } from './collection-view-table.component';

describe('CollectionViewTableComponent', () => {
  let component: CollectionViewTableComponent;
  let fixture: ComponentFixture<CollectionViewTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionViewTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionViewTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
