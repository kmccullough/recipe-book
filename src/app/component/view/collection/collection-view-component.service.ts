import { Injectable } from '@angular/core';

import { ViewComponentService } from '@app/service/view-component.service';

import { CollectionViewTableComponent } from '@component/view/collection/view/table/view/collection-view-table.component';
import { CollectionViewGridComponent } from '@component/view/collection/view/grid/view/collection-view-grid.component';

/**
 * Registers view components for collections
 */
@Injectable()
export class CollectionViewComponentService extends ViewComponentService {

  defaultKey = 'table';

  constructor() {
    super();
    this
      .register('table', CollectionViewTableComponent)
      .register('grid', CollectionViewGridComponent)
    ;
  }

}
