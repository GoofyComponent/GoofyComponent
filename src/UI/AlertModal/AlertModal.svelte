<script>
  export let btn = false;
  export let confirmMsg = "Confirmer";
  export let rejectMsg = "Annuler";
  export let modalTitle = "Attention !";
  export let modalContent = "L'action effectuée est irréversible.";
  export let confirmAction = () => {};
  export let rejectAction = () => {};
</script>

<section id="AlertModalContainer">
  <section class="AlertModalContent">
    <div class="alertModalText">
      <h1 class="modalTitle">
        {modalTitle}
      </h1>

      <div class="modalInfos">
        {@html modalContent}
      </div>
    </div>

    {#if btn}
      <div class="AlertModalButtons">
        <button
          class="AlertModalButton"
          on:click={rejectAction && rejectAction}
        >
          {rejectMsg}
        </button>
        <button
          class="AlertModalButton"
          on:click={confirmAction && confirmAction}
        >
          {confirmMsg}
        </button>
      </div>
    {:else}
      <div class="AlertModalButtons flexend">
        <button
          class="AlertModalButton"
          on:click={confirmAction && confirmAction}
        >
          {confirmMsg}
        </button>
      </div>
    {/if}
  </section>
</section>

<style>
  #AlertModalContainer {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
  }

  .AlertModalContent {
    width: 50%;
    height: auto;
    padding: 1em;
    background-color: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .modalTitle {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0;
  }

  .modalInfos {
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: 1rem;
  }

  .AlertModalButtons {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 50%;
    align-self: flex-end;
  }

  .AlertModalButtons.flexend {
    justify-content: flex-end;
  }

  .AlertModalButton {
    width: 40%;
    height: 2rem;
    border-radius: 5px;
    border: none;
    background-color: #f5f5f5;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
  }
</style>
