<script>
	import Section from '$lib/components/Section.svelte';
</script>

<body>
	<div class="container">
		<div class="box" />
		<div class="box overlay">
			<Section />
		</div>
	</div>
</body>

<style>
	.container {
		width: 80vw;
		height: 85vh;
		position: relative;
		margin: 30px;
	}
	.box {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		opacity: 0.7;

		background: #d6efff;

		border-radius: 20px;
	}
	.overlay {
		z-index: 9;
		margin: 30px;
		border-radius: 20px;
		background: #71b087;
		text-align: center;
	}
</style>
