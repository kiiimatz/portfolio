<script lang="ts">
    import { dateConverter } from "$lib/utils";
    import Icon from "@iconify/svelte";
    import Badge from "$lib/components/ui/badge/badge.svelte";
    import MarkdownViewer from "$lib/components/original/markdown-viewer.svelte";

    let { data } = $props();
    const { blog } = data;
</script>

<div class="min-h-screen max-h-max pb-8 w-full flex justify-center font-writer-regular">
    <div class="w-full px-6 md:px-0 md:w-[35rem] mt-[8rem] sm:mt-[10rem]">
        <div class="leading-[1.5rem]">
            <a href="/blogs" class="mb-4 group w-max flex items-center gap-1 text-primary/60 relative after:absolute after:bottom-[2px] after:transition-all after:duration-200 after:right-0 hover:after:left-0 after:w-[0%] hover:after:w-[100%] after:h-[1px] after:bg-primary/60 cursor-pointer">
                <Icon icon="bi:arrow-left"/>
                <p class="text-[12px]">Back to Blogs</p>
            </a>
            <div class="flex items-center justify-between">
                <p class="text-[25px] font-googlesans-bold">{blog.title}</p>
                <div class="flex items-center justify-center gap-1 text-primary/30 mr-0.5 h-[1.4rem] pt-[1px] px-2 pr-[0.6rem] rounded-full bg-primary/5 border-primary/10 border-[1px]">
                    <Icon icon="fluent:eye-16-regular"/>
                    <p class="text-[11px]">{blog.view}</p>
                </div>
            </div>
            <p class="text-primary text-opacity-50">{blog.description}</p>
            <div class="flex items-center gap-1 mt-1">
                {#each (blog.tags.split(",")) as tag}
                    <Badge class="px-1.5 rounded-[3px] py-0 text-[10px] h-5">{tag}</Badge>
                {/each}
            </div>
            <div class="mt-5 leading-[1rem]">
                <p class="text-[13px]">by kiiimatz</p>
                <p class="text-primary text-opacity-50 text-[11px]">{dateConverter(blog.createdAt)}</p>
            </div>
        </div>
        <div class="w-full h-[1px] bg-border my-6"/>
        <MarkdownViewer body={blog.body}/>
    </div>
</div>
