<template>
  <div id="archives-2" class="widget widget_archive">
    <h5 class="widget-title">{{ $t("form.archives") }}</h5>
    <ul>
      <li>
        <nuxt-link :to="{ name: 'blogs-filter-type', params: { type: 'date' } }"
          >February 2019
        </nuxt-link>
      </li>
      <li>
        <nuxt-link :to="{ name: 'blogs-filter-type', params: { type: 'date' } }"
          >January 2019</nuxt-link
        >
      </li>
    </ul>
  </div>
</template>
<script setup></script>
