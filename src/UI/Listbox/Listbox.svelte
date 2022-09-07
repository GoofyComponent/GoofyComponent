<script lang="ts">
	const shows = [
		{ id: 1, name: 'Cowboy Bebop', completed: false },
		{ id: 2, name: 'Naruto', completed: false },
		{ id: 3, name: 'One Piece', completed: false },
		{ id: 4, name: 'Fullmetal Alchemist', completed: true },
		{ id: 5, name: 'One Punch Man', completed: true },
		{ id: 6, name: 'Death Note', completed: true }
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