<script lang="ts">
    import Icon from "@iconify/svelte"
    import { statusConfig, type Status } from "$lib/types/status.types"

    function getYear(): number {
        return new Date().getFullYear()
    }

    const status: Status = "ALLNORMAL"
</script>

<div class="w-full justify-center items-center flex flex-col writer text-[12px] h-max py-2 text-primary/40 gap-0.5">

    <p>© {getYear()} kiiimatz. All Rights Reserved.</p>

    <a href="https://status.kiiimatz.com" class="flex items-center justify-center {statusConfig[status].color} gap-1 transition-all duration-200 cursor-pointer bg-primary/0 hover:bg-primary/5 px-2 py-1 rounded-[3px]">
        <Icon icon="pixelarticons:database" class="text-[18px] mb-[1px]"/>
        <p class="uppercase mt-[3px]">{statusConfig[status].label}</p>
    </a>
</div>
