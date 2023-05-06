export class MyObject {
  static keys<K extends PropertyKey, V>(tokens: Record<K, V>): K[] {
    return Object.keys(tokens) as K[];
  }

  static fromEntries<K extends PropertyKey, V>(
    arr: Iterable<readonly [K, V]>
  ): Record<K, V> {
    return Object.fromEntries<V>(arr) as Record<K, V>;
  }

  static entries<K extends PropertyKey, V>(o: Record<K, V>): [K, V][] {
    return Object.entries<V>(o) as [K, V][];
  }
}
