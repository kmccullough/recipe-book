import {
  AfterContentInit, Component, ComponentFactoryResolver, ComponentRef, ContentChildren, Input, OnChanges, OnDestroy, QueryList,
  SimpleChanges,
  ViewChild,
  ViewChildren, ViewContainerRef
} from '@angular/core';
import { CollectionViewComponentService } from '@component/view/collection/collection-view-component.service';
import { ItemComponent } from '@component/view/collection/item/item.component';

@Component({
  selector: 'rb-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnDestroy, OnChanges, AfterContentInit {

  @Input() view: string;

  @ViewChild('container', { read: ViewContainerRef }) container;
  @ContentChildren(ItemComponent) items: QueryList<ItemComponent>;

  private component?: ComponentRef<any>;

  ngAfterContentInit() {
    this.items.changes.subscribe(i => {
      this.component.instance.items = i;
      console.log('i', i);
    });
    this.component.instance.items = this.items;
  }

  constructor(
    private viewService: CollectionViewComponentService,
    private resolver: ComponentFactoryResolver,
  ) {
  }

  ngOnDestroy() {
    this.cleanUp();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.view) {
      console.log('123');
      this.setComponent();
    }
  }

  setComponent(view?: string) {
    this.cleanUpComponent();
    this.createComponentRef(
      this.viewService.get(view || this.view),
      {
        items: this.items,
      }
    );
  }

  private createComponentRef(componentClass, config = {}) {
    const factory = this.resolver.resolveComponentFactory(componentClass);
    const component = this.container.createComponent(factory, undefined, undefined, this.items);
    this.component = component;
    const instance = component.instance;
    Object.assign(instance, config);
  }

  private cleanUpComponent() {
    if (this.component) {
      this.component.destroy();
    }
    this.component = undefined;
    this.container.clear();
  }

  private cleanUp() {
    this.cleanUpComponent();
  }

}
