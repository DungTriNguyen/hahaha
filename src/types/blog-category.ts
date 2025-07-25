export interface BlogCategory {
    id: string;
    title: string;
    imageUrl: string;
    itemUrl: string;
    customId: number;
    description: string;
    createdDate: string; 
    updatedDate: string;
  }

  export interface BlogCategoryResponse {
    items: BlogCategory[];
  }