import { clsx, type ClassValue } from "clsx";
import { readable } from "svelte/store";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function dateConverter(date: Date) {
	const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
	return new Date(date).toLocaleDateString('en-US', options);
}

export function mediaQuery(query: string) {
    return readable(false, (set) => {
        if (typeof window === "undefined") return;
        const mql = window.matchMedia(query);
        set(mql.matches);
        const handler = (e: MediaQueryListEvent) => set(e.matches);
        mql.addEventListener("change", handler);
        return () => mql.removeEventListener("change", handler);
    });
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChild<T> = T extends { child?: any } ? Omit<T, "child"> : T;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChildren<T> = T extends { children?: any } ? Omit<T, "children"> : T;
export type WithoutChildrenOrChild<T> = WithoutChildren<WithoutChild<T>>;
export type WithElementRef<T, U extends HTMLElement = HTMLElement> = T & { ref?: U | null };
