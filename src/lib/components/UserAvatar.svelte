<script lang="ts">
	export let username: string,
		description: string = '',
		showTitleAndDescription: boolean = true,
		src: string,
		avatarTextColor: string | undefined = undefined;

	import colors from '$lib/stores/colors';
	import DescriptiveAvatar from '@likable-hair/svelte/media/DescriptiveAvatar.svelte';
	import Avatar from '@likable-hair/svelte/media/Avatar.svelte';
	import MediaQuery from '@likable-hair/svelte/common/MediaQuery.svelte';
</script>

<MediaQuery let:mAndUp>
	<DescriptiveAvatar
		direction="row"
		title={showTitleAndDescription ? username : undefined}
		description={showTitleAndDescription ? description : undefined}
		{src}
		width={mAndUp ? undefined : '30px'}
		height={mAndUp ? undefined : '30px'}
	>
		<div slot="avatar">
			{#if !!src}
				<Avatar {src} />
			{:else}
				<div
					style:width={'40px'}
					style:height={'40px'}
					style:background-color={$colors.tertiary}
					style:font-size={mAndUp ? '1.2rem' : '1rem'}
					style:font-weight="700"
					style:display="flex"
					style:justify-content="center"
					style:align-items="center"
					style:border-radius="50%"
					style:text-transform="uppercase"
					style:color={avatarTextColor || $colors.contrast}
				>
					{username.split(' ')[0]?.substring(0, 1)}{username.split(' ')[1]?.substring(0, 1)}
				</div>
			{/if}
		</div>
	</DescriptiveAvatar>
</MediaQuery>
