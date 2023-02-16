<script lang="ts" context="module">
	export type Box = {
		name: string;
		label: string;
		description: string;
		style?: {
			width?: string;
			height?: string;
			maxWidth?: string;
			minWidth?: string;
			background?: string;
		};
	};
</script>

<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Icon from '@likable-hair/svelte/media/Icon.svelte';
	import colors from '$lib/stores/colors';
	import type { Tracing } from '@playwright/test';

	export let boxes: Box[],
		gap: string = '0px';

	let dispatch = createEventDispatcher<{
		'box-click': {
			box: Box;
		};
	}>();

	function handleBoxClick(event: MouseEvent, box: Box) {
		dispatch('box-click', {
			box
		});
	}
</script>

<div style:gap class="box-list">
	{#each boxes as box}
		<div
			style:background-color={$colors.thinContrast}
			style:padding="10px"
			style:font-weight="600"
			style:font-size="1.6rem"
			style:border-radius="5px"
			style:display="flex"
			style:cursor="pointer"
			style:width={box.style?.width}
			style:height={box.style?.height}
			style:max-width={box.style?.maxWidth}
			style:min-width={box.style?.minWidth}
			style:background-image={box.style?.background}
			class="div-hover"
			on:click={(event) => handleBoxClick(event, box)}
		>
			<div style:flex-grow="1">
				{box.label}
				<div>
					<p style:font-size="1.2rem">
						{box.description}
					</p>
				</div>
			</div>
			<div style:margin-left="10px">
				<Icon name="mdi-arrow-right" />
			</div>
		</div>
	{/each}
</div>

<style>
	.box-list {
		display: flex;
		flex-wrap: wrap;
		padding: 0;
	}

	.div-hover {
		margin: 2em auto;
		width: 100px;
		color: #3b3b3b;
		font-size: 14px;
		box-sizing: border-box;
		font-weight: bold;
		padding: 1em 0.5em;
		cursor: pointer;
	}

	/*background style */

	.div-hover {
		background-image: url('');
		background: linear-gradient(#c6ffe3, #ffffff 50%, #e3e992 50%, #7ac89a);
		background-size: 100% 200%;
		/*trasition effect for background*/
		transition: background 0.4s;
	}

	.div-hover:hover {
		background-position: 100% 100%;
	}
</style>
