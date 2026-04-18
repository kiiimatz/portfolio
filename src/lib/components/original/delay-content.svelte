<script lang="ts">
    import { fly } from "svelte/transition"
    import { onMount } from "svelte"

    let {
		delay = 0,
		class: className = "",
		href = "",
		onClick = () => {},
		children
	} = $props()

    let tmp: boolean = false
    onMount(() => tmp = true)
</script>

{#key tmp}
    {#if href !== ''}
        <a class={className} {href} in:fly={{ duration: 1200, y: 5, delay }} on:click={onClick}>
            {@render children()}
        </a>
    {:else}
        <div class={className} in:fly={{ duration: 1200, y: 5, delay }} on:click={onClick}>
            {@render children()}
        </div>
    {/if}
{/key}
