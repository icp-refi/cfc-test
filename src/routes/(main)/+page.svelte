<script lang="ts">
	import type { Box } from '$lib/components/BoxList.svelte';
	import BoxList from '$lib/components/BoxList.svelte';
	import { goto } from '$app/navigation';

	let websiteSections: Box[] = [];

	$: {
		websiteSections = [
			{
				label: 'LogIn Dapp',
				description: 'Sign In with your wallet',
				name: 'login',
				style: {
					width: '400px',
					height: '200px',
					maxWidth: '100%'
				}
			},
			{
				label: 'Web Site',
				name: 'site',
				description: 'Prevent earth pollution',
				style: {
					width: '400px',
					height: '200px',
					maxWidth: '100%'
				}
			},
			{
				label: 'Marketplace',
				name: 'marketplace',
				description: 'Browse in your tokens and choose what you want',
				style: {
					width: '400px',
					height: '200px',
					maxWidth: '100%'
				}
			}
		];

		websiteSections = [...websiteSections];
	}

	function handleBoxClick(event: CustomEvent<{ box: Box }>) {
		if (event.detail.box.name == 'site') goto('/site');
		if (event.detail.box.name == 'login') goto('/auth/login');
		if (event.detail.box.name == 'marketplace') goto('/marketplace');
	}
</script>

<div class="container section-1">
	<div class="row flex-column-center">
		<h1 class="s1-h2">CfC - Circular Financial Chain, a ReFi technology on ICP network</h1>
		<p class="s1-p">Build a Sircle and Fairity Token</p>
		<p-1 class="s1-p1">
			Tokes for social and environmental credit for yourself and others. <p-1 /></p-1
		>
	</div>
	<div class="it-btn-container">
		<div style:margin="50px" style:padding-bottom="50px" style:max-width="1800px">
			<BoxList boxes={websiteSections} on:box-click={handleBoxClick} />
		</div>
	</div>
</div>

<style>
	p {
		font-size: 22px;
		line-height: 1.2;
		color: #97999b;
		margin-bottom: 25px;
	}

	.section-1 {
		display: flex;

		min-height: 100vh;
		max-width: 100vw;
		display: flex;
		justify-content: center;
		align-items: center;
		background-image: url('/src/lib/assets/green home.jpg');
		opacity: 0.7;
	}

	.s1-h2 {
		text-align: center;
		max-width: 80vw;
		margin: 0px;
		font-weight: 700;
		font-size: 60px;
		line-height: 52px;
		color: azure;

		letter-spacing: 0.03em;
	}

	.s1-p {
		text-align: center;
		color: azure;
		max-width: 80vw;
		margin: 0px;
		font-weight: 300;
		font-size: 42px;
		line-height: 52px;
		letter-spacing: 0.03em;
	}
	.s1-p1 {
		text-align: center;
		color: azure;
		max-width: 80vw;
		margin: 0px;
	}

	.flex-column-center {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.it-btn-container {
		width: fit-content;
	}
</style>
