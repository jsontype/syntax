<template>
  <div class="input-field">
    <label for="name-input">이름 입력:</label>
    <input 
      id="name-input"
      type="text" 
      :value="name" 
      @input="updateName" 
      placeholder="이름을 입력하세요..."
      class="text-input"
    />
  </div>
</template>

<script lang="ts">
// 1. options api
// export default {
//   name: "InputField",
//   props: {
//     name: {
//       type: String,
//       required: true,
//       default: "이름없음"
//     }
//   },
//   methods: {
//     updateName(e) {
//       console.log(e.target.value)
//       this.$emit('update-name', e.target.value)
//     }
//   }
// }

// 2. class api
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class InputField extends Vue {
  @Prop({ type: String, required: true, default: "이름없음" }) 
  private name!: string;

  private updateName(e: Event): void {
    const target = e.target as HTMLInputElement;
    console.log("Input value:", target.value);
    this.$emit("update-name", target.value);
  }
}
</script>
