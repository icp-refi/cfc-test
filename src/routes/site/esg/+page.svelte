<script lang="ts">
	import PageTitle from '$lib/components/PageTitle.svelte';
	import type { Box } from '$lib/components/BoxList.svelte';
	import BoxList from '$lib/components/BoxList.svelte';
	import { goto } from '$app/navigation';
	import MediaQuery from '@likable-hair/svelte/common/MediaQuery.svelte';

	let esgSections: Box[] = [];

	$: {
		esgSections = [
			{
				label: 'Circular Economy',
				description: 'Reduce, reuse and recycling in the production process',
				name: 'registry',
				style: {
					width: '400px',
					height: '200px',
					maxWidth: '100%'
				}
			},
			{
				label: 'Climate Change',
				name: 'registration',
				description: 'Prevent earth pollution',
				style: {
					width: '400px',
					height: '200px',
					maxWidth: '100%'
				}
			},
			{
				label: 'Diversity & Inclusion',
				name: 'monitor',
				description: 'Valuing diversity by promoting inclusion',
				style: {
					width: '400px',
					height: '200px',
					maxWidth: '100%'
				}
			},
			{
				label: 'Energy & Decarbonization',
				name: 'settings',
				description: 'Energy efficiency to protect environment',
				style: {
					width: '400px',
					height: '200px',
					maxWidth: '100%'
				}
			},
			{
				label: 'Environment & Sustainability',
				name: 'settings',
				description: 'A model of sustainable growth',
				style: {
					width: '400px',
					height: '200px',
					maxWidth: '100%'
				}
			},
			{
				label: 'Forest',
				name: 'settings',
				description: 'Sustainable forest management',
				style: {
					width: '400px',
					height: '200px',
					maxWidth: '100%'
				}
			},
			{
				label: 'Governance',
				name: 'settings',
				description: 'Compliance and company management',
				style: {
					width: '400px',
					height: '200px',
					maxWidth: '100%'
				}
			},
			{
				label: 'Social responsibility',
				name: 'settings',
				description: 'Business ethics',
				style: {
					width: '400px',
					height: '200px',
					maxWidth: '100%'
				}
			},
			{
				label: 'Sustainable Finance',
				name: 'settings',
				description: 'Eco-sustainability of an investment',
				style: {
					width: '400px',
					height: '200px',
					maxWidth: '100%'
				}
			}
		];

		esgSections = [...esgSections];
	}

	function handleBoxClick(event: CustomEvent<{ box: Box }>) {
		if (event.detail.box.name == 'home') goto('/');
		if (event.detail.box.name == 'registry') goto('/registry');
		if (event.detail.box.name == 'registration') goto('/registration');
		if (event.detail.box.name == 'monitor') goto('/monitor');
		if (event.detail.box.name == 'settings') goto('/settings/general');
	}
</script>

<div>
	<PageTitle title="ESG - Environment, Society, Governance" />

	Services to value companies' environmental, social and ethical commitment
	<div>
		ESG is an acronym that summarizes three English words: Environment, Social (sometimes it also
		means Society), Governance. These are aspects that refer to organizations’ evaluation methods,
		in particular their ability to align themselves with a series of fundamental requirements for
		sustainable development from an economic, environmental, social and corporate governance point
		of view. These are conformity assessment activities that simultaneously consider economic,
		environmental, social and ethical aspects that are intertwined in a virtuous circle.
	</div>
	<MediaQuery let:mAndDown>
		<!-- {#if mAndDown}
<div style:margin="50px" style:padding-bottom="50px" style:max-width="1400px">
  <BoxList boxes={esgSections} on:box-click={handleBoxClick} />
</div>
  {:else}
<div style:margin="50px" style:padding-bottom="50px" style:max-width="1800px">
  <BoxList boxes={esgSections} on:box-click={handleBoxClick} />
</div>
{/if} -->

		<div style:margin="50px" style:padding-bottom="50px" style:max-width="1800px">
			<BoxList boxes={esgSections} on:box-click={handleBoxClick} />
		</div>
	</MediaQuery>

	<h2>Environmental</h2>
	<p>
		Environmental factors involve how much an organization considers the protection of natural
		resources. These factors include the environment, climate change, energy consumption and use and
		its overall impact.
	</p>
	<h2>Society</h2>
	<p>
		Social factors address how an organization treats people, including these examples:

		<li>
			Community relations, including the organization's connection and impact on the local
			communities in which it operates and serves
		</li>
		<li>Customer satisfaction</li>
		<li>Data protection and privacy policies and efforts</li>
		<li>
			Efforts to fund projects or institutions that help poor and underserved communities globally
		</li>
		<li>Employee diversity, equity and inclusion (DEI)</li>
		<li>Employee engagement and relations</li>
		<li>Health and safety</li>
		<li>Human rights, including child labor and slavery</li>
		<li>Labor standards</li>
	</p>

	<h2>Governance</h2>
	<p>
		Governance examines how a corporation polices itself, focusing on internal system controls and
		practices to maintain compliance.
		<br />Governance focuses on transparency, industry best practices, organization management and
		associated growth initiatives.
	</p>
</div>

<style>
	p {
		font-size: 22px;
		line-height: 1.2;
		color: #97999b;
		margin-bottom: 25px;
	}
</style>
