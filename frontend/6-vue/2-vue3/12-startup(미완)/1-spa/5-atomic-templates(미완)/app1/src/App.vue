<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useRouter } from "vue-router";

const defaultLayout = "default";

export default defineComponent({
  setup() {
    const { currentRoute } = useRouter();

    // 현재 라우트의 메타 데이터에 layout이 있으면 그걸 사용하고, 없으면 defaultLayout을 사용한다.
    // 다른 레이아웃을 추가로 넣고 싶다면, 이곳에 분기를 추가하면 된다.
    const layout = computed(
      () => `${currentRoute.value.meta.layout || defaultLayout}-layout`
    );

    return {
      layout,
    };
  },
});
</script>
