<script lang="ts">
	export let value: string | undefined = undefined,
		label: string | undefined = undefined,
		placeholder: string = '',
		name: string,
		type: 'password' | 'text' | 'number' = 'text',
		readonly: boolean = false,
		error: boolean = false,
		disabled: boolean = false;

	import StandardTextfield from './common/StandardTextfield.svelte';
	import PasswordTextfield from './PasswordTextfield.svelte';
</script>

<label style:font-weight="500" style:margin-left="3px" for={name}>{label || ''}</label>
<div style:margin-top="5px">
	{#if type == 'text' || type == 'number'}
		<StandardTextfield
			bind:value
			label={placeholder}
			{type}
			{readonly}
			{error}
			{disabled}
			on:input
			on:focus
		>
			<svelte:fragment slot="append-inner">
				<slot name="append-inner" />
			</svelte:fragment>
		</StandardTextfield>
	{:else if type == 'password'}
		<PasswordTextfield bind:value label={placeholder} {error} on:input on:focus />
	{/if}
</div>
