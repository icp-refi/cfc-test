<script lang="ts">
	import Button from '@likable-hair/svelte/buttons/Button.svelte';
	import colors from '$lib/stores/colors';
	import { createEventDispatcher } from 'svelte';

	export let type: 'impact' | 'standard' = 'impact',
		loading: boolean = false,
		disabled: boolean = false,
		width: string = 'auto',
		height: string = '20px',
		padding: string = '8px 10px 8px 10px',
		standardBorder: boolean = true;

	let dispatch = createEventDispatcher<{
		click: {
			nativeEvent: MouseEvent;
		};
	}>();

	function handleClick(event: CustomEvent<{ nativeEvent: MouseEvent }>) {
		if (!disabled && !loading)
			dispatch('click', {
				nativeEvent: event.detail.nativeEvent
			});
	}

	let backgroundColor: string;
	$: if (type == 'impact') {
		backgroundColor = $colors.primary;
	} else {
		backgroundColor = 'transparent';
	}

	$: textColor = type == 'impact' ? $colors.background : $colors.primary;
	$: border = type == 'standard' && standardBorder ? `1px solid ${$colors.primary}` : undefined;
</script>

<div style:opacity={disabled ? '50%' : '100%'}>
	<Button
		on:click={handleClick}
		{width}
		{height}
		{backgroundColor}
		hoverBackgroundColor={backgroundColor}
		{border}
		color={textColor}
		{padding}
		loaderHeight="20px"
		bind:loading
		cursor={disabled ? 'not-allowed' : 'pointer'}
	>
		<div
			style:display="flex"
			style:align-items="center"
			style:justify-content="center"
			style:height="100%"
			style:font-size="1rem"
			style:white-space="nowrap"
		>
			<slot />
		</div>
	</Button>
</div>
