<script lang="ts">
	//import { createActor } from '../declarations/backend';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { goto, beforeNavigate } from '$app/navigation';
	import { blur } from 'svelte/transition';

	onMount(async () => {
		setTimeout(() => {
			initialized = true;
		}, 1500);
	});

	beforeNavigate(async ({ from, to }) => {});

	let initialized = false;
	import Loader from '$lib/components/common/Loader.svelte';
</script>

{#if initialized}
	<div in:blur={{ delay: 200, duration: 500 }}>
		<slot />
	</div>
{:else}
	<div
		style:display="flex"
		style:align-items="center"
		style:justify-content="center"
		style:width="100vw"
		style:height="100vh"
		out:blur={{ duration: 500 }}
	>
		<Loader />
	</div>
{/if}

<svelte:head>
	<title>CfC - Circular financial Chain</title>
</svelte:head>

<style global>
</style>
