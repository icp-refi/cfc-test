<script lang="ts">
	import TextField from '@likable-hair/svelte/forms/Textfield.svelte';
	import colors from '$lib/stores/colors';

	export let label: string = '',
		placeholder: string = '',
		value: string | number = '',
		type: 'text' | 'number' = 'text',
		error: boolean = false,
		maxWidth: string | undefined = undefined,
		disabled: boolean = false,
		readonly: boolean = false,
		valueRequired: boolean = false,
		borderColor: string | undefined = undefined;

	$: localError = (valueRequired && value?.toString().length == 0) || error;
</script>

<TextField
	height="37px"
	{label}
	{placeholder}
	{maxWidth}
	bind:value
	{type}
	backgroundColor="transparent"
	paddingBottom="8px"
	paddingTop="6px"
	paddingRight="10px"
	paddingLeft="10px"
	fontSize="1rem"
	variant="boxed"
	textColor={$colors.contrast}
	color={$colors.lightContrast}
	borderColor={localError ? 'red' : !!borderColor ? borderColor : $colors.thinContrast}
	focusBorderColor={localError ? 'red' : $colors.primary}
	focusedBoxShadow="rgb(149 157 165 / 20%) 2px 2px 10px"
	borderWeight="1px"
	{disabled}
	{readonly}
	on:input
	on:focus
>
	<svelte:fragment slot="prepend-inner">
		<slot name="prepend-inner" />
	</svelte:fragment>
	<svelte:fragment slot="append-inner">
		<slot name="append-inner" />
	</svelte:fragment>
</TextField>
