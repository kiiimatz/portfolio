<script lang="ts">
    let { children } = $props()
</script>

<div class="flex items-center gap-2 mb-[2px] mt-[8px]">
    <p class="text-[11px] text-primary/70 ml-1">{@render children()}</p>
    <div class="w-full h-[1px] bg-primary/40"/>
</div>
