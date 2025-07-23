'use client';
import { useState, useEffect } from "react";
import type { BlogCategoryResponse } from "@/types/blog-category";

interface UseBlogCategoryOptions {
    id?: string; 
    ParentId?: string;
}

export function useBlogCategory(options?: UseBlogCategoryOptions) {
    const [data, setData] = useState<BlogCategoryResponse | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                let url = `${process.env.NEXT_PUBLIC_API_URL}/api/v1/BlogCategory/${process.env.NEXT_PUBLIC_TENANT_ID}`;

                if (options?.id) {
                    url += `/${options.id}`; 

                } else if (options?.ParentId) {
                    url += `?ParentId=${options.ParentId}`;
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
    }, [options?.id, options?.ParentId]);

    return { data, loading, error };
}
