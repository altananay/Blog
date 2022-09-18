export interface Write<T> {
    create(model: T): Promise<void>;
    update(id: string, model: T): Promise<boolean>;
    delete(id: string): Promise<boolean>;
  }