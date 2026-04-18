import type { BlogType } from "$lib/types/blogs.types";
import type { RepositoryType } from "$lib/types/repositories.types";
import { writable } from "svelte/store";

const blogs = writable<BlogType[]>([])
const repositories = writable<RepositoryType[]>([])

export {
    blogs,
    repositories
}
