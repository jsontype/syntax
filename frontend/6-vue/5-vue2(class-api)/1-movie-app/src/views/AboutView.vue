<template>
  <div class="about">
    <h1>This is an about page</h1>
    <InputField :name="name" @update-name="updateName" />

  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import InputField from "@/components/Movies/InputField/index.vue";

@Component({
  components: {
    InputField,
  },
})
export default class AboutView extends Vue {
  private name: string = "Initial Name";

  private updateName(newName: string): void {
    this.name = newName;
  }

  // <!-- 생명주기: 타 페이지 create -> 이 페이지의 destory -> 타 페이지 mount -->
  beforeDestroy() {
    console.log("AboutView: beforeDestroy");
  }
  destroyed() {
    console.log("AboutView: destroyed");
  }
}
</script>
