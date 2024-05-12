import 'reflect-metadata';
import {Unsubscribable} from 'rxjs';

export type DestroySubscribersParams = {
  destroyFunc: 'ngOnDestroy' | 'ngAfterViewInit';
};

export function DestroySubscribers(params?: DestroySubscribersParams) {
  // eslint-disable-next-line
  return (target: Record<string, unknown> | any) => {
    params = {
      destroyFunc: 'ngOnDestroy',
      ...params,
    };

    const subscriber: string = Reflect.getMetadata('subscription:name', target.prototype, 'subscriber');

    const originalNgDestroyFunc = target.prototype[params.destroyFunc];

    target.prototype[params.destroyFunc] = function () {
      unsubscribe(this);

      if (originalNgDestroyFunc) {
        originalNgDestroyFunc.bind(this)();
      }
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function unsubscribe(obj: any) {
      do {
        const sub: Unsubscribable | undefined = obj[subscriber].shift();
        if (sub && typeof sub.unsubscribe === 'function') {
          sub.unsubscribe();
        }
      } while (obj[subscriber].length);
    }

    return target;
  };
}

export function CombineSubscriptions() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (target: Record<string, unknown> | any, key: string): void => {
    const collectionFieldName = key + 'List';

    Object.defineProperty(target, collectionFieldName, {
      writable: true,
      enumerable: true,
      configurable: true,
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const getter = function (this: any) {
      if (!this[collectionFieldName]) {
        this[collectionFieldName] = [];
      }
      const currVal = this[collectionFieldName];
      return currVal;
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const setter = function (this: any, newVal: any) {
      if (!this[collectionFieldName]) {
        this[collectionFieldName] = [];
      }
      this[collectionFieldName].push(newVal);
    };

    // Create new property for collection to add with '='
    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true,
    });
    Reflect.defineMetadata('subscription:name', key, target, 'subscriber');
  };
}
