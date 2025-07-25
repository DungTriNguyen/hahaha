export interface CareerImage {
    small: string | null;
    medium: string | null;
    origin: string;
  }
  
  export interface CareerItem {
    id: string;
    title: string;
    imageUrl: string;
    images: CareerImage[];
    itemUrl: string;
    customId: number;
    description: string;
    createdDate: string; 
    updatedDate: string;
    categoryId: string;
    categoryName: string;
    categoryUrl: string;
  }
  
  export interface CareerContent {
    content: string;
  }
  
  export interface CareerResponse {
    items: CareerItem[];
  }