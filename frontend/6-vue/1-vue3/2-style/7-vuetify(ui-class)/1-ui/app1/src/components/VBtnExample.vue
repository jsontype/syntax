<template>
  <div>
    <h1>V-Button Examples</h1>
    <v-btn>Default</v-btn>
    <v-btn color="primary">Primary</v-btn>
    <v-btn color="secondary">Secondary</v-btn>
    <v-btn color="success">Success</v-btn>
    <v-btn color="info">Info</v-btn>
    <v-btn color="warning">Warning</v-btn>
    <v-btn color="error">Danger</v-btn>
    <v-btn outlined>Outlined</v-btn>
    <v-btn rounded>Rounded</v-btn>
    <v-btn icon>
      <v-icon>
        <!-- 참조URL: https://flowbite.com/icons/ -->
        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.1 12.6v-1.8A5.4 5.4 0 0 0 13 5.6V3a1 1 0 0 0-2 0v2.4a5.4 5.4 0 0 0-4 5.5v1.8c0 2.4-1.9 3-1.9 4.2 0 .6 0 1.2.5 1.2h13c.5 0 .5-.6.5-1.2 0-1.2-1.9-1.8-1.9-4.2ZM6 6a1 1 0 0 1-.7-.3l-1-1a1 1 0 0 1 1.4-1.4l1 1A1 1 0 0 1 6 6Zm-2 4H3a1 1 0 0 1 0-2h1a1 1 0 1 1 0 2Zm14-4a1 1 0 0 1-.7-1.7l1-1a1 1 0 1 1 1.4 1.4l-1 1a1 1 0 0 1-.7.3Zm3 4h-1a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2ZM8.8 19a3.5 3.5 0 0 0 6.4 0H8.8Z"/>
        </svg>
      </v-icon>
    </v-btn>
    <v-btn disabled>Disabled</v-btn>
    <v-btn loading>Loading</v-btn>
  </div>
</template>

<script setup>
import { VBtn, VIcon } from 'vuetify/components'
</script>
