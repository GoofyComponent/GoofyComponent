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
  import CodeSpace from "./UI/CodeSpace/CodeSpace.svelte";

  let btnTrigger = false;
  let linkedinTrigger = false;
  let demoColor = "#006BD7";
  let demoInput = "";
  let checkDemo = false;

  function escapeHtml(text) {
    var map = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    };

    return text.replace(/[&<>"']/g, function (m) {
      return map[m];
    });
  }
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
      <p>ToDo - J??r??my</p>
    </div>
    <div
      on:click={(e) => {
        e.preventDefault();
        document.getElementById("codespace").scrollIntoView();
      }}
    >
      <p>CodeSpace</p>
    </div>
  </nav>

  <div class="displayCompoContain" id="alertmodal">
    <div class="text">
      <h4>AlertModal <span class="teamname">- Antoine</span></h4>
      <Tabs>
        <TabList>
          <Tab>Utilisation</Tab>
          <Tab>Code</Tab>
        </TabList>
        <TabPanel>
          <h5 class="titleexplicationprops">Description:</h5>
          <p class="explicationpropscontent">
            Affiche une modal en superposition sur le reste de la page. Le
            titre, le texte peuvent ??tre personnalis??s. Des boutons d'action
            peuvent etre ajout??s, et l'on peux ajouter la fonction voulu.
          </p>
          <h5 class="titleexplicationprops">Les props:</h5>
          <h6 class="explicationpropstilte">btn :</h6>
          <p class="explicationpropscontent">
            Bool??en - Active ou desactive les boutons de confirmation. Si false,
            laisse uniquement un bouton
          </p>
          <h6 class="titleexplicationprops">modalTitle :</h6>
          <p class="titleexplicationprops">String - Titre de la modale</p>
          <h6 class="titleexplicationprops">modalContent :</h6>
          <p class="titleexplicationprops">String - Le contenu de la modale</p>
          <h6 class="titleexplicationprops">ConfirmMsg :</h6>
          <p class="titleexplicationprops">
            String - Le message du bouton de confirmation ou de fermeture
          </p>
          <h6 class="titleexplicationprops">rejectMsg :</h6>
          <p class="titleexplicationprops">
            String - Le message du bouton de rejet
          </p>
          <h6 class="titleexplicationprops">confirmAction :</h6>
          <p class="titleexplicationprops">
            Function - La fonction ?? executer lors de la confirmation de la
            modale
          </p>
          <h6 class="titleexplicationprops">rejectAction :</h6>
          <p class="titleexplicationprops">
            Function - La fonction ?? executer lors du rejet de la modale
          </p>
        </TabPanel>
        <TabPanel>
          <div style="margin: 1em 1em">
            <CodeSpace title={"Code du AlertModal"}>
              <!-- Display html tag as text -->
              <pre>
{`<button
    on:click={() => {
      btnTrigger = !btnTrigger;
    }}
    class="alertModalBtn">Cliquez-moi !</button>
    {#if btnTrigger}
      <AlertModal
        btn={true}
        modalContent={"Vous avez ouvert la modal., voulez vous la fermer ?"}
        rejectMsg={"Oui"}
        confirmMsg={"Oui mais en mieux"}
        confirmAction={() => {
          {
            alert("Vous avez cliqu?? mais en mieux");
            btnTrigger = !btnTrigger;
          }
        }}
        rejectAction={() => {
          {
            btnTrigger = !btnTrigger;
          }
        }}
      />
    {/if}`}
              </pre>
            </CodeSpace>
          </div>
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
              alert("Vous avez cliqu?? mais en mieux");
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
      <h4>Collapse <span class="teamname">- Antoine</span></h4>
      <Tabs>
        <TabList>
          <Tab>Utilisation</Tab>
          <Tab>Code</Tab>
        </TabList>
        <TabPanel>
          <h5 class="titleexplicationprops">Description:</h5>
          <p class="explicationpropscontent">
            Permet de placer des bloc de textes qui peuvent ??tre depli??s ou non.
          </p>
          <h5 class="titleexplicationprops">Les props:</h5>
          <h6 class="explicationpropstilte">sectionName :</h6>
          <p class="explicationpropscontent">
            String - Le nom de la section ?? afficher
          </p>
          <h6 class="titleexplicationprops">sectionContent :</h6>
          <p class="titleexplicationprops">
            String - Le contenu de la section ?? afficher
          </p>
        </TabPanel>
        <TabPanel>
          <div style="margin: 1em 1em">
            <CodeSpace title={"Code du Collapse"}>
              <!-- Display html tag as text -->
              <pre>
{`<Collapse
    sectionName={"Section 1"}
    sectionContent={"Ceci est une collapse, le bloc peut ??tre ouvert ou ferm??."}
  />`}
              </pre>
            </CodeSpace>
          </div>
        </TabPanel>
      </Tabs>
    </div>

    <div class="compoZone">
      <Collapse
        sectionName={"Section 1"}
        sectionContent={"Ceci est une collapse, le bloc peut ??tre ouvert ou ferm??."}
      />
    </div>
  </div>
  <div class="displayCompoContain" id="review">
    <div class="text">
      <h4>Review<span class="teamname">- Adrien</span></h4>
      <Tabs>
        <TabList>
          <Tab>Utilisation</Tab>
          <Tab>Code</Tab>
        </TabList>
        <TabPanel>
          <h5 class="titleexplicationprops">Description:</h5>
          <p class="explicationpropscontent">
            Permet d'afficher une review avec un nom, une note et un
            commentaire.
          </p>
          <h5 class="titleexplicationprops">Les props:</h5>
          <h6 class="explicationpropstilte">name :</h6>
          <p class="explicationpropscontent">
            String - Le nom de la personne qui a fait la review
          </p>
          <h6 class="explicationpropstilte">rating:</h6>
          <p class="explicationpropscontent">
            String - La variable qui contient la note de la review
          </p>
          <h6 class="explicationpropstilte">src:</h6>
          <p class="explicationpropscontent">
            String - La variable qui contient le lien de l'image de la review
          </p>
          <h6 class="explicationpropstilte">comments:</h6>
          <p class="explicationpropscontent">
            String - La variable qui contient le commentaire de la review
          </p>
        </TabPanel>
        <TabPanel>
          <CodeSpace title={"Code de la review"}>
            <pre>
{`<Review
name={"Jean-Louis"}
rating={4}
src="/Louis.jpeg"
comments={"Le Restaurant sert un tr??s bon Ricard. Le service est tr??s bon. Le cadre est tr??s bon. Le prix est tr??s bon. Et la serveuse..."}
/>`}
            </pre>
          </CodeSpace>
        </TabPanel>
      </Tabs>
    </div>

    <div class="compoZone">
      <Review
        name={"Jean-Louis"}
        rating={4}
        src="/Louis.jpeg"
        comments={"Le Restaurant sert un tr??s bon Ricard. Le service est tr??s bon. Le cadre est tr??s bon. Le prix est tr??s bon. Et la serveuse..."}
      />
    </div>
  </div>
  <div class="displayCompoContain" id="tabs">
    <div class="text">
      <h4>Tabs <span class="teamname">- Brandon</span></h4>
      <Tabs>
        <TabList>
          <Tab>Utilisation</Tab>
          <Tab>Code</Tab>
        </TabList>
        <TabPanel>
          <h5 class="titleexplicationprops">Description:</h5>
          <p class="explicationpropscontent">
            Permet de faire les diff??rents tableau avec des onglets.
          </p>
        </TabPanel>
        <TabPanel>
          <div style="margin: 1em 0">
            <CodeSpace title={"Code du CodeSpace"}>
              <pre>
{`<Tabs>
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
  </Tabs>`}
              </pre>
            </CodeSpace>
          </div>
        </TabPanel>
      </Tabs>
    </div>

    <div class="compoZone">
      <Tabs>
        <TabList>
          <Tab>Nouveau vlog au japon</Tab>
          <Tab>El Doggo</Tab>
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
          <iframe
          width="920"
          height="550"
          src="/DOGGO.jpg"
          title="DOGGO"
          frameborder="0"
          />
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
      <h4>Calc<span class="teamname">- Adrien</span></h4>
      <Tabs>
        <TabList>
          <Tab>Utilisation</Tab>
          <Tab>Code</Tab>
        </TabList>
        <TabPanel>
          <h5 class="titleexplicationprops">Description:</h5>
          <p class="explicationpropscontent">
            Permet d'afficher une calculatrice
          </p>
        </TabPanel>
        <TabPanel>
          <CodeSpace title={"Code de la calculatrice"}>
            <pre>
              {`<Calc />`}
            </pre>
          </CodeSpace>
        </TabPanel>
      </Tabs>
    </div>

    <div class="compoZone">
      <Calc />
    </div>
  </div>
  <div class="displayCompoContain" id="color">
    <div class="text">
      <h4>ColorPicker <span class="teamname">- Brandon</span></h4>
      <Tabs>
        <TabList>
          <Tab>Utilisation</Tab>
          <Tab>Code</Tab>
        </TabList>
        <TabPanel>
          <h5 class="titleexplicationprops">Description:</h5>
          <p class="explicationpropscontent">
            Une palette de couleur qui permet de choisir une couleur, d'en
            afficher la valeur hexad??cimal/RGB et de recuperer la valeur
            hexad??cimal en string dans une variable.
          </p>
          <h5 class="titleexplicationprops">Les props:</h5>
          <h6 class="explicationpropstilte">startColor :</h6>
          <p class="explicationpropscontent">
            String - La valeur hexad??cimale pour la couleur de d??part du
            colorPicker
          </p>
          <h6 class="explicationpropstilte">hexaVal :</h6>
          <p class="explicationpropscontent">
            String - La variable qui recevra le changement de couleur
          </p>
        </TabPanel>
        <TabPanel>
          <div style="margin: 1em 0">
            <CodeSpace title={"Code du CodeSpace"}>
              <pre>
{`[...]
let demoColor = "#006BD7";
let demoInput = "";
</script>
[...]
<div class="compoZone" style={"background-color:" + demoColor}>
    <Color startColor={demoColor} bind:hexaVal={demoColor} />
</div>`}
              </pre>
            </CodeSpace>
          </div>
        </TabPanel>
      </Tabs>
    </div>

    <div class="compoZone" style={"background-color:" + demoColor}>
      <Color startColor={demoColor} bind:hexaVal={demoColor} />
    </div>
  </div>
  <div class="displayCompoContain" id="textinput">
    <div class="text">
      <h4>TextInput <span class="teamname"> - Luca</span></h4>
      <Tabs>
        <TabList>
          <Tab>Utilisation</Tab>
          <Tab>Code</Tab>
        </TabList>
        <TabPanel>
          <h5 class="titleexplicationprops">Description:</h5>
          <p class="explicationpropscontent">Un input Text.</p>
          <h5 class="titleexplicationprops">Les props:</h5>
          <h6 class="explicationpropstilte">name :</h6>
          <p class="explicationpropscontent">
            String - La valeur entr??e dans l'input.
          </p>
          <h6 class="explicationpropstilte">placeholder :</h6>
          <p class="explicationpropscontent">
            String - La variable qui affichera le placeholder.
          </p>
        </TabPanel>
        <TabPanel>
          <div style="margin: 1em 0">
            <CodeSpace title={"Code du CodeSpace"}>
              <pre>
{`[...]
  export let placeholder;
  export let showPlaceholder = true;

  let placeholderStyle = "";
  export let name = "";

  if (!showPlaceholder) {
    placeholderStyle = "0px auto";
  } else {
    placeholderStyle = "15px auto";
  }
</script>
[...]
<div class="q-input" style="grid-template-rows: {placeholderStyle};">
  {#if showPlaceholder}
    <span class="title">{placeholder}</span>
  {/if}
  <label class="field a-field a-field_a1">
    <input bind:value={name} class="field__input a-field__input" />
  </label>
</div>`}
              </pre>
            </CodeSpace>
          </div>
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
      <h4>Checkbox <span class="teamname"> - Luca</span></h4>
      <Tabs>
        <TabList>
          <Tab>Utilisation</Tab>
          <Tab>Code</Tab>
        </TabList>
        <TabPanel>
          <h5 class="titleexplicationprops">Description:</h5>
          <p class="explicationpropscontent">
            Un bouton qui demande une validation.
          </p>
          <h5 class="titleexplicationprops">Les props:</h5>
          <h6 class="explicationpropstilte">sentenceA :</h6>
          <p class="explicationpropscontent">
            String - La valeur de la phrase 1.
          </p>
          <h6 class="explicationpropstilte">sentenceB :</h6>
          <p class="explicationpropscontent">
            String - La valeur de la phrase 2.
          </p>
          <h6 class="explicationpropstilte">yes :</h6>
          <p class="explicationpropscontent">
            Bool??en - la valeur qui active ou non le bouton en fonction de la
            checkBox.
          </p>
        </TabPanel>
        <TabPanel>
          <div style="margin: 1em 0">
            <CodeSpace title={"Code du CodeSpace"}>
              <pre>
{`[...]
  export let sentenceA;
  export let sentenceB;
  export let yes = false;
</script>
[...]
<div class="checkBox">
  <input type="checkbox" class="check" bind:checked={yes} />

  <p>
    {#if yes}
      {sentenceA}
    {:else}
      {sentenceB}
    {/if}
  </p>
</div>`}
              </pre>
            </CodeSpace>
          </div>
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
      <h4>ToDo<span class="teamname"> - J??r??my</span></h4>
      <Tabs>
        <TabList>
          <Tab>Utilisation</Tab>
          <Tab>Code</Tab>
        </TabList>
        <TabPanel>
          <h5 class="titleexplicationprops">Description:</h5>
          <p class="explicationpropscontent">
            Fen??tre o?? il est possible d'ajouter ce que l'on veut (liste de
            courses, todo-list) avec le boutton ajouter,apr??s avoir ajout?? ce
            que l'on veut le mot s'affiche et quand l'activit?? est effectu?? il
            est possible de la cochet ou de l'effacer. Possibilit?? de voir ce
            qui est complet?? et en cours.
          </p>
          <h5 class="titleexplicationprops">Les props:</h5>
          <p class="explicationpropscontent" /></TabPanel
        >
        <TabPanel>
          <div style="margin: 1em 0">
            <CodeSpace title={"Code de la Todo"}>
              {"<button on:click={addTask}> Ajouter </button>"}
            </CodeSpace>
          </div>
        </TabPanel>
      </Tabs>
    </div>

    <div class="compoZone">
      <Todo />
    </div>
  </div>
  <div class="displayCompoContain" id="codespace">
    <div class="text">
      <h4>CodeSpace <span class="teamname">- Antoine</span></h4>
      <Tabs>
        <TabList>
          <Tab>Utilisation</Tab>
          <Tab>Code</Tab>
        </TabList>
        <TabPanel>
          <h5 class="titleexplicationprops">Description:</h5>
          <p class="explicationpropscontent">
            Affiche un terminal dans un style macOS, il est possible de mettre
            du code ou du texte a l'interieur. Il suffit juste d'inserer le
            contenu dans la balise CodeSpace.
          </p>
          <h5 class="titleexplicationprops">Les props:</h5>
          <h6 class="explicationpropstilte">title :</h6>
          <p class="explicationpropscontent">
            String - Le nom du codeSpace ?? afficher
          </p>
        </TabPanel>
        <TabPanel>
          <div style="margin: 1em 0">
            <CodeSpace title={"Code du CodeSpace"}>
              {'<CodeSpace title={"Ceci est le titre du CodeSpace"}>hello</CodeSpace>'}
            </CodeSpace>
          </div>
        </TabPanel>
      </Tabs>
    </div>

    <div class="compoZone">
      <CodeSpace title={"Ceci est le titre du CodeSpace"}
        >hello, ceci est un texte dans un code block</CodeSpace
      >
    </div>
  </div>
