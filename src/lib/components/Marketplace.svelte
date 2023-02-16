<!-- Marketplace.svelte -->
<script lang="ts" context="module">
	export type Product = {
		id: number;
		name: string;
		label: string;
		price: number;
		style?: {
			width?: string;
			height?: string;
			maxWidth?: string;
			minWidth?: string;
		};
	};
</script>

<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Icon from '@likable-hair/svelte/media/Icon.svelte';
	import colors from '$lib/stores/colors';

	export let products: Product[],
		gap: string = '15px';

	let dispatch = createEventDispatcher<{
		'product-click': {
			product: Product;
		};
	}>();

	function handleProductClick(event: MouseEvent, product: Product) {
		dispatch('product-click', {
			product
		});
	}
</script>

<h1>Marketplace</h1>

{#each products as product}
	<div class="product">
		<div class="product-name">{product.name}</div>
		<div class="product-price">${product.price}</div>
	</div>
{/each}

<div style:gap class="product">
	{#each products as product}
		<div
			class="product-name"
			style:background-color={$colors.thinContrast}
			style:padding="10px"
			style:font-weight="600"
			style:font-size="1.2rem"
			style:border-radius="5px"
			style:display="flex"
			style:cursor="pointer"
			style:width={product.style?.width}
			style:height={product.style?.height}
			style:max-width={product.style?.maxWidth}
			style:min-width={product.style?.minWidth}
			on:click={(event) => handleProductClick(event, product)}
		>
			<div style:flex-grow="1" class="product-price">
				{product.label}
			</div>
			<div style:margin-left="10px">
				<Icon name="mdi-arrow-right" />
			</div>
		</div>
	{/each}
</div>

<style>
	body {
		font-family: Arial, sans-serif;
		padding: 20px;
	}

	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 40px;
	}

	h1 {
		font-size: 36px;
		font-weight: bold;
		margin: 0;
	}

	.search-form {
		display: flex;
		align-items: center;
	}

	.search-input {
		width: 400px;
		height: 40px;
		padding: 10px;
		font-size: 16px;
		border-radius: 20px;
		border: 1px solid #ddd;
		margin-right: 20px;
	}

	.search-button {
		width: 120px;
		height: 40px;
		background-color: green;
		color: white;
		border: none;
		border-radius: 20px;
		font-size: 16px;
		cursor: pointer;
	}

	.products {
		display: flex;
		flex-wrap: wrap;
	}

	.product {
		width: calc(33.33% - 20px);
		height: 400px;
		background-color: #ddd;
		margin: 10px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
	}

	.product-name {
		font-size: 24px;
		font-weight: bold;
		margin-top: 20px;
	}

	.product-price {
		font-size: 18px;
		color: green;
		margin-top: 20px;
	}

	.product-image {
		width: 200px;
		height: 200px;
		margin-top: 20px;
		object-fit: cover;
	}
</style>
