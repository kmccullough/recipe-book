import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionComponent } from '@component/view/collection/collection.component';
import { CollectionViewComponentService } from '@component/view/collection/collection-view-component.service';

import { ItemComponent } from '@component/view/collection/item/item.component';
import { ItemValueComponent } from '@component/view/collection/item/item-value/item-value.component';

import { CollectionTableModule } from '@component/view/collection/view/table/collection-table.module';
import { CollectionGridModule } from '@component/view/collection/view/grid/collection-grid.module';

const modules = [
  CollectionTableModule,
  CollectionGridModule,
];

const components = [
  CollectionComponent,
  ItemComponent,
  ItemValueComponent,
];

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    CommonModule,
    ...modules,
  ],
  providers: [
    CollectionViewComponentService,
  ],
  exports: [
    ...modules,
    ...components,
  ],
})
export class CollectionModule { }
