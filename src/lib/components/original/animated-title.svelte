<script lang="ts">
	let {
		children,
		class: className = "",
		delay = 200,
		duration = 1200
	} = $props()
</script>

<span
	class={`title ${className}`}
	style="--delay: {delay}ms; --duration: {duration}ms;"
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
		background-position: 0% 0%;
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
		color: transparent;
		animation: reveal var(--duration, 1200ms) ease var(--delay, 200ms) forwards;
	}

	@keyframes reveal {
		from { background-position: 0% 0%; }
		to   { background-position: 100% 0%; }
	}
</style>
