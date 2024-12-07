<!-- Props 보내면서 자식 Component에 보낼 수 있다. -->
<MessageComponent message="Hello world" count={count} />
<button on:click={() => count++}>+</button>
<button on:click={() => count--}>-</button>

<script>
import MessageComponent from 'src/components/MessageComponent/index.svelte';  
let count = 0;
</script>
