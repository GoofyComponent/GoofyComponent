<script>
  export let placeholder;
  export let value = "";
  export let disabled = false;
  export let showPlaceholder = true;

  let placeholderStyle = "";
  let name = "";

  if (!showPlaceholder) {
    placeholderStyle = "0px auto";
  } else {
    placeholderStyle = "15px auto";
  }
</script>

<div class="q-input" style="grid-template-rows: {placeholderStyle};">
  {#if showPlaceholder}
    <span class="title">{placeholder}</span>
  {/if}
  <label class="field a-field a-field_a1">
    <input bind:value={name} class="field__input a-field__input" />
  </label>
  <h3>Hello {name || "Stranger "} !</h3>
</div>

<style>
  .q-input {
    display: grid;
    border-radius: 10px;
    width: 30%;
    border: solid;
    margin: 10px;
    padding: 10px;
    grid-template-rows: 15px auto;
    box-shadow: 12px 12px 2px 1px rgb(0 0 255 / 20%);
    /* max-width: 200px; */
  }

  .title {
    font-size: 16px;
    opacity: 0.7;
    padding-left: 5px;
    justify-self: left;
  }
  .field {
    --uiFieldPlaceholderColor: var(--fieldPlaceholderColor, #767676);
  }

  h3 {
    text-align: center;
    font-style: oblique;
    font-weight: bold;
  }

  .field__input {
    background-color: transparent;
    border-radius: 0;
    border: none;

    -webkit-appearance: none;
    -moz-appearance: none;

    font-family: inherit;
    font-size: 1em;
  }

  .field__input:focus::-webkit-input-placeholder {
    color: var(--uiFieldPlaceholderColor);
  }

  .field__input:focus::-moz-placeholder {
    color: var(--uiFieldPlaceholderColor);
    opacity: 1;
  }

  .a-field {
    display: inline-block;
  }

  .a-field__input {
    display: block;
    box-sizing: border-box;
    width: 100%;
  }

  .a-field__input:focus {
    outline: none;
  }

  .a-field {
    --uiFieldHeight: var(--fieldHeight, 25px);
    --uiFieldBorderWidth: var(--fieldBorderWidth, 2px);
    --uiFieldBorderColor: var(--fieldBorderColor);

    --uiFieldFontSize: var(--fieldFontSize, 1em);
    --uiFieldHintFontSize: var(--fieldHintFontSize, 1em);

    --uiFieldPaddingRight: var(--fieldPaddingRight, 15px);
    --uiFieldPaddingBottom: var(--fieldPaddingBottom, 15px);
    --uiFieldPaddingLeft: var(--fieldPaddingLeft, 15px);

    position: relative;
    box-sizing: border-box;
    font-size: var(--uiFieldFontSize);
  }

  .a-field__input {
    height: var(--uiFieldHeight);
    padding: 0 var(--uiFieldPaddingRight) 0 var(--uiFieldPaddingLeft);
    border-bottom: var(--uiFieldBorderWidth) solid var(--uiFieldBorderColor);
  }

  .a-field_a1 .a-field__input {
    transition: border-color 0.2s ease-out;
    will-change: border-color;
  }

  .a-field_a1 .a-field__input:focus {
    border-color: var(--fieldBorderColorActive);
  }

  .field {
    --fieldBorderColor: #d1c4e9;
    --fieldBorderColorActive: #26325b;
  }
</style>
