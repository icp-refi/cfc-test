<script lang="ts">
	import SectionContainer from '$lib/components/SectionContainer.svelte';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<div class="container section-1">
	<div class="row flex-column-center">
		<h1 class="s1-h2">Circular Financial Chain</h1>
		<p class="s1-p0">ReFi technology on ICP network</p>
		<p class="s1-p">Build a Sircle and Fairity Token</p>
		<p class="s1-p1">Tokes for social and environmental credit for yourself and others.</p>
	</div>
</div>
<div class="container section-2">
	<div class="row flex-column-center">
		<h2 class="s2-h2">Products and Services</h2>

		<p>
			Tokes for social and environmental credit for yourself and others. <p-1>
				<SectionContainer />
			</p-1>
		</p>
	</div>
</div>

<div class="container section-2">
	<div class="row flex-column-center">
		<h2 class="s2-h2">Community</h2>
		<p>Build a Sircle and Fairity Token</p>
		<p-1>
			Tokes for social and environmental credit for yourself and others. <p-1>
				<div class="it-btn-container" />
			</p-1></p-1
		>
	</div>
</div>
<div class="container section-2">
	<div class="row flex-column-center">
		<h2 class="s2-h2">Mission</h2>
		<p>Build a Sircle and Fairity Token</p>
		<p-1>
			Tokes for social and environmental credit for yourself and others. <p-1>
				<div class="it-btn-container" />
			</p-1></p-1
		>
	</div>
</div>
<div class="container section-2">
	<div class="row flex-column-center">
		<h2 class="s2-h2">About us</h2>
		<p>Build a Sircle and Fairity Token</p>
		<p-1>
			Tokes for social and environmental credit for yourself and others. <p-1>
				<div class="it-btn-container" />
			</p-1></p-1
		>
	</div>
</div>

<style>
	.section-1 {
		display: flex;

		min-height: 100vh;
		max-width: 100vw;
		display: flex;
		justify-content: center;
		align-items: center;
		background-image: url('/src/lib/assets/green home.jpg');
	}

	.section-2 {
		display: flex;
		margin-top: 10%;
		min-height: 100vh;
		max-width: 100vw;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.s1-h2 {
		text-align: center;
		max-width: 80vw;
		margin: 0px;
		font-weight: 700;
		font-size: 113px;
		line-height: 72px;
		color: azure;

		letter-spacing: 0.03em;
	}

	.s2-h2 {
		text-align: center;
		max-width: 80vw;
		margin: 0px;
		font-weight: 700;
		font-size: 92px;
		line-height: 52px;
		color: rgb(150, 193, 193);

		letter-spacing: 0.03em;
	}
	.s1-p0 {
		text-align: center;
		color: azure;
		max-width: 80vw;
		margin: 60px;
		font-weight: 600;
		font-size: 72px;
		line-height: 52px;
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
