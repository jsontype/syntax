<template>
  <header
    class="flex items-center justify-between px-6 py-4 bg-white"
  >
    <div class="flex items-center">
      <button
        @click="isOpen = true"
        class="text-gray-500 focus:outline-none lg:hidden"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 16.9999C21 17.5522 20.5523 17.9999 20 17.9999L4 17.9999C3.44772 17.9999 3 17.5522 3 16.9999C3 16.4477 3.44772 15.9999 4 15.9999L20 15.9999C20.5523 15.9999 21 16.4477 21 16.9999Z" fill="#335FFF"/>
          <path d="M21 11.9999C21 12.5522 20.5523 12.9999 20 12.9999L4 12.9999C3.44772 12.9999 3 12.5522 3 11.9999C3 11.4477 3.44772 10.9999 4 10.9999L20 10.9999C20.5523 10.9999 21 11.4477 21 11.9999Z" fill="#335FFF"/>
          <path d="M21 6.99994C21 7.55222 20.5523 7.99994 20 7.99994L4 7.99994C3.44771 7.99994 3 7.55222 3 6.99994C3 6.44766 3.44771 5.99994 4 5.99994L20 5.99994C20.5523 5.99994 21 6.44765 21 6.99994Z" fill="#335FFF"/>
        </svg>
      </button>

      <div class="relative mx-4 lg:mx-0">
        <h2 class="ml-2 font-bold text-[20px]">Menu Title</h2>
      </div>
    </div>

    <div class="flex items-center">
      <div class="relative">
        <button
          @click="onClick"
          class="relative z-10 block w-[145px] h-[44px] font-bold text-[16px] text-white bg-red-500 overflow-hidden rounded-full shadow focus:outline-none"
        >
          Home
        </button>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useSidebar } from "/src/hooks/useSidebar";

const { isOpen } = useSidebar();
const dropdownOpen = ref(false);
const router = useRouter();

const onClick = () => {
  router.push("/");
}
</script>
