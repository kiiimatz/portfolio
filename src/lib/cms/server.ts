import { createClient } from "microcms-js-sdk";
import { env } from "$env/dynamic/private";

export function getClient() {
    return createClient({
        serviceDomain: env.MICROCMS_DOMAIN,
        apiKey: env.MICROCMS_API_KEY,
    });
}
