<script>
  import FaGithub from "svelte-icons/fa/FaGithub.svelte";
  import FaLinkedin from "svelte-icons/fa/FaLinkedin.svelte";

  import AlertModal from "./UI/AlertModal/AlertModal.svelte";
  import Collapse from "./UI/Collapse/Collapse.svelte";
  import InputText from "./UI/inputText/InputText.svelte";
  import Review from "./UI/Review/Review.svelte";
  import Check from "./UI/checkBox/Check.svelte";
  import Color from "./UI/Color/Color.svelte";
  import Calc from "./UI/Calc/Calc.svelte";
  import TabList from "./UI/Tab/TabList.svelte";
  import Tab from "./UI/Tab/Tab.svelte";
  import TabPanel from "./UI/Tab/TabPanel.svelte";
  import Tabs from "./UI/Tab/Tabs.svelte";
  import Todo from "./UI/Todo/Todo.svelte";

  let btnTrigger = false;
  let demoColor = "#006BD7";
  let demoInput = "";
  let checkDemo = false;
</script>

<section id="linksBar">
  <div
    on:click={() => {
      window.open("https://github.com/GoofyComponent/GoofyComponent");
    }}
  >
    <FaGithub />
  </div>
</section>

<header>
  <div class="text">
    <h1>GoofyComponents</h1>
    <h2>The "AUUUGGHHHH" Svelte Component Library</h2>
  </div>
  <div class="icon">
    <img src="/goofyicon.png" alt="Goofy" />
  </div>
</header>

