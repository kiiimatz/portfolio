<script lang="ts">
	import { onMount, tick } from "svelte"

	let {
		children,
		class: className = "",
		delay = 200,
		duration = 1200
	} = $props()

	let progress = $state(0)

	onMount(async () => {
		await tick()
		setTimeout(() => {
			progress = 100
		}, delay)
	})
</script>

<span
	class={`title ${className}`}
	style="background-position: {progress}% 0%; transition-duration: {duration}ms;"
>
	{@render children()}
</span>

<style>
	.title {
		display: inline-block;
		background: linear-gradient(
			to right,
			var(--color-background) 33%,
			var(--color-primary) 67%
		);
		background-size: 300% 100%;
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
		color: transparent;
		transition-property: background-position;
		transition-timing-function: ease;
	}
</style>
