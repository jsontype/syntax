<template>
  <div class="flex">
    <!-- Backdrop -->
    <div
      :class="isOpen ? 'block' : 'hidden'"
      @click="isOpen = false"
      class="fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden"
    ></div>
    <!-- End Backdrop -->
    <div
      :class="isOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'"
      class="fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 transform bg-white text-[#000000] lg:translate-x-0 lg:static lg:inset-0"
    >
      <nav class="mt-10">
        <router-link
          class="flex items-center px-6 py-2 mt-4 duration-200"
          :class="[$route.name === 'Movie' ? activeClass : inactiveClass]"
          to="/movie"
        >
          <span class="mx-4 font-bold text-[21px]">Movie App</span>
        </router-link>
        <router-link
          class="flex items-center px-6 py-2 mt-4 duration-200"
          :class="[$route.name === 'Account' ? activeClass : inactiveClass]"
          to="/account"
        >
          <span class="mx-4 font-bold text-[21px]">Account</span>
        </router-link>
      </nav>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useSidebar } from "/src/hooks/useSidebar";

const { isOpen } = useSidebar();
const activeClass = ref("bg-[#E2E9FF] border-gray-100");
const inactiveClass = ref("border-gray-900 text-gray-500 hover:bg-gray-600 hover:bg-opacity-25 hover:text-gray-100");
</script>
