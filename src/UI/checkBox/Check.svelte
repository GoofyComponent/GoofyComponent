<script>
	export let sentenceA;
    export let sentenceB;

    let yes = false;
</script>


<input type=checkbox bind:checked={yes}>
 
<p>
  {#if yes}
    {sentenceA}
  {:else}
    {sentenceB}
  {/if}
</p>  
 
  
  <button disabled={!yes}>
    c'est Ok
  </button>
