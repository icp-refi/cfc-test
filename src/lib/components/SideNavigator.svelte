<script lang="ts" context="module">
	export type MenuItem = {
		title: string;
		icon: string;
		name: string;
	};
</script>

<script lang="ts">
	export let items: MenuItem[] = [],
		selected: string | undefined = undefined,
		collapsed: boolean = false,
		paddingLeft: string = '30px',
		menuFontSize: string = '1.3rem';

	import Icon from '@likable-hair/svelte/media/Icon.svelte';
	import colors from '$lib/stores/colors';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher<{
		click: {
			nativeEvent: MouseEvent;
			item: MenuItem;
		};
	}>();

	function handleItemClick(item: MenuItem, event: MouseEvent) {
		dispatch('click', {
			item: item,
			nativeEvent: event
		});
	}
</script>

<div style:display="flex" style:flex-direction="column" style:gap="20px">
	{#each items as item}
		<div
			style:display="flex"
			style:align-items="center"
			style:padding-left={paddingLeft}
			style:cursor="pointer"
			on:click={(event) => handleItemClick(item, event)}
			on:keypress
		>
			<div style:margin-right="30px">
				<Icon name={item.icon} color={selected == item.name ? $colors.primary : $colors.contrast} />
			</div>
			{#if !collapsed}
				<div
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
