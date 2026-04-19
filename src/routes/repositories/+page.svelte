<script lang="ts">
    import AnimatedTitle from "$lib/components/original/animated-title.svelte";
    import DelayContent from "$lib/components/original/delay-content.svelte";
    import Badge from "$lib/components/ui/badge/badge.svelte";
    import Icon from "@iconify/svelte";

    let { data } = $props();
</script>

<div class="flex justify-center w-full h-screen font-writer-regular">
    <div class="w-full md:w-max">
        <div class="text-center mt-[7rem] md:mt-[12rem] flex flex-col items-center leading-[2.1rem]">
            <DelayContent delay={0}>
                <AnimatedTitle class="text-[30px] sans">Repositories</AnimatedTitle>
            </DelayContent>
            <DelayContent delay={80}>
                <p class="text-primary/40 text-[12px] md:text-[13px]">Projects that I created or maintaing.</p>
            </DelayContent>
            <DelayContent delay={160}>
                <a href="https://github.com/hideko-dev?tab=repositories" class="mt-1 group flex items-center gap-1.5 w-max border-[1px] text-primary/80 bg-primary/8 border-border transition-all duration-200 hover:bg-primary/20 hover:border-primary/50 px-3 h-8 rounded-[3px] text-[14px]">
                    <p class="mt-[4px]">Repositories</p>
                    <Icon icon="lucide:move-right" class="transition-all ml-0 group-hover:ml-1"/>
                </a>
            </DelayContent>
        </div>
        <div class="grid grid-cols-1 w-full px-4 md:px-0 md:grid-cols-2 md:w-[45rem] lg:grid-cols-3 lg:w-[55rem] xl:grid-cols-4 gap-4 mt-6 xl:w-[70rem]" style="grid-template-rows: repeat(auto-fill, auto)">
            {#each data.repositories as ext, index}
                <DelayContent delay={160+index*50} href={ext.url} class="border-[1px] border-border rounded-[5px] py-3 px-3 leading-[16px] cursor-pointer transition-all duration-150 hover:border-primary/50 hover:bg-primary/20 group">
                    <p class="text-[15px] whitespace-nowrap overflow-hidden text-ellipsis pr-8">{ext.title}</p>
                    <p class="text-[11px] text-primary/40 whitespace-nowrap overflow-hidden text-ellipsis">{ext.description}</p>
                    <div class="flex items-center gap-1 mt-[1px]">
                        {#each (ext.tags.split(",")) as tag}
                            <Badge class="px-1.5 rounded-[3px] py-0 text-[10px]">{tag}</Badge>
                        {/each}
                    </div>
                </DelayContent>
            {/each}
        </div>
    </div>
</div>
