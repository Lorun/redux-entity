import type { EntityStoreState } from './EntityStore';
import type Resource from './Resource';
import type { Identity } from './types';

class ResourceStore<T> {
  schema: Resource<T, *>;
  state: EntityStoreState;

  constructor(
    schema: Resource<T, *>,
    state: EntityStoreState
  ) {
    this.schema = schema;
    this.state = state;
  }

  /* eslint no-unused-vars:0 */
  resolve(variables: any): any {
    // TODO(lmr): throw error?
  }

  fluent(stateMapper: Identity<EntityStoreState>): this {
    const C = this.constructor;
    return new C(
      this.schema,
      stateMapper(this.state)
    );
  }

}

module.exports = ResourceStore;
