<script>
	import { getContext } from 'svelte';
	import { TABS } from './Tabs.svelte';

	const tab = {};
	const { registerTab, selectTab, selectedTab } = getContext(TABS);

	registerTab(tab);
</script>

<style>
	button {
		background: none;
		border: none;
		border-bottom: 2px solid white;
		border-radius: 0;
		font-size: 20px;
		margin-right: 10px;
		margin-left: 10px;
		color: #ccc;
	}
	
	.selected {
		border-bottom: 2px solid rgb(0, 70, 128);;
		color: rgb(128, 128, 128);
	}
</style>

<button class:selected="{$selectedTab === tab}" on:click="{() => selectTab(tab)}">
	<slot></slot>
</button>