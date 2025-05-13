export interface UrlInput {
  url: string;
  title?: string;
  description?: string;
}

export interface Url {
  id: string;
  url: string;
  title?: string;
  description?: string;
  order: number;
  createdAt: string;
  updatedAt: string;
}

export interface UrlList {
  id: string;
  slug: string;
  urls: Url[];
  createdAt: string;
  updatedAt: string;
}
