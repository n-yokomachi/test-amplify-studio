import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type BookMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Book {
  readonly id: string;
  readonly title?: string;
  readonly author?: string;
  readonly release_date?: string;
  readonly genre?: string;
  readonly image_src?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Book, BookMetaData>);
  static copyOf(source: Book, mutator: (draft: MutableModel<Book, BookMetaData>) => MutableModel<Book, BookMetaData> | void): Book;
}