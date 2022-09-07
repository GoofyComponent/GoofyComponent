<script>
  let classes = "";

  export let title = null;
  export { classes as class };
  let drawerHeight;
</script>

<section class="screen {classes}">
  <div class="containerHeader">
    <div class="buttons">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="54"
        height="14"
        viewBox="0 0 54 14"
      >
        <g fill="none" fill-rule="evenodd" transform="translate(1 1)">
          <circle
            cx="5"
            cy="5"
            r="5"
            fill="#FF5F56"
            stroke="#E0443E"
            stroke-width=".5"
          />
          <circle
            cx="25"
            cy="5"
            r="5"
            fill="#FFBD2E"
            stroke="#DEA123"
            stroke-width=".5"
          />
          <circle
            cx="45"
            cy="5"
            r="5"
            fill="#27C93F"
            stroke="#1AAB29"
            stroke-width=".5"
          />
        </g>
      </svg>
    </div>

    <div class="bar">
      <div class="title">
        {#if title}{title}{/if}
      </div>
    </div>
  </div>

  <div class="content">
    <slot />
  </div>
</section>

<style>
  @media (prefers-color-scheme: light) {
    :root {
      --screen-border-color: #ccc;
      --screen-background-color: white;
      --screen-shadow-color: #ccc;
      --screen-text-color: #222;
    }
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --screen-border-color: #ccc;
      --screen-background-color: #222;
      --screen-shadow-color: #ccc;
      --screen-text-color: white;
    }
  }
  .screen {
    font-family: sans-serif;
    font-size: 1.2rem;
    border: solid 1px var(--screen-border-color);
    border-radius: 0.5rem;
    background: var(--screen-background-color);
    box-shadow: 2px 2px var(--screen-shadow-color);
    color: var(--screen-text-color);
    position: relative;
    overflow: hidden;
  }

  .screen .containerHeader {
    display: flex;
  }

  .screen .bar {
    margin-bottom: 1rem;
  }

  .buttons {
    padding: 0.5rem 0.5rem;
  }

  .title {
    font-size: 0.8rem;
    color: var(--screen-text-color);
    padding: 0.5rem;
    display: flex;
    justify-content: center;
    place-items: center;
  }

  .tabs {
    display: flex;
    justify-content: flex-start;
    place-items: center;
    border-bottom: solid 1px var(--screen-border-color);
  }

  .drawer {
    position: absolute;
    bottom: 0px;
    background: var(--screen-background-color);
    border-top: solid 1px var(--screen-border-color);
    font-size: 0.9rem;
    width: 100%;
    padding: 0.2rem;
  }

  .content {
    padding: 1em;
  }
</style>
