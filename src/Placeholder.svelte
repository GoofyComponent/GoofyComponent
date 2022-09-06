<script>
  import AlertModal from "./UI/AlertModal/AlertModal.svelte";
  import Collapse from "./UI/Collapse/Collapse.svelte";
  let btnTrigger = false;
</script>

<header>
  <div class="text">
    <h1>GoofyComponents</h1>
    <h2>The Svelte Component Library</h2>
    <h3>"AUUUGGHHHH"</h3>
  </div>
  <div class="icon">
    <div class="circle" />
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
      <p>Color</p>
    </div>
  </nav>

  <div class="displayCompoContain" id="alertmodal">
    <div class="text">
      <h4>AlertModal</h4>
      <p>Utilisation</p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
        atque error, quos corrupti enim qui deserunt veniam perferendis
        exercitationem sint asperiores, blanditiis accusantium iusto saepe
        repudiandae eaque officia dicta itaque.
      </p>
    </div>

    <div class="compoZone">
      <button
        on:click={() => {
          btnTrigger = !btnTrigger;
        }}
        class="alertModalBtn">Cliquez-moi</button
      >
      {#if btnTrigger}
        <AlertModal
          btn={true}
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
    </div>
  </div>
  <div class="displayCompoContain" id="collapse">
    <div class="text">
      <h4>Collapse</h4>
      <p>Utilisation</p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
        atque error, quos corrupti enim qui deserunt veniam perferendis
        exercitationem sint asperiores, blanditiis accusantium iusto saepe
        repudiandae eaque officia dicta itaque.
      </p>
    </div>

    <div class="compoZone">
      <Collapse
        sectionName={"Section 1"}
        sectionContent={"Section 1 content"}
      />
    </div>
  </div>
  <div class="displayCompoContain" id="review">
    <div class="text">
      <h4>Review</h4>
      <p>Utilisation</p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
        atque error, quos corrupti enim qui deserunt veniam perferendis
        exercitationem sint asperiores, blanditiis accusantium iusto saepe
        repudiandae eaque officia dicta itaque.
      </p>
    </div>

    <div class="compoZone" />
  </div>
  <div class="displayCompoContain" id="tabs">
    <div class="text">
      <h4>Tabs</h4>
      <p>Utilisation</p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
        atque error, quos corrupti enim qui deserunt veniam perferendis
        exercitationem sint asperiores, blanditiis accusantium iusto saepe
        repudiandae eaque officia dicta itaque.
      </p>
    </div>

    <div class="compoZone" />
  </div>
  <div class="displayCompoContain" id="calc">
    <div class="text">
      <h4>Calc</h4>
      <p>Utilisation</p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
        atque error, quos corrupti enim qui deserunt veniam perferendis
        exercitationem sint asperiores, blanditiis accusantium iusto saepe
        repudiandae eaque officia dicta itaque.
      </p>
    </div>

    <div class="compoZone" />
  </div>
  <div class="displayCompoContain" id="color">
    <div class="text">
      <h4>Color</h4>
      <p>Utilisation</p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
        atque error, quos corrupti enim qui deserunt veniam perferendis
        exercitationem sint asperiores, blanditiis accusantium iusto saepe
        repudiandae eaque officia dicta itaque.
      </p>
    </div>

    <div class="compoZone" />
  </div>
</section>
