<script lang="ts">
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
    import DropdownContext from "$lib/components/original/dropdown-context.svelte";
    import Icon from "@iconify/svelte";
    import { navigatorStore, emailStore } from "$lib/store";
    import { toggleMode } from "mode-watcher";
    import { page } from "$app/stores";
    const pathname = $derived($page.url.pathname);
    const parentPath = $derived(pathname.split('/').slice(0, -1).join('/') || '/');
    const isBlogs = $derived(pathname.split('/')[1] === 'blogs');
</script>

<div class="fixed w-full left-0 top-0 p-3 font-writer-regular z-20">
    <div class="absolute inset-x-0 top-0 bottom-[-24px] backdrop-blur-[15px] pointer-events-none"
         style="mask-image:linear-gradient(to bottom,black 0%,black 25%,rgba(0,0,0,0.9) 38%,rgba(0,0,0,0.75) 48%,rgba(0,0,0,0.55) 58%,rgba(0,0,0,0.35) 68%,rgba(0,0,0,0.15) 78%,rgba(0,0,0,0.05) 88%,transparent 100%);-webkit-mask-image:linear-gradient(to bottom,black 0%,black 25%,rgba(0,0,0,0.9) 38%,rgba(0,0,0,0.75) 48%,rgba(0,0,0,0.55) 58%,rgba(0,0,0,0.35) 68%,rgba(0,0,0,0.15) 78%,rgba(0,0,0,0.05) 88%,transparent 100%)"></div>
    <div class="relative z-10">
        <!-- mobile: hamburger -->
        <div class="text-primary border-[1px] flex items-center justify-center w-max ml-auto flex md:hidden items-center bg-primary/0 transition-all duration-200 py-[0.4rem] px-[0.4rem] text-[17px] rounded-[4px] cursor-pointer hover:bg-primary/5 dark:hover:bg-primary/10" on:click={() => navigatorStore.set(true)}>
            <Icon icon="charm:menu-hamburger"/>
        </div>

        <!-- desktop: nav links -->
        <div class="hidden md:flex items-center gap-0.5 w-full">
            {#if pathname !== "/"}
                <a href={parentPath} class="absolute flex items-center justify-center ml-[1px] text-[25px] text-primary/40">
                    <Icon icon="mingcute:left-line"/>
                </a>
            {/if}
            <div class="ml-auto w-max flex items-center gap-0.5 text-primary/80">
                <a href="/blogs" class="flex items-center gap-0.5 transition-all duration-200 px-2.5 py-1 rounded-[5px] cursor-pointer {isBlogs?'bg-primary/5 dark:bg-primary/10':'bg-primary/0'} hover:bg-primary/5 hover:dark:bg-primary/10">
                    <p class="mt-[2px] text-[13px]">Blogs</p>
                </a>
                <a href="/repositories" class="flex items-center gap-0.5 transition-all duration-200 px-2.5 py-1 rounded-[5px] cursor-pointer {pathname==='/repositories'?'bg-primary/5 dark:bg-primary/10':'bg-primary/0'} hover:bg-primary/5 hover:dark:bg-primary/10">
                    <p class="mt-[2px] text-[13px]">Repositories</p>
                </a>
                <DropdownContext title="Link">
                    <DropdownMenu.Item onclick={() => emailStore.set(true)}>
                        <Icon icon="mingcute:at-line" class="text-[18px] mb-[2px] mr-[5px] text-primary"/>
                        <p class="text-[13px] mt-[2px] text-primary/80">Email</p>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item>
                        <Icon icon="mingcute:github-line" class="text-[18px] mb-[2px] mr-[5px] text-primary"/>
                        <p class="text-[13px] mt-[2px] text-primary/80">GitHub</p>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item>
                        <Icon icon="ic:baseline-discord" class="text-[18px] mb-[2px] mr-[5px] text-primary"/>
                        <p class="text-[13px] mt-[2px] text-primary/80">Discord</p>
                    </DropdownMenu.Item>
                </DropdownContext>
                <div class="flex items-center gap-0.5 bg-primary/0 transition-all duration-200 px-2.5 h-[2rem] rounded-[5px] cursor-pointer hover:bg-primary/5 hover:dark:bg-opacity-10" on:click={() => toggleMode()}>
                    <span class="dark:hidden"><Icon icon="mi:sun"/></span>
                    <span class="hidden dark:inline-flex"><Icon icon="ph:moon-bold"/></span>
                </div>
            </div>
        </div>
    </div>
</div>
