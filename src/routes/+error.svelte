<script lang="ts">
	import '$lib/css/global.css';
	import { page } from '$app/stores';
	import LinkButton from '$lib/components/LinkButton.svelte';
	import { goto } from '$app/navigation';

	let mapper: Record<number, string> = {
		404: 'Non abbiamo trovato la pagina che cercavi 😥'
	};

	$: message = mapper[$page.status];
</script>

<div
	style:height="100vh"
	style:width="100vw"
	style:display="flex"
	style:flex-direction="column"
	style:align-items="center"
	style:justify-content="center"
>
	<div class="status">{$page.status}</div>
	<div class="message">{message}</div>
	<div>
		<LinkButton on:click={() => goto('/')}>
			<span style:font-size="1.5rem">Home</span>
		</LinkButton>
	</div>
</div>

<style>
	.status {
		font-weight: 700;
		font-size: 6rem;
	}

	.message {
		font-size: 1.5rem;
	}

	:global(body) {
		margin: 0px;
	}

	:global(html) {
		background-color: var(--global-background-color) !important;
	}

	:global(html),
	:global(body) {
		height: 100%;
	}

	:global(input:-webkit-autofill),
	:global(input:-webkit-autofill:hover),
	:global(input:-webkit-autofill:focus),
	:global(input:-webkit-autofill:active) {
		-webkit-box-shadow: 0 0 0 30px var(--global-background-color) inset !important;
	}

	:global(input:-webkit-autofill) {
		-webkit-text-fill-color: var(--global-contrast-color) !important;
	}
</style>
