<script>
  export let name;
  export let rating;
  export let comments;
</script>

<p>
  <slot>
    {name}
  </slot>
  gave this product
  <slot>
    {rating}
  </slot>
  stars.
</p>
<p>
  {comments}
</p>
