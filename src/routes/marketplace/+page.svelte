<script lang="ts">
	import type { Product } from '$lib/components/Marketplace.svelte';
	import Marketplace from '$lib/components/Marketplace.svelte';

	import { goto } from '$app/navigation';

	let products: Product[] = [];

	$: {
		products = [
			{ id: 1, name: 'Product 1', label: 'dettaglio', price: 9.99 },
			{ id: 2, name: 'Product 2', label: 'dettaglio', price: 19.99 },
			{ id: 3, name: 'Product 3', label: 'dettaglio', price: 29.99 },
			{ id: 4, name: 'Product 4', label: 'dettaglio', price: 29.99 },
			{ id: 5, name: 'Product 5', label: 'dettaglio', price: 29.99 },
			{ id: 6, name: 'Product 6', label: 'dettaglio', price: 29.99 }
		];

		products = [...products];
	}

	function handleProductClick(event: CustomEvent<{ product: Product }>) {
		if (event.detail.product.name == 'home') goto('/');
		if (event.detail.product.name == 'registry') goto('/registry');
		if (event.detail.product.name == 'registration') goto('/registration');
		if (event.detail.product.name == 'monitor') goto('/monitor');
		if (event.detail.product.name == 'settings') goto('/settings/general');
	}
</script>

<div style:margin-top="50px" style:max-width="900px">
	<Marketplace {products} on:product-click={handleProductClick} />
</div>
