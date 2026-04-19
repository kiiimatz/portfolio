import { getClient } from "$lib/cms/server";
import type { BlogType } from "$lib/types/blogs.types";

export const load = async () => {
    const client = getClient();
    const blogs = await client.getAllContents<BlogType>({ endpoint: "blogs" });
    return { blogs };
};
