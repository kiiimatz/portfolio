<script lang="ts">
    import Icon from "@iconify/svelte"
    function getYear(): number {
        return new Date().getFullYear()
    }
</script>

<div class="w-full justify-center items-center flex writer text-[12px] h-8 text-primary/40">
    <div class="flex items-center justify-center text-blue-300 gap-1">
        <Icon icon="pixelarticons:database" class="text-[18px] mb-[3px]"/>
        <p class="uppercase">All systems normal.</p>
    </div>

    <p>© {getYear()} kiiimatz. All Rights Reserved.</p>
</div>