</section>

<footer>
  <p>{new Date().getFullYear()} - GoofyComponentTeam</p>
  <div>
    <div
      on:click={() => {
        linkedinTrigger = !linkedinTrigger;
      }}
    >
      <FaLinkedin />
    </div>
    <div
      on:click={() => {
        window.open("https://github.com/GoofyComponent/GoofyComponent");
      }}
    >
      <FaGithub />
    </div>
  </div>
</footer>

{#if linkedinTrigger}
  <AlertModal
    btn={false}
    confirmAction={() => {
      linkedinTrigger = !linkedinTrigger;
    }}
    confirmMsg={"FERMER"}
    modalTitle={"Nos Linkedin"}
    modalContent={'<ul><li><a href="https://www.linkedin.com/in/luca-grousset-b9122a1b5/">https://www.linkedin.com/in/luca-grousset-b9122a1b5/</a></li><li><a href="https://www.linkedin.com/in/brandon-vo/">https://www.linkedin.com/in/brandon-vo/</a></li><li><a href="https://www.linkedin.com/in/jeremy-abdoelsomad/">https://www.linkedin.com/in/jeremy-abdoelsomad/</a></li><li><a href="https://www.linkedin.com/in/antoine-ads/">https://www.linkedin.com/in/antoine-ads/</a></li><li><a href="https://www.linkedin.com/in/adrien-albuquerque-213314177/">https://www.linkedin.com/in/adrien-albuquerque-213314177/</a></li></ul>'}
  />
{/if}
