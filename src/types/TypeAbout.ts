import type { Entry, EntryFields } from 'contentful';

export interface TypeAboutFields {
  title?: EntryFields.Symbol;
  subTitle?: EntryFields.Symbol;
  content?: EntryFields.Text;
}

export type TypeAbout = Entry<TypeAboutFields>;
