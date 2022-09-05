<script>
  export let name;
  export let rating;
  export let comments;
  export let src;
  // import starts from fontawesome
</script>

<h1>{name}</h1>
<!-- for i in range of rating -->
{#each Array(rating) as _, i}
  <!-- display a star -->
  <span class="fa fa-star checked" />
{/each}
<p>{comments}</p>
<img {src} alt={name} />
