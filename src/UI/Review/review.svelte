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

<style>
  .grid-containter {
    /* Une ligne et deux col en grid */
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 0.3fr 0.7fr;
    width: 50vw;
    height: 15vw;
    border: 1px solid rgba(24, 48, 98, 0.1);
    border-radius: 40rem;
    margin-bottom: 30px;
    box-shadow: -15px -3px 12px 1px rgba(150, 150, 150, 0.24);
  }

  .col-left {
    /* Col gauche */
    grid-column: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
    width: 100%;
  }
  .col-left > img {
    width: 60%;
    height: auto;
    border-radius: 100%;
    object-fit: cover;
    aspect-ratio: 1/1;
  }
  .col-right {
    /* Col droite */
    grid-column: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: auto;
    width: 100%;
  }
  .col-right-stars > svg {
    max-height: unset !important;
    width: 2vw !important;
    color: #f6c764;
  }
  .col-right > div {
    margin-bottom: 1vw;
    margin-right: 3vw;
  }
  .col-right-name {
    font-size: 1.5vw;
    font-weight: 600;
  }
</style>
