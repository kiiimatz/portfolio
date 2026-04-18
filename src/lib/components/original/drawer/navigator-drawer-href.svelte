<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import Icon from "@iconify/svelte";
    import { goto } from "$app/navigation";
    const dispatcher = createEventDispatcher();
    function click() {
        dispatcher("click", {})
    }
    let { icon, href = "" } = $props()
</script>

<div on:click={click} class="flex items-center gap-0.5 bg-primary/0 transition-all duration-200 hover:bg-primary/8 rounded-[5px] hover:dark:bg-primary/10 px-2 py-1 cursor-pointer group" on:click={() => goto(href)}>
    <Icon icon={icon} class="text-[18px] mr-[5px] text-primary"/>
    <p class="text-[13px] mt-[2px]"><slot/></p>
    <Icon icon="mingcute:right-fill" class="ml-auto transition-all duration-200 text-primary/60 group-hover:text-primary/100"/>
</div>
