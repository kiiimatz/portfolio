import { getClient } from "$lib/cms/server";
import { error } from "@sveltejs/kit";
import type { BlogType } from "$lib/types/blogs.types";

export const load = async ({ params }) => {
    const client = getClient();

    let blog: BlogType;
    try {
        blog = await client.get<BlogType>({
            endpoint: "blogs",
            contentId: params.blog_id,
        });
    } catch {
        throw error(404, "Blog not found");
    }

    // Increment view count (fire and forget)
    client.update({
        endpoint: "blogs",
        contentId: params.blog_id,
        content: { view: blog.view + 1 },
    }).catch(() => {});

    return { blog: { ...blog, view: blog.view + 1 } };
};
