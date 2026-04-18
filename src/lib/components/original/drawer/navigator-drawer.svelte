<script lang="ts">
    import * as Drawer from "$lib/components/ui/drawer";
    import NavigatorDrawerLine from "./navigator-drawer-line.svelte";
    import NavigatorDrawerHref from "./navigator-drawer-href.svelte";
    import { toggleMode } from "mode-watcher";
    import { emailStore, navigatorStore } from "$lib/store";
</script>

<Drawer.Root bind:open={$navigatorStore}>
    <Drawer.Content class="font-writer-regular">
        <div class="px-6 pt-2">
            <NavigatorDrawerHref icon="lucide:home" href="/">Go to the home page</NavigatorDrawerHref>
            <NavigatorDrawerLine>Posts</NavigatorDrawerLine>
            <NavigatorDrawerHref icon="icon-park-outline:dolphin" href="/blogs">Blogs</NavigatorDrawerHref>
            <NavigatorDrawerHref icon="lucide-lab:elephant-face" href="/repositories">Repositories</NavigatorDrawerHref>
            <NavigatorDrawerLine>Links</NavigatorDrawerLine>
            <NavigatorDrawerHref icon="mingcute:at-line" on:click={() => emailStore.set(true)}>Email</NavigatorDrawerHref>
            <NavigatorDrawerHref icon="mingcute:github-line" href="https://github.com/hideko-dev">Github</NavigatorDrawerHref>
            <NavigatorDrawerHref icon="ic:baseline-discord" href="https://discord.com/users/1103253246807650344">Discord</NavigatorDrawerHref>
        </div>
        <Drawer.Footer class="px-6 text-[13px] mb-2">
            <div class="bg-primary/10 hover:bg-primary/15 transition-all duration-200 py-1 rounded-[5px] text-center cursor-pointer" on:click={() => { navigatorStore.set(false); setTimeout(() => toggleMode(), 300); }}>Switch Theme</div>
        	<Drawer.Close class="bg-primary/10 hover:bg-primary/15 transition-all duration-200 py-1 rounded-[5px]">Cancel</Drawer.Close>
        </Drawer.Footer>
    </Drawer.Content>
</Drawer.Root>
