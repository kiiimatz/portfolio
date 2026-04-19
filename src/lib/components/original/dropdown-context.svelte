<script lang="ts">
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
    import Icon from "@iconify/svelte"

    let open = $state(false)
    let { title, children } = $props()
</script>

<DropdownMenu.Root bind:open>
    <DropdownMenu.Trigger class="flex items-center gap-0.5 transition-all duration-200 px-2.5 py-1 rounded-[5px] cursor-pointer {open?'bg-primary/5 dark:bg-primary/10':'bg-primary/0'} hover:bg-primary/5 hover:dark:bg-primary/10">
        <p class="mt-[2px] text-[13px]">{title}</p>
        <Icon icon="iconamoon:arrow-down-2" class="transition-all duration-200" style="rotate: {open ? 180 : 0}deg"/>
    </DropdownMenu.Trigger>
    <DropdownMenu.Content class="writer-mx mr-2" preventScroll={false}>
        <DropdownMenu.Group>
            {@render children()}
        </DropdownMenu.Group>
    </DropdownMenu.Content>
</DropdownMenu.Root>
