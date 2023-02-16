<script lang="ts">
	import '$lib/css/global.css';
	import { onMount } from 'svelte';
	import colors from '$lib/stores/colors';
	import MediaQuery from '@likable-hair/svelte/common/MediaQuery.svelte';
	import type { NavigationItem } from '$lib/components/NavigationMenu.svelte';
	import NavigationMenu from '$lib/components/NavigationMenu.svelte';

	let navigationItems: NavigationItem[] = [];
	let sideBarWidth: number = 0,
		collapsedSideBarWidth: number = 0,
		collapsed: boolean;

	onMount(() => {
		let html: HTMLElement | null = document.querySelector('html');
		if (!!html) html.style.backgroundColor = $colors.background;
	});

	$: {
		navigationItems = [
			{ title: 'About Us', name: 'about-us' },
			{ title: 'Community', name: 'community' },
			{ title: 'Mission', name: 'mission' },
			{ title: 'Product and Services', name: 'products' }
		];
		navigationItems = [...navigationItems];
	}
</script>

<MediaQuery let:mAndDown>
	<NavigationMenu items={navigationItems} />

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
	</main>
</MediaQuery>
