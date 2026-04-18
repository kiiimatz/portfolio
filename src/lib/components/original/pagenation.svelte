<script>
    import { fly } from 'svelte/transition'
    let { pathname, children } = $props()
    const between = $state(200)
</script>


{#key pathname}
    <div in:fly={{ y: 3, duration: between, delay: between }} out:fly={{ y: 3, duration: between }} class="h-max">
        {@render children()}
    </div>
{/key}
