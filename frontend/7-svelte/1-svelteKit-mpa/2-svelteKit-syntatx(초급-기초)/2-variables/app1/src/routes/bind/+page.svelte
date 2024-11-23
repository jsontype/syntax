<!-- 이벤트처리 : on:<이벤트> -->
<button on:click={() => handleClick()} on:contextmenu={() => handleContextMenu()}>
  Count: {count}
</button>

<button on:click={() => handleAlert()}>
  Alert
</button>

<p>Double: {double}</p>

<script>
  let count = 0;

  // 함수 : Function
  function handleClick() {
    count += 1;    
  }
  function handleContextMenu() {
    count -= 1;
  }
  function handleAlert() {
    alert('Hello!');
  }

  // 반응형 변수 : Computed (count 변수가 변경될 때마다 자동으로 double 변수도 변경됨)
  $: double = count * 2;
</script>