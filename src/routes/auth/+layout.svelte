<script lang="ts">
	import { onMount } from 'svelte';
	import '$lib/css/global.css';
	import colors from '$lib/stores/colors';

	onMount(() => {
		let html: HTMLElement | null = document.querySelector('html');
		if (!!html) html.style.backgroundColor = $colors.thinContrast;
	});
</script>

<main>
	<slot />
</main>
