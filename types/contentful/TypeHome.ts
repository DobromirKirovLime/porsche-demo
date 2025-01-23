import type { Asset, Entry, EntryFields } from 'contentful';

export interface TypeHomeFields {
  title?: EntryFields.Symbol;
  subTitle?: EntryFields.Symbol;
  image?: Asset;
  images?: Asset[];
}

export type TypeHome = Entry<TypeHomeFields>;
