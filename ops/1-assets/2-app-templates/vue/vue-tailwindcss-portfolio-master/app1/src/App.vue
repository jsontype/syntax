<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Logo from '@/assets/images/gatuma-logo.png'
</script>

<template>
  <div class="sm:max-w-6xl sm:mx-auto text-gray-500 py-5 transition-all">
    <!-- Header -->
    <div id="header" class="flex w-full justify-between px-2 sm:p-0">
      <!-- Logo -->
      <div id="logo">
        <img class="h-10" :src="Logo" alt="" />
      </div>
      <!-- Nav -->
      <div id="nav-menu" class="hidden sm:flex gap-10">
        <div class="text-white">
          <RouterLink to="/">Home</RouterLink>
        </div>
        <div>
          <RouterLink to="/about">About</RouterLink>
        </div>
        <div>
          <RouterLink to="/about">Works</RouterLink>
        </div>
        <div>
          <RouterLink to="/about">Contact</RouterLink>
        </div>
      </div>
      <!-- CTA Button -->
      <div id="cta-btn">
        <a
          href="#"
          class="bg-gray-700 text-white px-6 py-3 rounded-xl hover:bg-white hover:text-gray-700 transition-all"
        >
          Let's Talk
        </a>
      </div>
    </div>
    <!-- Router view -->
    <div class="my-10 sm:my-20 px-4 xl:p-0">
      <RouterView />
    </div>
    <!-- Footer -->
    <div class="flex flex-col items-center gap-8">
      <!-- Logo -->
      <div id="logo">
        <img class="h-12" :src="Logo" alt="" />
      </div>
      <!-- Nav -->
      <div id="nav-menu" class="flex gap-10">
        <div class="text-white">
          <RouterLink to="/">Home</RouterLink>
        </div>
        <div>
          <RouterLink to="/about">About</RouterLink>
        </div>
        <div>
          <RouterLink to="/about">Works</RouterLink>
        </div>
        <div>
          <RouterLink to="/about">Contact</RouterLink>
        </div>
      </div>
      <!-- Copyright -->
      <div class="text-gray-500">
        © 2023 <a href="#" class="text-blue-500">Gatuma</a>. All rights reserved.
      </div>
    </div>
  </div>
</template>
