<script lang="ts" context="module">
	export type NavigationItem = {
		title: string;
		name: string;
	};
</script>

<script lang="ts">
	import { goto } from '$app/navigation';

	export let items: NavigationItem[] = [],
		selected: string | undefined = undefined,
		collapsed: boolean = false,
		paddingLeft: string = '30px',
		menuFontSize: string = '1.9rem';

	import Icon from '@likable-hair/svelte/media/Icon.svelte';
	import colors from '$lib/stores/colors';
	import { createEventDispatcher } from 'svelte';
	import logo from '$lib/assets/logo_2.png';

	const dispatch = createEventDispatcher<{
		click: {
			nativeEvent: MouseEvent;
			item: NavigationItem;
		};
	}>();

	function handleItemClick(item: NavigationItem, event: MouseEvent) {
		dispatch('click', {
			item: item,
			nativeEvent: event
		});
	}

	function handleLogInClick() {
		goto('/app');
	}
</script>

<div class="topnav" style:gap="20px">
	<img
		style:margin-left={collapsed ? '20px' : '30px'}
		style:margin-bottom=""
		style:transition="0.2s"
		width={collapsed ? 100 : 140}
		height="120"
		style:bottom="0px"
		style:left={collapsed ? '20px' : '50px'}
		style:height={collapsed ? '50px' : '182px'}
		style:width={collapsed ? '30px' : '182px'}
		style:object-fit="cover"
		style:z-index="0"
		src={logo}
		alt="logo"
	/>
	{#each items as item}
		<div
			class="topnav-right"
			style:cursor="pointer"
			on:click={(event) => handleItemClick(item, event)}
			on:keypress
		>
			{#if !collapsed}
				<div
					style:margin-right="30px"
					style:margin-top="30px"
					style:font-size={menuFontSize}
					style:font-weight="400"
					style:color={selected == item.name ? $colors.primary : $colors.contrast}
				>
					{item.title}
				</div>
			{/if}
		</div>
	{/each}
</div>

<style>
	.topnav {
		overflow: hidden;
		display: list-item;
		justify-content: space-between;
		/* position: fixed; */
	}
	.topnav-right {
		float: right;
	}
</style>
