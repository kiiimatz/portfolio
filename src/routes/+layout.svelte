<script lang="ts">
	import './layout.css';
	import { ModeWatcher } from 'mode-watcher';
	import '@iconify/iconify';
	import favicon from '$lib/assets/favicon.svg';
    import Navigator from '$lib/components/original/navigator.svelte';
    import NavigatorDrawer from '$lib/components/original/drawer/navigator-drawer.svelte';
    import EmailDrawer from '$lib/components/original/drawer/email-drawer.svelte';
    import Pagenation from '$lib/components/original/pagenation.svelte';
    import FooterContent from '$lib/components/original/footer-content.svelte';
    import { pagenationStore } from '$lib/store';
    import { Toaster } from '$lib/components/ui/sonner/index.js';
	import '$lib/icons';
	let { children, data } = $props();

	$effect(() => { pagenationStore.set(data.pathname) })

	// fontrum([
	//   { class: "writer", font: "/fonts/writer-regular.ttf" },
	//   { class: "writer-mx", font: "/fonts/writer-medium.ttf" },
	//   { class: "sans", font: "/fonts/googlesans-medium.ttf" },
	//   { class: "sans-bx", font: "/fonts/googlesans-bold.ttf" },
 //    ]);
</script>

<ModeWatcher/>
<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<Toaster toastOptions={{ class: 'bg-primary/20 backdrop-blur-2xl border-primary/10 rounded-[2px]' }}/>
<div class="sans text-[15px] tracking-right min-h-screen h-max" data-vaul-drawer-wrapper>
    <NavigatorDrawer/>
    <EmailDrawer/>
    <Navigator/>
    <Pagenation pathname={data.pathname}>
        {@render children()}
    </Pagenation>
    <FooterContent/>
</div>
