<script lang="ts">
	import colors from '$lib/stores/colors';
	import Body from './Body.svelte';
	import Icon from '@likable-hair/svelte/media/Icon.svelte';
</script>

<div style:background-color={$colors.background} style:color={$colors.background} class="footer">
	<div class="left-side">
		<div class="description">
			<Body color="black" size="small"
				>Naviga sul nostro sito, iscriti alla newsletter e segui le nostre proposte.</Body
			>
		</div>
		<div class="socials">
			<Icon name="mdi-facebook" size={15} color={$colors.tertiary} />
			<Icon name="mdi-instagram" size={15} color={$colors.tertiary} />
			<Icon name="mdi-twitter" size={15} color={$colors.tertiary} />
		</div>
	</div>
	<div class="right-side">
		<div class="location">
			<Icon name="mdi-map-marker" />
			<Body color="black" size="small">Via Larga 22, Cesole (MN)</Body>
		</div>
		<div class="phone-numbers">
			<Icon name="mdi-phone" />
			<Body color="black" size="small">+39 345728300, Andrew</Body>
		</div>
		<div class="emails">
			<Icon name="mdi-email" />
			<Body color="black" size="small">andrew.bogut@gmail.com</Body>
		</div>
	</div>
</div>

<style>
	.footer {
		width: 80vw;
		height: 200px;
		display: flex;
		padding: 40px;
	}

	.description {
		max-width: 300px;
		margin-top: 10px;
	}

	.socials {
		margin-top: 10px;
		display: flex;
		gap: 15px;
	}

	.left-side {
		flex-grow: 1;
	}

	.location,
	.phone-numbers,
	.emails {
		display: flex;
		align-items: center;
		gap: 10px;
		margin-top: 10px;
	}

	@media (max-width: 767.98px) {
		.footer {
			flex-direction: column;
			height: fit-content;
		}
	}
</style>
