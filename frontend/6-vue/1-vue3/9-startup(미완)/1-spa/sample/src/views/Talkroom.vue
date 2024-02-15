<template>
  <div>
    <div>
      <div v-for="(item, index) in content" :key="index" v-html="item"></div>
    </div>

    <div class="fixed bottom-[145px]">
      <TextButton v-if="isStreaming" />
      <button
        class="fixed flex justify-center items-center center-button w-[80px] h-[80px] rounded-full"
        @click="isStreaming ? stop() : start()" 
        :class="{ 'bg-[#335FFF]': !isStreaming, 'bg-[#FC325E]': isStreaming }"
      >
        <RecordStartIcon v-if="!isStreaming" />
        <RecordStopIcon v-else-if="isStreaming" />
      </button>
      <button
        class="fixed flex justify-center items-center right-button w-[80px] h-[80px]"
      >
        <KeyboardStartIcon v-if="!isStreaming" />
        <KeyboardStopIcon v-if="isStreaming" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import RecordStartIcon from "/src/assets/recordStart.svg";
import RecordStopIcon from "/src/assets/recordStop.svg";
import KeyboardStartIcon from "/src/assets/keyboardStart.svg";
import KeyboardStopIcon from "/src/assets/keyboardStop.svg";
import TextButton from "/src/components/atoms/buttons/TextButton.vue";

const content = ref(['結果:\n']);
const statusText = ref('');
const isStreaming = ref(false);

onMounted(() => {
});

const start = async () => {
  isStreaming.value = true;
};

const stop = async () => {
  isStreaming.value = false;
};
</script>

<style lang="scss" scoped>
.left-button {
  left: calc(35% - 40px);
}

.center-button {
  left: calc(50% - 40px);
}

.right-button {
  left: calc(65% - 40px);
}
</style>
