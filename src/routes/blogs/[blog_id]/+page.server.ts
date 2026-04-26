import { getClient } from "$lib/cms/server";
import { error } from "@sveltejs/kit";
import { highlightBlogHtml } from "$lib/shiki";
import type { BlogType } from "$lib/types/blogs.types";

export const load = async ({ params, platform }) => {
    const client = getClient();

    let blog: BlogType;
    blog = await client.get({
        endpoint: "blogs",
        contentId: params.blog_id,
    });

    try {
        blog.body = await highlightBlogHtml(blog.body);
    } catch (e) {
        console.error("SHIKI ERROR:", e);
    }

    const newView = blog.view + 1;

    const updatePromise = client.update<BlogType>({
        endpoint: "blogs",
        contentId: params.blog_id,
        content: { view: newView },
    }).catch(() => {});

    // Cloudflare Workers: waitUntil でレスポンス返却後も update を完走させる
    if (platform?.context?.waitUntil) {
        platform.context.waitUntil(updatePromise as Promise<unknown>);
    } else {
        // ローカル開発時は await して確実に更新
        await updatePromise;
    }

    return { blog: { ...blog, view: newView } };
};
