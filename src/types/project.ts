export interface ProjectImage {
    small: string | null;
    medium: string | null;
    origin: string;
  }
  
  export interface ProjectItem {
    id: string;
    title: string;
    imageUrl: string;
    images: ProjectImage[];
    itemUrl: string;
    customId: number;
    description: string;
    createdDate: string;     
    updatedDate: string;    
    categoryId: string;
    categoryName: string;
    categoryUrl: string;
  }
  
  export interface ProjectContent {
    content: string;
  }
  
  export interface ProjectResponse {
    items: ProjectItem[];
  }