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
