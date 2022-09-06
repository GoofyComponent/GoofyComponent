<script>
  export let name;
  export let rating;
  export let comments;
  export let src;
  // import "./Review.css";
  import FaRegStar from "svelte-icons/fa/FaRegStar.svelte";
  import FaStar from "svelte-icons/fa/FaStar.svelte";
</script>

<div class="grid-containter">
  <div class="col-left">
    <img {src} alt={name} />
  </div>
  <div class="col-right">
    <div class="col-right-stars">
      {#each Array(5) as _, i}
        {#if i < rating}
          <FaStar />
        {:else}
          <FaRegStar />
        {/if}
      {/each}
    </div>
    <div class="col-right-name">
      <strong>{name}</strong>
    </div>
    <div class="col-right-comments">
      {comments}
    </div>
  </div>
</div>
