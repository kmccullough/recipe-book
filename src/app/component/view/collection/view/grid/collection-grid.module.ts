import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionGridComponent } from '@component/view/collection/view/grid/config/collection-grid.component';
import { CollectionViewGridComponent } from '@component/view/collection/view/grid/view/collection-view-grid.component';

const entryComponents = [
  CollectionViewGridComponent,
];

const components = [
  CollectionGridComponent,
];

@NgModule({
  declarations: [
    ...entryComponents,
    ...components,
  ],
  imports: [
    CommonModule
  ],
  entryComponents: [
    ...entryComponents,
  ],
  exports: [
    ...components,
  ],
})
export class CollectionGridModule { }
