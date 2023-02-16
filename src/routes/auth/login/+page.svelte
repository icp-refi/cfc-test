<script context="module" lang="ts">
	export async function load({ params, session, stuff }: any) {
		return {};
	}
</script>

<script lang="ts">
	import colors from '$lib/stores/colors';
	import { goto } from '$app/navigation';

	let email: string = '',
		password: string = '',
		error: boolean = false,
		errorMessage: string | undefined = undefined,
		loading: boolean = false;

	function login() {
		goto('/app');
	}

	import StandardButton from '$lib/components/common/StandardButton.svelte';
	import LabelAndTextfield from '$lib/components/LabelAndTextfield.svelte';
	import logo from '$lib/assets/logo_2.png';
</script>

<div class="container" style:background-color={$colors.thinContrast}>
	<img
		style:position="absolute"
		style:height="100vh"
		style:object-fit="cover"
		style:z-index="0"
		style:opacity="40%"
		src={logo}
		alt="logo"
	/>
	<div class="card" style:z-index="20" style:background-color={$colors.background}>
		<div
			style:display="flex"
			style:justify-content="center"
			style:margin-bottom="60px"
			style:margin-top="30px"
		>
			<img
				style:margin-left="30px"
				style:margin-bottom=""
				style:transition="0.2s"
				width="140"
				height="120"
				style:bottom="0px"
				style:left={'50px'}
				style:height={'182px'}
				style:width={'182px'}
				style:object-fit="cover"
				style:z-index="0"
				src={logo}
				alt="logo"
			/>
		</div>
		<h2>Log in</h2>
		<hr style:background-color={$colors.thinContrast} style:border="none" style:height="1px" />
		<form style:margin-top="20px">
			<LabelAndTextfield
				label="Email o Username"
				placeholder="email o username"
				name="email"
				bind:value={email}
				{error}
			/>
			<LabelAndTextfield
				label="Password"
				name="password"
				type="password"
				bind:value={password}
				{error}
			/>
		</form>
		{#if error}
			<div
				style:margin-top="20px"
				style:margin-bottom="20px"
				style:text-align="center"
				style:color={$colors.warning}
			>
				{errorMessage}
			</div>
		{/if}
		<div style:margin-top="20px" style:margin-bottom="20px">
			<StandardButton on:click={login} {loading}>Login</StandardButton>
		</div>
	</div>
</div>

<style>
	.container {
		height: 100vh;
		width: 100vw;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	.card {
		padding: 10px 20px 10px 20px;
		box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
		border-radius: 10px;
		box-sizing: border-box;
	}

	h2 {
		font-weight: 500;
	}

	@media (min-width: 425px) {
		.card {
			max-width: 90vw;
			width: 300px;
		}
	}

	@media (max-width: 424.98px) {
		.card {
			width: 100vw;
			height: 100vh;
			border-radius: 0px;
			overflow: auto;
		}
	}
</style>
