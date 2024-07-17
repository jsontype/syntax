<template>
  <div id="archives-2" class="widget widget_archive">
    <h5 class="widget-title">{{ $t('form.archives') }}</h5>
    <ul>
      <li>
        <router-link :to="{ name: 'landing-page.blogs.filter', params: { type: 'date', date: 'February 2, 2019' } }">February 2019 </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'landing-page.blogs.filter', params: { type: 'date', date: 'January 30, 2019' } }">January 2019</router-link>
      </li>
    </ul>
  </div>
</template>
<script setup></script>
