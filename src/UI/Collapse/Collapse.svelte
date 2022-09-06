<script>
    import "./Collapse.css";
    import FaAngleDown from 'svelte-icons/fa/FaAngleDown.svelte';
    export let sectionName;
    export let sectionContent;
    let isOpen = false;
</script>

<section id="collapseContainer">
    <div class="collapseButton noSelect" on:click={() => {isOpen = !isOpen}} class:open="{isOpen === true}">
        <h2>{sectionName}</h2> 
        <div class="icon">
            <FaAngleDown />
        </div>
    </div>
    <div class="collapseContent" class:open="{isOpen === true}">
        <p>{sectionContent}</p>
    </div>   
</section>

<style>
/* Component container */

#collapseContainer {
  width: auto;
  margin: 0.5em;
}

/* Component Animation Closed */
#collapseContainer > .collapseButton {
  display: flex;
  justify-content: flex-start;
  min-height: 3em;
  min-width: 5em;
  border: solid 2px #5a5a5a;
  border-radius: 5px 5px 5px 5px;
}

#collapseContainer > .collapseButton:hover {
  cursor: pointer;
}

#collapseContainer > .collapseButton > h2 {
  padding: 0.4em;
  margin: 0;
}

#collapseContainer > .collapseButton > .icon {
  height: 3em;
}

#collapseContainer > .collapseContent {
  height: 0;
  overflow: hidden;
  opacity: 0;
  border: 2px transparent;
  padding: 0 0.4em;
  transition: height, opacity 0.1s, border 0.1s;
  transition-duration: 0.5s;
  transition-timing-function: ease-in-out;
}

#collapseContainer > .collapseContent > p {
  overflow-y: auto;
  height: 85%;
}

/* Component Animation Open */
#collapseContainer > .collapseButton.open {
  border-radius: 5px 5px 0 0;
}

.collapseContent.open {
  display: block !important;
  height: 10em !important;
  opacity: 1 !important;
  padding: 0.4em;
  border-right: #5a5a5a solid 2px !important;
  border-left: #5a5a5a solid 2px !important;
  border-bottom: #5a5a5a solid 2px !important;
}

</style>