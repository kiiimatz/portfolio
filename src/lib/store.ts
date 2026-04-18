import { writable } from "svelte/store";

export const navigatorStore = writable<boolean>(false)
export const emailStore = writable<boolean>(false)
export const pagenationStore = writable<string>("")
