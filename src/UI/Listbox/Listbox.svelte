<script lang="ts">
	const shows = [
		{ id: 1, name: 'Titanic', completed: false },
		{ id: 2, name: 'Dirty Dancing', completed: false },
		{ id: 3, name: 'Pulp fiction', completed: true },
		{ id: 4, name: 'Forrest gamp', completed: true },
		{ id: 5, name: 'Le roi lion', completed: true },
		{ id: 6, name: 'Jurassic Park', completed: true }
	]

	let selected = shows[0].name
</script>

<h4>Select</h4>

<select bind:value={selected}>
	{#each shows as anime (anime.id)}
		<option value={anime.name} disabled={anime.completed}>
			{anime.name}
		</option>
	{/each}
</select>

<style>
	select {
		font-size: inherit;
		font-family: inherit;
		padding: 0.4rem;
	}
</style>
