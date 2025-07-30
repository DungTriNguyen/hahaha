import type { BlogResponse, BlogItem, BlogContent } from "@/types/blog";

export interface GetBlogOptions {
  id?: string;
  BlogCategoryId?: string;
  content?: boolean;
  PageIndex?: number;
  PageSize?: number;
  ExcludeBlogId?: string;
}

export async function getBlog(
  options?: GetBlogOptions
): Promise<BlogResponse | BlogItem | BlogContent | null> {
  try {
    let url = `${process.env.NEXT_PUBLIC_API_URL}/api/v1/Blog/${process.env.NEXT_PUBLIC_TENANT_ID}`;

    if (options?.id) {
      url += `/${options.id}${options.content ? "/content" : ""}`;
    } else {
      const params = [];
      if (options?.BlogCategoryId)
        params.push(`BlogCategoryId=${options.BlogCategoryId}`);
      if (typeof options?.PageIndex === "number")
        params.push(`PageIndex=${options.PageIndex}`);
      if (typeof options?.PageSize === "number")
        params.push(`PageSize=${options.PageSize}`);
      if (options?.ExcludeBlogId)
        params.push(`ExcludeBlogId=${options.ExcludeBlogId}`);

      if (params.length > 0) {
        url += `?${params.join("&")}`;
      }
    }

    const res = await fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      cache: "no-store", // nếu muốn luôn fetch mới khi SSR
    });

    // Nếu API trả về lỗi thì log và trả về null
    if (!res.ok) {
      console.error(`getBlog: HTTP ${res.status} - ${res.statusText}`);
      return null;
    }

    return (await res.json()) as BlogResponse | BlogItem | BlogContent;
  } catch (error) {
    console.error("getBlog: Error fetching blog:", error);
    return null;
  }
}
