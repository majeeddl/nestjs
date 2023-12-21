export abstract class IGenericRepository<T> {
  abstract getAll(): Promise<T[]>;

  // abstract get(id: string): Promise<T>;

  abstract create(item: T, session: any): Promise<T>;

  abstract update(id: string, item: T);
}
