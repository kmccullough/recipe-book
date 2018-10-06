import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionTableComponent } from '@component/view/collection/view/table/config/collection-table.component';
import { CollectionViewTableComponent } from '@component/view/collection/view/table/view/collection-view-table.component';


const entryComponents = [
  CollectionViewTableComponent,
];

const components = [
  CollectionTableComponent,
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
export class CollectionTableModule { }
