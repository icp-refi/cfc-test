<script lang="ts" context="module">
	import type { MenuItem } from './SideNavigator.svelte';
</script>

<script lang="ts">
	import SideNavigator from './SideNavigator.svelte';
	import HeaderMenu from '@likable-hair/svelte/navigation/HeaderMenu.svelte';
	import colors from '$lib/stores/colors';
	import Icon from '@likable-hair/svelte/media/Icon.svelte';
	import UserAvatar from './UserAvatar.svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import Divider from './Divider.svelte';
	import LinkButton from '$lib/components/LinkButton.svelte';
	import logo from '$lib/assets/logo_2.png';
	import CollapsableDivider from './CollapsableDivider.svelte';

	let openDrawer: boolean = false;

	let menuItems: MenuItem[] = [];
	let selectedMenu: string;

	function handleSettingsClick() {
		openDrawer = false;
		goto('/settings/general');
	}

	function handleLogout() {
		console.log('logout');
		// service.logout().then(() => {
		// 	goto('/auth/login');
		// });
	}

	if ($page.url.pathname == '/') selectedMenu = 'home';
	else if ($page.url.pathname.startsWith('/registry')) selectedMenu = 'registry';
	else if ($page.url.pathname.startsWith('/registration')) selectedMenu = 'registration';
	else if ($page.url.pathname.startsWith('/monitor')) selectedMenu = 'monitor';

	function handleMenuClick(item: any) {
		if (item.detail?.item?.name == 'home') goto('/');
		if (item.detail?.item?.name == 'registry') goto('/registry');
		if (item.detail?.item?.name == 'registration') goto('/registration');
		if (item.detail?.item?.name == 'monitor') goto('/monitor');

		selectedMenu = item.detail?.item?.name;
		openDrawer = false;
	}

	$: {
		menuItems = [
			{
				title: 'Home',
				icon: 'mdi-home',
				name: 'home'
			},
			{
				title: 'ESG',
				icon: 'mdi-home',
				name: 'home'
			},
			{
				title: 'Elezioni',
				icon: 'mdi-domain',
				name: 'registry'
			},
			{
				title: 'Raccolta dati',
				icon: 'mdi-clipboard-outline',
				name: 'registration'
			},
			{
				title: 'Monitor',
				icon: 'mdi-checkbox-marked-outline',
				name: 'monitor'
			}
		];

		menuItems = [...menuItems];
	}
</script>

<HeaderMenu
	backgroundColor={$colors.primary}
	color={$colors.background}
	drawerBackgroundColor={$colors.background}
	drawerColor={$colors.contrast}
	drawerSpace="250px"
	bind:openDrawer
>
	<svelte:fragment slot="title">
		<img style:height="40px" style:object-fit="cover" style:z-index="0" src={logo} alt="logo" />
	</svelte:fragment>
	<svelte:fragment slot="prepend" let:toggleDrawer>
		<div
			style:width="fit-content"
			style:margin-left="10px"
			style:margin-right="10px"
			class="hide-on-desktop"
		>
			<Icon name="mdi-menu" click on:click={toggleDrawer} />
		</div>
	</svelte:fragment>
	<div slot="drawer" style:height="100%" style:display="flex" style:flex-direction="column">
		<div
			style:background-color={$colors.primary}
			style:color={$colors.background}
			style:height="110px"
			style:padding-top="30px"
		>
			<div
				style:display="flex"
				style:justify-content="space-between"
				style:align-items="center"
				style:width="calc(100% - 20px)"
				style:padding-left="10px"
				style:padding-right="10px"
			>
				<UserAvatar username={'cfc - circular financial'} src="" showTitleAndDescription={true} />
				<div>
					<Icon name="mdi-cog-outline" click on:click={handleSettingsClick} />
				</div>
			</div>
			<div style:font-weight="300" style:padding-left="10px" style:margin-top="20px">
				cfc@circularfinancial.eu
			</div>
		</div>
		<div style:margin-top="20px" style:margin-bottom="20px">
			<SideNavigator
				collapsed={false}
				items={menuItems}
				selected={selectedMenu}
				on:click={handleMenuClick}
				paddingLeft="10px"
				menuFontSize="1.1rem"
			/>
		</div>
		<Divider />
		<div style:padding-left="10px">
			<LinkButton>
				<span style:color={$colors.lightContrast} style:font-size="0.8rem"
					>Hai bisogno di aiuto?</span
				>
			</LinkButton>
			<LinkButton>
				<span style:color={$colors.lightContrast} style:font-size="0.8rem">Informativa privacy</span
				>
			</LinkButton>
			<LinkButton on:click={handleLogout}>
				<span style:color={$colors.lightContrast} style:font-size="0.8rem">Logout</span>
			</LinkButton>
		</div>
		<img
			style:margin-bottom="10px"
			style:margin-left="auto"
			style:margin-right="auto"
			style:margin-top="auto"
			style:height="100px"
			style:width="70px"
			style:object-fit="cover"
			style:z-index="0"
			src={logo}
			alt="logo"
		/>
	</div>
	<svelte:fragment slot="append">
		<a href="/manual.pdf" target="_blank">
			<svg
				width="40"
				height="40"
				style:margin-right="10px"
				viewBox="0 0 200 200"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g clip-path="url(#clip0_1123_2)">
					<circle cx="100" cy="100" r="100" fill="white" />
					<path
						d="M99.2 67.8C105.6 67.8 110.4 69.1 113.6 71.7C116.867 74.3 118.5 78.2 118.5 83.4C118.5 88.6 117.967 92.4 116.9 94.8C115.9 97.1333 113.733 99.5667 110.4 102.1C107.067 104.567 104.967 106.467 104.1 107.8C103.233 109.133 102.8 110.6 102.8 112.2V115.3H92.1C90.0333 113.033 89 110 89 106.2C89 103.8 91.1 100.9 95.3 97.5C99.5667 94.1 102.167 91.7667 103.1 90.5C104.1 89.1667 104.6 87.5667 104.6 85.7C104.6 81.7667 101.767 79.8 96.1 79.8C92.1 79.8 88 80.2 83.8 81L81.7 81.4L81 71.3C86.7333 68.9667 92.8 67.8 99.2 67.8ZM89.9 137V120.9H104.3V137H89.9Z"
						fill="#363636"
					/>
				</g>
				<defs>
					<clipPath id="clip0_1123_2">
						<rect width="200" height="200" fill="white" />
					</clipPath>
				</defs>
			</svg>
		</a>
	</svelte:fragment>
</HeaderMenu>