<section id="composants">
  <nav>
    <div
      on:click={(e) => {
        e.preventDefault();
        document.getElementById("alertmodal").scrollIntoView();
      }}
    >
      <p>AlertModal</p>
    </div>
    <div
      on:click={(e) => {
        e.preventDefault();
        document.getElementById("collapse").scrollIntoView();
      }}
    >
      <p>Collapse</p>
    </div>
    <div
      on:click={(e) => {
        e.preventDefault();
        document.getElementById("review").scrollIntoView();
      }}
    >
      <p>Review</p>
    </div>
    <div
      on:click={(e) => {
        e.preventDefault();
        document.getElementById("tabs").scrollIntoView();
      }}
    >
      <p>Tabs</p>
    </div>
    <div
      on:click={(e) => {
        e.preventDefault();
        document.getElementById("calc").scrollIntoView();
      }}
    >
      <p>Calc</p>
    </div>
    <div
      on:click={(e) => {
        e.preventDefault();
        document.getElementById("color").scrollIntoView();
      }}
    >
      <p>ColorPicker</p>
    </div>
    <div
      on:click={(e) => {
        e.preventDefault();
        document.getElementById("textinput").scrollIntoView();
      }}
    >
      <p>Text Input</p>
    </div>
    <div
      on:click={(e) => {
        e.preventDefault();
        document.getElementById("checkbox").scrollIntoView();
      }}
    >
      <p>Checkbox</p>
    </div>
    <div
      on:click={(e) => {
        e.preventDefault();
        document.getElementById("todo").scrollIntoView();
      }}
    >
      <p>ToDo</p>
    </div>
  </nav>

  <div class="displayCompoContain" id="alertmodal">
    <div class="text">
      <h4>AlertModal</h4>
      <Tabs>
        <TabList>
          <Tab>Utilisation</Tab>
          <Tab>Code</Tab>
        </TabList>
        <TabPanel>
          <p>
            Comment on l'utilise ? - AlertModal
          </p>
        </TabPanel>
        <TabPanel>
          <p>
            Ceci est un code
          </p>
        </TabPanel>
      </Tabs>
    </div>

    <div class="compoZone">
      <button
        on:click={() => {
          btnTrigger = !btnTrigger;
        }}
        class="alertModalBtn">Cliquez-moi !</button
      >
      {#if btnTrigger}
        <AlertModal
          btn={true}
          modalContent={"Vous avez ouvert la modal., voulez vous la fermer ?"}
          rejectMsg={"Oui"}
          confirmMsg={"Oui mais en mieux"}
          confirmAction={() => {
            {
              alert("Vous avez cliqué mais en mieux");
              btnTrigger = !btnTrigger;
            }
          }}
          rejectAction={() => {
            {
              btnTrigger = !btnTrigger;
            }
          }}
        />
      {/if}
    </div>
  </div>
  <div class="displayCompoContain" id="collapse">
    <div class="text">
      <h4>Collapse</h4>
      <Tabs>
        <TabList>
          <Tab>Utilisation</Tab>
          <Tab>Code</Tab>
        </TabList>
        <TabPanel>
          <p>
            Comment on l'utilise ? - Collapse
          </p>
        </TabPanel>
        <TabPanel>
          <p>
            Ceci est un code
          </p>
        </TabPanel>
      </Tabs>
    </div>

    <div class="compoZone">
      <Collapse
        sectionName={"Section 1"}
        sectionContent={"Ceci est une collapse, le bloc peut être ouvert ou fermé."}
      />
    </div>
  </div>
  <div class="displayCompoContain" id="review">
    <div class="text">
      <h4>Review</h4>
      <Tabs>
        <TabList>
          <Tab>Utilisation</Tab>
          <Tab>Code</Tab>
        </TabList>
        <TabPanel>
          <p>
            Comment on l'utilise ? - Review
          </p>
        </TabPanel>
        <TabPanel>
          <p>
            Ceci est un code
          </p>
        </TabPanel>
      </Tabs>
    </div>

    <div class="compoZone">
      <Review
        name={"Jean-Louis"}
        rating={4}
        src="/Louis.jpeg"
        comments={"Le Restaurant sert un très bon Ricard. Le service est très bon. Le cadre est très bon. Le prix est très bon. Et la serveuse..."}
      />
    </div>
  </div>
  <div class="displayCompoContain" id="tabs">
    <div class="text">
      <h4>Tabs</h4>
      <Tabs>
        <TabList>
          <Tab>Utilisation</Tab>
          <Tab>Code</Tab>
        </TabList>
        <TabPanel>
          <p>
            Comment on l'utilise ? - Tabs
          </p>
        </TabPanel>
        <TabPanel>
          <p>
            Ceci est un code
          </p>
        </TabPanel>
      </Tabs>
    </div>

    <div class="compoZone">
      <Tabs>
        <TabList>
          <Tab>Nouveau vlog au japon</Tab>
          <Tab>Le dernier VLOG + Video</Tab>
        </TabList>
        <TabPanel>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptates, quae, quod, voluptas quibusdam voluptatibus quidem
            voluptatum quos quia quas quod. Quisquam, quae. Quisquam, quae.
            Quisquam, quae. Quisquam, quae.
          </p>
        </TabPanel>
        <TabPanel>
          <p>C'est mon dernier vlog</p>
          <iframe
            width="300"
            height="200"
            src="https://www.youtube.com/embed/hseE17LTYfc?start=60"
            title="JAPON"
            frameborder="0"
            allowfullscreen
          />
        </TabPanel>
      </Tabs>
    </div>
  </div>
  <div class="displayCompoContain" id="calc">
    <div class="text">
      <h4>Calc</h4>
      <Tabs>
        <TabList>
          <Tab>Utilisation</Tab>
          <Tab>Code</Tab>
        </TabList>
        <TabPanel>
          <p>
            Comment on l'utilise ? - Calc
          </p>
        </TabPanel>
        <TabPanel>
          <p>
            Ceci est un code
          </p>
        </TabPanel>
      </Tabs>
    </div>

    <div class="compoZone">
      <Calc />
    </div>
  </div>
  <div class="displayCompoContain" id="color">
    <div class="text">
      <h4>ColorPicker</h4>
      <Tabs>
        <TabList>
          <Tab>Utilisation</Tab>
          <Tab>Code</Tab>
        </TabList>
        <TabPanel>
          <p>
            Comment on l'utilise ? - ColorPicker
          </p>
        </TabPanel>
        <TabPanel>
          <p>
            Ceci est un code
          </p>
        </TabPanel>
      </Tabs>
    </div>

    <div class="compoZone" style={"background-color:" + demoColor}>
      <Color startColor={demoColor} bind:hexaVal={demoColor} />
    </div>
  </div>
  <div class="displayCompoContain" id="textinput">
    <div class="text">
      <h4>TextInput</h4>
      <Tabs>
        <TabList>
          <Tab>Utilisation</Tab>
          <Tab>Code</Tab>
        </TabList>
        <TabPanel>
          <p>
            Comment on l'utilise ? - TextInput
          </p>
        </TabPanel>
        <TabPanel>
          <p>
            Ceci est un code
          </p>
        </TabPanel>
      </Tabs>
    </div>

    <div class="compoZone inputName">
      <InputText placeholder={"entrez votre nom"} bind:name={demoInput} />
      <h3>Hello {demoInput || "Stranger "} !</h3>
    </div>
  </div>
  <div class="displayCompoContain" id="checkbox">
    <div class="text">
      <h4>Checkbox</h4>
      <Tabs>
        <TabList>
          <Tab>Utilisation</Tab>
          <Tab>Code</Tab>
        </TabList>
        <TabPanel>
          <p>
            Comment on l'utilise ? - Checkbox
          </p>
        </TabPanel>
        <TabPanel>
          <p>
            Ceci est un code
          </p>
        </TabPanel>
      </Tabs>
    </div>

    <div class="compoZone check">
      <Check
        sentenceA={"Parfait !!!"}
        sentenceB={"Veuillez cocher la case "}
        bind:yes={checkDemo}
      />
      <button disabled={!checkDemo} class="buttoncheck"> c'est Ok </button>
    </div>
  </div>
  <div class="displayCompoContain" id="todo">
    <div class="text">
      <h4>ToDo</h4>
      <Tabs>
        <TabList>
          <Tab>Utilisation</Tab>
          <Tab>Code</Tab>
        </TabList>
        <TabPanel>
          <p>
            Comment on l'utilise ? - ToDo
          </p>
        </TabPanel>
        <TabPanel>
          <p>
            Ceci est un code
          </p>
        </TabPanel>
      </Tabs>
    </div>

    <div class="compoZone">
      <Todo />
    </div>
  </div>
</section>

<footer>
  <p>{new Date().getFullYear()} - GoofyComponentTeam</p>
  <div>
    <div><FaLinkedin /></div>
    <div
      on:click={() => {
        window.open("https://github.com/GoofyComponent/GoofyComponent");
      }}
    >
      <FaGithub />
    </div>
  </div>
</footer>
