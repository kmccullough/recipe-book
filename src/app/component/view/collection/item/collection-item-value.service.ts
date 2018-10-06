export interface ItemValue {
  key: string;
  itemValue: any;
}

/**
 * Store and access registered view components
 */
export class CollectionItemValueService {

  values = new Map<string, ItemValue>();

  constructor() { }

  /**
   * Register view component by key with optional predicate
   * @param key Unique key to register component under
   * @param itemValue Component to register
   * @returns Self reference
   */
  register(key, itemValue) {
    this.values.set(key, { key, itemValue });
    return this;
  }

  /**
   * Get registered component by key or default component
   * @param key Unique key of expected component
   * @returns Registered component by key or default component
   */
  get(key) {
    // Get registered component from node component service by layout name
    const component = this.values.get(key);
    return component && component.itemValue;
  }

}
