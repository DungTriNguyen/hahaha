import type { BlogCategoryResponse } from "@/types/blog-category";

export interface GetBlogCategoryOptions {
  id?: string;
  ParentId?: string;
  PageIndex?: number;
  PageSize?: number;
}

export async function getBlogCategory(
  options?: GetBlogCategoryOptions
): Promise<BlogCategoryResponse | null> {
  try {
    let url = `${process.env.NEXT_PUBLIC_API_URL}/api/v1/BlogCategory/${process.env.NEXT_PUBLIC_TENANT_ID}`;

    if (options?.id) {
      url += `/${options.id}`;
    } else if (options?.ParentId) {
      url += `?ParentId=${options.ParentId}`;
    } else if (
      typeof options?.PageIndex === "number" &&
      typeof options?.PageSize === "number"
    ) {
      url += `?PageIndex=${options.PageIndex}&PageSize=${options.PageSize}`;
    }

    const res = await fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      cache: "no-store", // để luôn lấy mới khi SSR
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
      return null;
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching blog category:", error);
    return null;
  }
}
