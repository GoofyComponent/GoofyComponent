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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            class="s-fr5lgz0qJW0U"
          >
            <path
              d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
              style=""
            />
          </svg>
        {:else}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            class="s-fr5lgz0qJW0U"
            ><path
              d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
            /></svg
          >
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

<style type="text/css">
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

  .col-right > div {
    margin-bottom: 1vw;
    margin-right: 3vw;
  }
  .col-right-name {
    font-size: 1.5vw;
    font-weight: 600;
  }
  .col-right-stars > svg {
    max-height: unset !important;
    width: 2vw !important;
    color: #f6c764;
    fill: #f6c764;
  }
</style>
