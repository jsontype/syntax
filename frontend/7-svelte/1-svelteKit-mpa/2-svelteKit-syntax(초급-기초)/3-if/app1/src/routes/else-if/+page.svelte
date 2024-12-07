{#if count > 6}
  <p>Count is over 6</p>
{:else if count > 5}
  <p>Count is over 5</p>
{:else if count > 4}
  <p>Count is over 4</p>
{:else if count > 3}
  <p>Count is over 3</p>
{:else if count > 2}
  <p>Count is over 2</p>
{:else}
  <p>Count is 2 or less</p>
{/if}

<h1>{count}</h1>

<button on:click={() => plus()}>
  +
</button>
<button on:click={() => minus()}>
  -
</button>
<button on:click={() => clear()}>
  Clear
</button>

<script>
  let count = 0;
  function plus() {
    count += 1;    
  }
  function minus() {
    count -= 1;
  }
  function clear() {
    count = 0;
  }
</script>
