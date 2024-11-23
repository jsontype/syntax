<h1>일반 변수: {count1}</h1>
<button on:click={() => count1++}>+</button>
<button on:click={() => count1--}>-</button>
<button on:click={() => count1 = 0}>Clear</button>

<h1>스토어 변수: {$count2}</h1>
<button on:click={() => plus()}>+</button>
<button on:click={() => minus()}>-</button>
<button on:click={() => clear()}>Clear</button>

<script>
// 일반 변수: 스토어에 저장되지 않아서, 페이지를 새로고침하면 초기화됨
let count1 = 0;

// 스토어 변수: 페이지를 새로고침해도 초기화되지 않음
import { count2 } from "src/store/index.js";
// 스토어 변수를 변경하는 함수들. 조작할 때 $를 붙여야 함.
function plus() {
  $count2 = $count2 + 1;
}
function minus() {
  $count2 = $count2 - 1;
}
function clear() {
  $count2 = 0;
}
</script>
