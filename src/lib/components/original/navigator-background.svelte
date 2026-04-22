<script lang="ts">
    // Linear blur distribution: adjacent layers differ by ~1px → imperceptible steps.
    // Each layer owns an exclusive thin band with narrow fade edges.
    // No wide overlaps → no backdrop-filter compounding.

    const N     = 20;   // layers
    const MAX_B = 20;   // px at top
    const MIN_B = 0;    // px at bottom

    const layers = Array.from({ length: N }, (_, i) => {
        const t    = i / (N - 1);                              // 0 = top, 1 = bottom
        const blur = +(MAX_B - t * (MAX_B - MIN_B)).toFixed(2); // linear 20 → 0

        // Exclusive band in 0–100% space
        const bandStart = (i / N) * 100;
        const bandEnd   = ((i + 1) / N) * 100;
        const fade      = (bandEnd - bandStart) * 0.15;        // 15% of band width

        let mask: string;
        if (i === 0) {
            mask = `linear-gradient(to bottom,black 0%,black ${(bandEnd - fade).toFixed(3)}%,transparent ${bandEnd.toFixed(3)}%)`;
        } else if (i === N - 1) {
            mask = `linear-gradient(to bottom,transparent ${bandStart.toFixed(3)}%,black ${(bandStart + fade).toFixed(3)}%,black 100%)`;
        } else {
            mask = `linear-gradient(to bottom,transparent ${bandStart.toFixed(3)}%,black ${(bandStart + fade).toFixed(3)}%,black ${(bandEnd - fade).toFixed(3)}%,transparent ${bandEnd.toFixed(3)}%)`;
        }

        return { blur, mask };
    });
</script>

<div class="absolute inset-x-0 top-0 bottom-[-24px] overflow-hidden pointer-events-none" aria-hidden="true">
    {#each layers as { blur, mask }}
        <div
            class="absolute inset-0"
            style="backdrop-filter:blur({blur}px);-webkit-backdrop-filter:blur({blur}px);mask-image:{mask};-webkit-mask-image:{mask}"
        ></div>
    {/each}
</div>
