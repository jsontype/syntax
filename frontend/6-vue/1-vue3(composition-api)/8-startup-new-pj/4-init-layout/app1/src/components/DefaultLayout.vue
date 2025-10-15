<template>
  <div class="flex h-screen font-roboto">
    <Sidebar />

    <div class="flex-1 flex flex-col overflow-hidden">
      <Header />

      <main class="flex-1 overflow-x-hidden overflow-y-auto">
        <div class="container mx-auto px-6 py-8">
          <slot />
        </div>
      </main>
      
      <Footer />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Sidebar from "/src/components/organisms/Sidebar.vue";
import Header from "/src/components/organisms/Header.vue";
import Footer from "/src/components/organisms/Footer.vue";
</script>
