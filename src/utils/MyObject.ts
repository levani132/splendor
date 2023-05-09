import { PartialRecord } from './PartialRecord';

export class MyObject {
  static keys<K extends PropertyKey, V>(gems: PartialRecord<K, V>): K[] {
    return Object.keys(gems) as K[];
  }

  static fromEntries<K extends PropertyKey, V>(
    arr: Iterable<readonly [K, V]>
  ): Record<K, V> {
    return Object.fromEntries<V>(arr) as Record<K, V>;
  }

  static entries<K extends PropertyKey, V>(o: PartialRecord<K, V>): [K, V][] {
    return Object.entries<V>(o as Record<K, V>) as [K, V][];
  }
}
