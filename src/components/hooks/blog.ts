"use client";
import { useState, useEffect } from "react";
import type { BlogResponse, BlogItem, BlogContent } from "@/types/blog";

interface UseBlogOptions {
  id?: string;
  BlogCategoryId?: string;
  content?: boolean;
  PageIndex?: number;
  PageSize?: number;
}

export function useBlog(options?: UseBlogOptions) {
  const [data, setData] = useState<
    BlogResponse | BlogItem | BlogContent | null
  >(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

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
          if (params.length > 0) {
            url += `?${params.join("&")}`;
          }
        }

        const res = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const json = await res.json();
        setData(json);
      } catch (err) {
        setError(err instanceof Error ? err.message : String(err));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [
    options?.id,
    options?.BlogCategoryId,
    options?.PageIndex,
    options?.PageSize,
  ]);

  return { data, loading, error };
}
