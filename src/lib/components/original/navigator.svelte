<script lang="ts">
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
    import DropdownContext from "$lib/components/original/dropdown-context.svelte";
    import Icon from "@iconify/svelte";
    import { navigatorStore, emailStore, pagenationStore } from "$lib/store";
    import { toggleMode, mode } from "mode-watcher";
</script>

<div class="fixed w-full left-0 top-0 p-3 font-writer-regular z-20 backdrop-blur-[15px]">
    <div class="text-primary border-[1px] w-max ml-auto flex md:hidden items-center gap-0.5 bg-primary/0 transition-all duration-200 py-[0.4rem] px-[0.4rem] text-[17px] rounded-[4px] cursor-pointer hover:bg-primary/5 dark:hover:bg-primary/10" on:click={() => navigatorStore.set(true)}>
        <Icon icon="charm:menu-hamburger"/>
    </div>

    <div class="hidden md:flex items-center gap-0.5 w-full">
        {#if $pagenationStore !== "/"}
            <a href={$pagenationStore.split('/').slice(0, -1).join('/') || '/'} class="absolute flex items-center justify-center ml-[1px] text-[25px] text-primary/40">
                <Icon icon="mingcute:left-line"/>
            </a>
        {/if}
        <div class="ml-auto w-max flex items-center gap-0.5 text-primary/80">
            <a href="/blogs" class="flex items-center gap-0.5 transition-all duration-200 px-2.5 py-1 rounded-[5px] cursor-pointer {$pagenationStore.split('/')[1]==='blogs'?'bg-primary/5 dark:bg-primary/10':'bg-primary/0'} hover:bg-primary/5 hover:dark:bg-primary/10">
                <p class="mt-[2px] text-[13px]">Blogs</p>
            </a>
            <a href="/repositories" class="flex items-center gap-0.5 transition-all duration-200 px-2.5 py-1 rounded-[5px] cursor-pointer {$pagenationStore==='/extensions'?'bg-primary/5 dark:bg-primary/10':'bg-primary/0'} hover:bg-primary/5 hover:dark:bg-primary/10">
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
           <!-- <DropdownContext title="Bits">-->
<!--                <DropdownMenu.Item href="/bits">-->
<!--                    <Icon icon="mdi:about-circle-outline" class="text-[18px] mb-[2px] mr-[5px] text-blue-500"/>-->
<!--                    <p class="text-[13px] mt-[2px]">Home</p>-->
<!--                </DropdownMenu.Item>-->
<!--                <DropdownMenu.Item>-->
<!--                    <Icon icon="ic:outline-people-alt" class="text-[18px] mb-[2px] mr-[5px] text-blue-500"/>-->
<!--                    <p class="text-[13px] mt-[2px]">Chat</p>-->
<!--                </DropdownMenu.Item>-->
<!--                <DropdownMenu.Item>-->
<!--                    <Icon icon="ic:twotone-work-outline" class="text-[18px] mb-[2px] mr-[5px] text-blue-500"/>-->
<!--                    <p class="text-[13px] mt-[2px]">Upload</p>-->
<!--                </DropdownMenu.Item>-->
<!--            </DropdownContext> -->
            <div class="flex items-center gap-0.5 bg-primary/0 transition-all duration-200 px-2.5 h-[2rem] rounded-[5px] cursor-pointer hover:bg-primary/5 hover:dark:bg-opacity-10" on:click={() => toggleMode()}>
                {#if mode.current === "dark"}
                    <Icon icon="ph:moon-bold"/>
                {:else}
                    <Icon icon="mi:sun"/>
                {/if}
            </div>
        </div>
    </div>
</div>
