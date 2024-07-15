<template>
  <div>
    <NuxtLayout>
      <Head>
        <Title>{{ title }} - Nichol Nuxt 3 & Tailwind CSS Personal Portfolio Templates</Title>
        <link rel='icon' type='image/png' href='/favicon.png'>
      </Head>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
import { ref, onBeforeMount } from 'vue';

defineProps({
  title: {
    type: String,
    default: "Nichol"
  }
});
</script>
