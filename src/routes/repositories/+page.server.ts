import { getClient } from "$lib/cms/server";
import type { RepositoryType } from "$lib/types/repositories.types";

export const load = async () => {
    const client = getClient();
    const repositories = await client.getAllContents<RepositoryType>({ endpoint: "repositories" });
    return { repositories };
};
