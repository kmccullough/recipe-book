/**
 * Returns whether associated view component will display
 */
export type ViewComponentPredicate = (key: string, ...args: any[]) => boolean | any;

export interface ViewComponentItem {
  key: string;
  component: any;
  predicate: ViewComponentPredicate;
}

/**
 * Store and access registered view components
 */
export class ViewComponentService {

  defaultKey?: string;
  components = new Map<string, ViewComponentItem>();

  constructor() { }

  /**
   * Register view component by key with optional predicate
   * @param key Unique key to register component under
   * @param component Component to register
   * @param [predicate] Predicate function; if returns false, uses default component
   * @returns Self reference
   */
  register(key, component, predicate?: ViewComponentPredicate) {
    this.components.set(key, { key, component, predicate });
    return this;
  }

  /**
   * Get registered component by key or default component
   * @param key Unique key of expected component
   * @param args Arguments to pass to any predicate functions
   * @returns Registered component by key or default component
   */
  get(key, ...args: any[]) {
    // Get registered component from node component service by layout name
    let component = this.components.get(key);
    // Verify the component wants to render
    if (!component || component.predicate && !component.predicate(key, ...args)) {
      // Fall-back to default component
      component = this.components.get(this.defaultKey);
    }
    return component && component.component;
  }

}
