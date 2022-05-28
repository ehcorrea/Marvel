export type MarvelResponse<T> = {
  code: number;
  status: string;
  data: {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: T[];
  };
};

export type CharactersRequest = {
  nameStartsWith?: string;
  modifiedSince?: Date;
  comics?: number;
  series?: number;
  events?: number;
  stories?: number;
  orderBy?: CharactersOrderBy;
  limit?: number;
  offset?: number;
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
  comics: Collection[];
  series: Collection[];
  stories: Collection[];
  events: Collection[];
};

export type Collection = {
  available: number;
  items: {
    name: '1602 (2003) #1';
  }[];
};
