<script>
  import Review from './UI/review/review.svelte';
	import { Tabs, TabList, TabPanel, Tab } from './UI/Tab/tabs.js';
  import Collapse from './UI/Collapse/Collapse.svelte';
</script>

<div>
  <Tabs>
    <TabList>
      <Tab>
        Review
      </Tab>
      <Tab>
        Collapse
      </Tab>
    </TabList>
    <TabPanel>
      <Review rating="45" />
    </TabPanel>
    <TabPanel>
      ANTOINE
    </TabPanel>
  </Tabs>
</div>


<Collapse sectionName={"Section 1"} sectionContent={"Section 1 content"} />
<Collapse sectionName={"Section 2"} sectionContent={"Section 2 content"} />
