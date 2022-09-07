<script>
  export let sentenceA;
  export let sentenceB;
  export let yes = false;
</script>

<div class="checkBox">
  <input type="checkbox" class="check" bind:checked={yes} />

  <p>
    {#if yes}
      {sentenceA}
    {:else}
      {sentenceB}
    {/if}
  </p>
</div>

<style>
  .checkBox {
    border: solid;
    margin: 10px;
    max-width: 20%;
    border-radius: 10px;
    padding: 10px;
    text-align: center;
    box-shadow: 12px 12px 2px 1px rgb(0 0 255 / 20%);
  }
  p {
    margin: 0px;
  }
  .check {
    width: 20px;
    height: 20px;
  }
  .buttoncheck {
    border-radius: 5px;
    background: none;
    margin: 10px;
    padding: 5px 19px;
  }

  .buttoncheck:active {
    box-shadow: 3px 3px 3px 3px rgb(0 0 255 / 20%);
    transform: translate(0px, 5px);
    -webkit-transform: translate(0px, 5px);
  }
</style>
