<script>
  let input = "";
  let output = "";

  const clear = () => {
    input = "";
    output = "";
  };
  const backspace = () => {
    input = input.slice(0, -1);
  };
  const addOperator = (operator) => {
    if (input === "") {
      input = "0";
    }
    if (input[input.length - 1] === "+" || input[input.length - 1] === "-") {
      input = input.slice(0, -1);
    }
    if (operator === "=") {
      output = eval(input);
      input = "";
    } else {
      input += operator;
    }
  };
  const addNumber = (number) => {
    if (input === "0") {
      input = "";
    }
    input += number;
  };
  // add event listener to the keyboard from number 0 to 9 and the operators
  document.addEventListener("keydown", (event) => {
    if (event.key >= 0 && event.key <= 9) {
      addNumber(event.key);
    } else if (event.key === "+" || event.key === "-") {
      addOperator(event.key);
    } else if (event.key === "Enter") {
      addOperator("=");
    } else if (event.key === "Backspace") {
      backspace();
    } else if (event.key === "Escape") {
      clear();
    } else if (event.key === "*") {
      addOperator("*");
    }
  });
</script>

<div class="calc">
  <div class="calc-display">
    <div class="calc-display-input">{input}</div>
    <div class="calc-display-output">{output}</div>
  </div>
  <div class="calc-buttons">
    <div class="calc-buttons-row">
      <button on:click={() => clear()}>C</button>
      <button on:click={() => backspace()}>⌫</button>
      <button on:click={() => addOperator("/")}>/</button>
      <button on:click={() => addOperator("*")}>x</button>
    </div>
    <div class="calc-buttons-row">
      <button on:click={() => addNumber(7)}>7</button>
      <button on:click={() => addNumber(8)}>8</button>
      <button on:click={() => addNumber(9)}>9</button>
      <button on:click={() => addOperator("-")}>-</button>
    </div>
    <div class="calc-buttons-row">
      <button on:click={() => addNumber(4)}>4</button>
      <button on:click={() => addNumber(5)}>5</button>
      <button on:click={() => addNumber(6)}>6</button>
      <button on:click={() => addOperator("+")}>+</button>
    </div>
    <div class="calc-buttons-row">
      <button on:click={() => addNumber(1)}>1</button>
      <button on:click={() => addNumber(2)}>2</button>
      <button on:click={() => addNumber(3)}>3</button>
      <button on:click={() => addOperator("=")}>=</button>
    </div>
    <div class="calc-buttons-row">
      <button on:click={() => addNumber(0)}>0</button>
      <button on:click={() => addNumber(".")}>.</button>
    </div>
  </div>
</div>

<style>
  .calc {
    width: 300px;
    height: 400px;
    background-color: #333;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    color: black;
  }
  .calc-display {
    width: 100%;
    height: 20%;
    background-color: #fff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 10px;
    padding-top: 10px;
  }
  .calc-buttons {
    width: 100%;
    height: 55%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    grid-row-gap: 5px;
  }
  .calc-buttons-row {
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }
  .calc-buttons-row button {
    width: 25%;
    height: 100%;
    background-color: #fff;
    border-radius: 10px;
    border: none;
    font-size: 1.5rem;
    font-weight: bold;
    margin: 5px;
    padding-bottom: 5px;
  }
  .calc-buttons-row button:hover {
    background-color: #eee;
  }
  .calc-buttons-row button:active {
    background-color: #ddd;
  }
</style>
