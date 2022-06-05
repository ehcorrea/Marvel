import { Characters, Creators, Events, Stories } from './summaries';

export type ComicsRequest = {
  characters?: number;
  collaborators?: number;
  comics?: number;
  creators?: number;
  dateDescriptor?: DateDescriptor;
  dateRange?: number;
  events?: number;
  format?: Format;
  formatType?: FormatType;
  modifiedSince?: Date;
  orderBy?: ComicsOrderBy;
  series?: number;
  sharedAppearances?: number;
  stories?: number;
  titleStartsWith?: string;
};

type Format =
  | 'comic'
  | 'format'
  | 'magazine'
  | 'trade paperback'
  | 'hardcover'
  | 'digest'
  | 'graphic novel'
  | 'digital comic'
  | 'infinite comic';

type FormatType = 'comic' | 'collection';

type DateDescriptor = 'lastWeek' | 'thisWeek' | 'nextWeek' | 'thisMonth';

export enum ComicsOrderBy {
  focDate = 'focDate',
  descendingFocDate = '-focDate',
  onSaleDate = 'onSaleDate',
  descendingOnSaleDate = '-onSaleDate',
  title = 'title',
  descendingTitle = '-title',
  issueNumber = 'issueNumber',
  descendingTitleIssueNumber = '-issueNumber',
  modified = 'modified',
  descendingModified = '-modified',
}

export type ComicsData = {
  id: number;
  digitalId: number;
  title: string;
  issueNumber: number;
  variantDescription: string;
  description: string;
  modified: Date;
  pageCount: number;
  prices: {
    type: string;
    price: number;
  }[];
  thumbnail: {
    path: string;
    extension: string;
  };
  creators: Creators;
  characters: Characters;
  stories: Stories;
  events: Events;
};
