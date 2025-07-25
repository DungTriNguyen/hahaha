export interface BlogImage {
  small: string;
  medium: string;
  origin: string;
}

export interface BlogItem {
  id: string;
  title: string;
  imageUrl: string;
  images: BlogImage[];
  itemUrl: string;
  customId: number;
  description: string;
  createdDate: string;
  updatedDate: string;
  categoryId: string;
  categoryName: string;
  categoryUrl: string;
}

export interface BlogContent {
  content: string;
}

export interface BlogResponse {
  items: BlogItem[];
  totalCount?: number;
}
