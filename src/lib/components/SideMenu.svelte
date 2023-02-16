<script lang="ts" context="module">
	import type { MenuItem } from './SideNavigator.svelte';
</script>

<script lang="ts">
	import SideNavigator from './SideNavigator.svelte';
	import LinkButton from './LinkButton.svelte';
	import { page } from '$app/stores';
	import colors from '$lib/stores/colors';

	import { goto } from '$app/navigation';
	import UserAvatar from './UserAvatar.svelte';
	import CollapsableDivider from './CollapsableDivider.svelte';
	import { onMount } from 'svelte';
	import logo from '$lib/assets/logo_2.png';

	export let width: number = 200,
		collapsedWidth: number = 50,
		collapsed: boolean = false;

	let menuItems: MenuItem[] = [];
	let selectedMenu: string;

	onMount(() => {
		if (localStorage.getItem('collapsed-menu') === 'true') {
			collapsed = true;
		} else {
			collapsed = false;
		}
	});

	$: if ($page.url.pathname == '/') selectedMenu = 'home';
	else if ($page.url.pathname.startsWith('/registry')) selectedMenu = 'registry';
	else if ($page.url.pathname.startsWith('/registration')) selectedMenu = 'registration';
	else if ($page.url.pathname.startsWith('/monitor')) selectedMenu = 'monitor';
	else if ($page.url.pathname.startsWith('/settings')) selectedMenu = 'settings';

	function handleLogout() {
		goto('/auth/login').then(() => {
			console.log('log out');
		});
	}

	function handleMenuClick(item: any) {
		if (item.detail?.item?.name == 'home') goto('/');
		if (item.detail?.item?.name == 'marketplace') goto('/marketplace');
		if (item.detail?.item?.name == 'esg') goto('/site/esg');

		selectedMenu = item.detail?.item?.name;
	}

	function saveCollapseStatus() {
		localStorage.setItem('collapsed-menu', collapsed.toString());
	}

	$: {
		menuItems = [
			{ title: 'Our Mission', icon: 'mdi-leaf-circle-outline', name: 'mission' },
			{ title: 'Technology', icon: 'mdi-cube-scan', name: 'technology' },
			{ title: 'ESG', icon: 'mdi-book-sync-outline', name: 'esg' },
			{ title: 'Marketplace', icon: 'mdi-shopping', name: 'marketplace' },
			{ title: 'Settings', icon: 'mdi-cog-outline', name: 'settings' },
			{ title: 'Web Site', icon: 'mdi-web', name: 'home' }
		];
		menuItems = [...menuItems];
	}
</script>

<div
	style:background-color={$colors.background}
	style:width={collapsed ? collapsedWidth + 'px' : width + 'px'}
	class="menu-container"
>
	<img
		style:margin-left={collapsed ? '20px' : '30px'}
		style:margin-bottom=""
		style:transition="0.2s"
		width={collapsed ? 100 : 140}
		height="120"
		style:bottom="0px"
		style:left={collapsed ? '20px' : '50px'}
		style:height={collapsed ? '50px' : '182px'}
		style:width={collapsed ? '30px' : '182px'}
		style:object-fit="cover"
		style:z-index="0"
		src={logo}
		alt="logo"
	/>

	<SideNavigator
		bind:collapsed
		items={menuItems}
		selected={selectedMenu}
		on:click={handleMenuClick}
	/>

	<CollapsableDivider
		marginRight="10px"
		marginLeft="10px"
		marginBottom="15px"
		marginTop="15px"
		bind:collapsed
		on:change={saveCollapseStatus}
	/>
	<div style:padding-left="20px" style:min-width="{width}px" style:height="100%">
		<div style:margin-bottom="20px">
			<!-- <UserAvatar
        username={user?.firstname + ' ' + user?.lastname}
        src=""
        showTitleAndDescription={!collapsed}
      /> -->
		</div>
		{#if !collapsed}
			<div style:display="flex" style:flex-direction="column">
				<LinkButton>
					<span style:color={$colors.lightContrast} style:font-size="0.8rem"
						>Hai bisogno di aiuto?</span
					>
				</LinkButton>
				<LinkButton>
					<span style:color={$colors.lightContrast} style:font-size="0.8rem"
						>Informativa privacy</span
					>
				</LinkButton>
				<LinkButton on:click={handleLogout}>
					<span style:color={$colors.lightContrast} style:font-size="0.8rem">Logout</span>
				</LinkButton>
			</div>
		{/if}
		<img
			style:transition="all .1s ease-out"
			style:position="absolute"
			style:bottom="0px"
			style:left={collapsed ? '20px' : '50px'}
			style:height={collapsed ? '50px' : '82px'}
			style:width={collapsed ? '30px' : '80px'}
			style:object-fit="cover"
			style:z-index="0"
			src={logo}
			alt="logo"
		/>
	</div>
</div>

<style>
	.menu-container {
		position: fixed;
		height: 100vh;
		top: 0px;
		transition: 0.2s;
		overflow: hidden;
	}
</style>
