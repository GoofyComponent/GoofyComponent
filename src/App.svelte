<script>
  import Review from "./UI/Review/Review.svelte";
  import { Tabs, TabList, TabPanel, Tab } from "./UI/Tab/tabs.js";
  import Collapse from "./UI/Collapse/Collapse.svelte";
  import Calc from "./UI/Calc/Calc.svelte";
</script>

<div>
  <Tabs>
    <TabList>
      <Tab>Review</Tab>
      <Tab>Collapse</Tab>
      <Tab>Calc</Tab>
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
    </TabPanel>
    <TabPanel>ANTOINE</TabPanel>
    <TabPanel>
      <Calc />
    </TabPanel>
  </Tabs>
</div>

<Collapse sectionName={"Section 1"} sectionContent={"Section 1 content"} />
<Collapse sectionName={"Section 2"} sectionContent={"Section 2 content"} />
