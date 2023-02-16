<script lang="ts">
	import colors from '$lib/stores/colors';
	import Icon from '@likable-hair/svelte/media/Icon.svelte';
	import { createEventDispatcher } from 'svelte';
	let dispatch = createEventDispatcher<{
		change: {
			collapsed: boolean;
		};
	}>();

	export let collapsed: boolean = false,
		openedIconName: string = 'mdi-chevron-left',
		collapsedIconName: string = 'mdi-chevron-right',
		iconSize: number = 12,
		weight = '1px',
		radius = '0.5px',
		marginTop: string | undefined = '10px',
		marginBottom: string | undefined = '10px',
		marginLeft: string | undefined = '5px',
		marginRight: string | undefined = '5px';

	let buttonHeight: number;

	function handleCollapseClick() {
		collapsed = !collapsed;
		dispatch('change', { collapsed });
	}
</script>

<div
	style:display={'flex'}
	style:margin-right={marginRight}
	style:margin-left={marginLeft}
	style:margin-top={marginTop}
	style:margin-bottom={marginBottom}
	style:align-items={'center'}
>
	<div
		style:background-color={$colors.thinContrast}
		style:border-radius={radius}
		style:height={weight}
		style:flex-grow={1}
	/>
	<div
		style:border-radius={buttonHeight + 'px'}
		style:border="1px solid"
		style:border-color={$colors.thinContrast}
		bind:clientHeight={buttonHeight}
		style:width={buttonHeight + 'px'}
		style:display="flex"
		style:justify-content="center"
		style:cursor="pointer"
		on:click={handleCollapseClick}
	>
		<Icon name={collapsed ? collapsedIconName : openedIconName} size={iconSize} />
	</div>
</div>
