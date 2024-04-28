<template>
  <div id="app">
    <button @click="changeLocale('en')">EN</button> | 
    <button @click="changeLocale('ja')">JA</button>
    <p>{{ t('message.hello') }}</p>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { locale, t } = useI18n();

function changeLocale(newLocale) {
  locale.value = newLocale;
}
</script>
