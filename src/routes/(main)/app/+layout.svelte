<script lang="ts">
	import '$lib/css/global.css';
	import SideMenu from '$lib/components/SideMenu.svelte';
	import { onMount } from 'svelte';
	import colors from '$lib/stores/colors';
	import MediaQuery from '@likable-hair/svelte/common/MediaQuery.svelte';
	import HeaderMenu from '$lib/components/HeaderMenu.svelte';
	import Footer from '$lib/components/common/Footer.svelte';

	let sideBarWidth: number = 260,
		collapsedSideBarWidth: number = 90,
		collapsed: boolean;

	onMount(() => {
		let html: HTMLElement | null = document.querySelector('html');
		if (!!html) html.style.backgroundColor = $colors.background;
	});
</script>

<MediaQuery let:mAndDown>
	{#if mAndDown}
		<HeaderMenu />
	{:else}
		<SideMenu bind:width={sideBarWidth} collapsedWidth={collapsedSideBarWidth} bind:collapsed />
	{/if}

	<main
		style:padding-left={!mAndDown
			? collapsed
				? collapsedSideBarWidth + 10 + 'px'
				: sideBarWidth + 10 + 'px'
			: '10px'}
		style:padding-right="10px"
		style:transition="0.2s"
		style:padding-top={mAndDown ? '5px' : '40px'}
	>
		<slot />
		<Footer />
	</main>
</MediaQuery>
