import { getBlog, GetBlogOptions } from "@/services/blog";
import { BlogContent, BlogItem, BlogResponse } from "@/types/blog";
import { useQuery } from "@tanstack/react-query";

export function useBlogQuery(options?: GetBlogOptions) {
  return useQuery<BlogResponse | BlogItem | BlogContent | null>({
    queryKey: ["blog", options], // cache key dựa trên options
    queryFn: () => getBlog(options),
    enabled: true, // có thể set false để delay fetch
    staleTime: 1000 * 60 * 5, // cache 5 phút
    refetchOnWindowFocus: false, // tránh refetch khi focus lại
  });
}
