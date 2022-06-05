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

export type MarvelDefaultReques<T> = {
  offset?: number;
  limit?: number;
} & T;
