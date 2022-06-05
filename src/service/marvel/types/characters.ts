import { Characters, Creators, Events, Stories } from './summaries';

export type CharactersRequest = {
  nameStartsWith?: string;
  modifiedSince?: Date;
  comics?: number;
  series?: number;
  events?: number;
  stories?: number;
  orderBy?: CharactersOrderBy;
};

export enum CharactersOrderBy {
  name = 'name',
  descendingName = '-name',
  modified = 'modified',
  descendingNodified = '-modified',
}

export type CharactersData = {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  creators: Creators;
  characters: Characters;
  stories: Stories;
  events: Events;
};
