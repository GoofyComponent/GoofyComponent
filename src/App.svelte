<script>
  import Review from './UI/review/review.svelte';
	import { Tabs, TabList, TabPanel, Tab } from './UI/Tab/tabs.js';
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
