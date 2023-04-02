export type Book = {
  _id?: string;
  title: string;
  author?: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
  summary?: string;
};

export type NewBook = {
  title: string;
  author?: string;
  summary?: string;
};
