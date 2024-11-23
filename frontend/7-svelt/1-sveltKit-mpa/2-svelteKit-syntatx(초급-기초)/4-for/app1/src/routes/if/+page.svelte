{#if loggedIn}
  <p>Welcome back!</p>
{:else}
  <p>Please log in.</p>
{/if}
<button on:click={() => (loggedIn = !loggedIn)}>
  Toggle Login
</button>

<script>
let loggedIn = false;
</script>
