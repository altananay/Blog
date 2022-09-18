export interface Read<T> {
    find(model: T): Promise<T[]>;
    findOne(model: string): Promise<T>;
  }