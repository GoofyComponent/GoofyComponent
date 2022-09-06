<script>
  import Review from "./UI/review/review.svelte";
  import { Tabs, TabList, TabPanel, Tab } from "./UI/Tab/tabs.js";
  import Collapse from "./UI/Collapse/Collapse.svelte";
  import AlertModal from "./UI/AlertModal/AlertModal.svelte";
  import Check from "./UI/checkBox/Check.svelte";
  import InputText from "./UI/inputText/InputText.svelte";
  import Calc from "./UI/Calc/Calc.svelte";
  import Color from "./UI/Color/Color.svelte";
  import Todo from "./UI/Todo/Todo.svelte";

  let btnTrigger = false;
</script>

<div>
  <Tabs>
    <TabList>
      <Tab>Review</Tab>
      <Tab>Collapse + Alert Modal</Tab>
      <Tab>Input Text + Checkbox</Tab>
      <Tab>Calc</Tab>
      <Tab>Color</Tab>
      <Tab>Todo</Tab>
    </TabList>
    <TabPanel>
      <Review
        name={"Jean-Louis"}
        rating={4}
        src="/Louis.jpeg"
        comments={"Le Restaurant sert un très bon Ricard. Le service est très bon. Le cadre est très bon. Le prix est très bon. Et la serveuse..."}
      />
      <Review
        name={"Mélanie"}
        rating={2}
        src="/melanie.jpeg"
        comments={"Le service été deplorable il n'yavai pa de steak frite. Jai mis deux étoile pour la salade"}
      />
      <p>Adrien</p>
    </TabPanel>
    <TabPanel>
      <Collapse
        sectionName={"Section 1"}
        sectionContent={"Section 1 content"}
      />
      <Collapse
        sectionName={"Section 2"}
        sectionContent={"Section 2 content"}
      />
      <button
        on:click={() => {
          btnTrigger = !btnTrigger;
        }}>Lancer la modal</button
      >
      {#if btnTrigger}
        <AlertModal
          btn={true}
          confirmMsg={"Acceptation"}
          rejectMsg={"fermer le modal"}
          confirmAction={() => {
            {
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
      <p>Antoine</p>
    </TabPanel>
    <TabPanel>
      <Check
        sentenceA={" Parfait !!!  "}
        sentenceB={" veuillez cocher la case "}
      />
      <InputText placeholder={"entrez votre nom"} />
      <p>Luca</p>
    </TabPanel>
    <TabPanel>
      <Calc />
      <p>Adrien</p>
    </TabPanel>
    <TabPanel>
      <Color />
      <p>Brandon</p>
    </TabPanel>
    <TabPanel>
      <Todo />
      <p>Jeremy</p>
    </TabPanel>
  </Tabs>
</div>
