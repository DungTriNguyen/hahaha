import {
  getBlogCategory,
  GetBlogCategoryOptions,
} from "@/services/blog-category";
import type { BlogCategory, BlogCategoryResponse } from "@/types/blog-category";
import { useQuery } from "@tanstack/react-query";

export function useBlogCategoryQuery(options?: GetBlogCategoryOptions) {
  return useQuery<BlogCategoryResponse | BlogCategory | null>({
    queryKey: ["blogCategory", options], // cache theo options
    queryFn: () => getBlogCategory(options),
    enabled: true, // hoặc !!options?.id nếu chỉ fetch khi có id
    staleTime: 1000 * 60 * 5, // cache 5 phút
    refetchOnWindowFocus: false, // tránh refetch khi focus lại
  });
}
