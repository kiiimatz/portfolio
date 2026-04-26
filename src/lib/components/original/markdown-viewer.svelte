<script lang="ts">
    import { onMount } from "svelte";

    let { body } = $props();

    onMount(() => {
        document.querySelectorAll('.md .code-block').forEach((block) => {
            const code = block.querySelector('code');
            if (!code) return;

            if (block.querySelector('.copy-btn')) return;

            const btn = document.createElement('button');
            btn.className = 'copy-btn';

            btn.innerHTML = `
                <span class="icon-copy">
                    <span class="iconify" data-icon="boxicons:copy-filled"></span>
                </span>
                <span class="icon-check" style="display:none;">
                    <span class="iconify" data-icon="material-symbols:check-rounded"></span>
                </span>
            `;

            block.appendChild(btn);

            const copyEl = btn.querySelector('.icon-copy') as HTMLElement;
            const checkEl = btn.querySelector('.icon-check') as HTMLElement;

            btn.addEventListener('click', async () => {
                await navigator.clipboard.writeText(code.textContent || '');

                copyEl.style.display = 'none';
                checkEl.style.display = 'inline';

                setTimeout(() => {
                    copyEl.style.display = 'inline';
                    checkEl.style.display = 'none';
                }, 1500);
            });
        });
    });
</script>

<div class="md sans">
    {@html body}
</div>

<style>
    /* =========================
       基本
    ========================= */

    :global(.md div) {
        outline: none;
        border: none;
    }

    :global(.md h1) {
        font-size: 30px;
        font-weight: 700;
        line-height: 1;
        padding-block: 7px;
    }
    :global(.md h2) {
        font-size: 25px;
        font-weight: 700;
        line-height: 1;
        padding-block: 7px;
    }
    :global(.md h3) {
        font-size: 20px;
        font-weight: 700;
    }
    :global(.md h4) {
        font-size: 18px;
        font-weight: 700;
    }

    :global(.md img[src]) {
        border-radius: 5px;
        margin-block: 5px;
    }

    :global(.md p:empty) {
        height: 1.2em;
    }

    /* =========================
       コードブロック
    ========================= */

    :global(.md .code-block) {
        margin-block: 12px;
        position: relative;
    }

    :global(.md .code-header) {
        display: flex;
        justify-content: space-between;
        align-items: center;

        height: 30px;
        padding: 0 12px;

        font-size: 12px;
        color: var(--prime3);

        background: color-mix(in srgb, var(--primary) 8%, transparent);
        border: 1px solid color-mix(in srgb, var(--primary) 10%, transparent);
        border-bottom: none;

        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
    }

    :global(.md pre) {
        background: color-mix(in srgb, var(--primary) 5%, transparent);
        border: 1px solid color-mix(in srgb, var(--primary) 10%, transparent);

        margin: 0;
        padding: 12px 18px;

        border-radius: 0 0 8px 8px;
        overflow-x: auto;
    }

    :global(.md pre code) {
        display: block;
        font-family: monospace;
        font-size: 14px;
        line-height: 1.6;
    }

    :global(.md pre.shiki) {
        background: color-mix(in srgb, var(--primary) 5%, transparent) !important;
    }

    /* =========================
       コピーボタン（修正版）
    ========================= */

    :global(.md .copy-btn) {
        position: absolute;

        /* 🔥 header避ける */
        top: 40px;
        right: 10px;

        width: 28px;
        height: 28px;

        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 6px;
        border: 1px solid color-mix(in srgb, var(--primary) 15%, transparent);

        background: color-mix(in srgb, var(--primary) 10%, transparent);
        backdrop-filter: blur(4px);
        color: color-mix(in srgb, var(--primary) 70%, transparent);

        opacity: 0;
        transform: translateY(-4px);

        transition: all 0.2s ease;
        cursor: pointer;
    }

    :global(.md .code-block:hover .copy-btn) {
        opacity: 1;
        transform: translateY(0);
    }

    :global(.md .copy-btn .iconify) {
        width: 16px;
        height: 16px;
        color: var(--prime3);
    }

    /* =========================
       その他
    ========================= */

    :global(.md ul li) {
        position: relative;
        display: flex;
    }
    :global(.md ul li):before {
        content: "";
        width: 15px;
        height: 20px;
    }
    :global(.md ul li):after {
        position: absolute;
        content: "";
        left: 0;
        top: 40%;
        width: 5px;
        height: 5px;
        border-radius: 100px;
        background-color: var(--prime3);
    }

    :global(.md hr) {
        border: none;
        margin-block: 8px;
        height: 2px;
        border-radius: 100px;
        background: var(--prime2);
    }

    :global(.md table) {
        background: var(--prime4);
        border-radius: 6px;
        margin-block: 5px;
        border-spacing: 0;
        border-collapse: separate;
        border: 1px solid var(--prime2);
        overflow: hidden;
    }
    :global(.md th) {
        border-left: 1px solid var(--prime2);
        padding: 3px 10px;
        background: var(--prime);
    }
    :global(.md th:first-child) {
        border-left: none;
    }
    :global(.md td) {
        border-top: 1px solid var(--prime2);
        border-left: 1px solid var(--prime2);
        padding: 2px 10px;
    }
    :global(.md td:first-child) {
        border-left: none;
    }

    :global(.md blockquote) {
        background: var(--prime);
        padding-left: 1rem;
        padding-block: 4px;
        border-top-right-radius: 7px;
        border-bottom-right-radius: 7px;
        position: relative;
    }
    :global(.md blockquote):before {
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        width: 4px;
        height: 100%;
        border-radius: 10px;
        background: var(--prime3);
    }
</style>
