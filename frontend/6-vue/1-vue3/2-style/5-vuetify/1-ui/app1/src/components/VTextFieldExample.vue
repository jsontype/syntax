<template>
  <div>
    <h1>V-TextField Examples</h1>
    <v-text-field label="Standard" v-model="text"></v-text-field>
    <v-text-field label="Search" append-icon="mdi-magnify" v-model="textWithIcon"></v-text-field>
    <v-text-field label="Password" type="password" v-model="password" append-icon="mdi-eye"></v-text-field>
    <v-text-field label="Error" :error-messages="['Error message']" v-model="textWithError" class="mb-5"></v-text-field>
    <v-text-field label="Textarea" type="textarea" v-model="textarea"></v-text-field>
    <v-text-field label="Counter" counter v-model="textWithCounter"></v-text-field>
    <v-text-field label="Disabled" disabled v-model="disabledText"></v-text-field>
  </div>
</template>

<script setup>
import { VTextField } from 'vuetify/components'
import { ref } from 'vue'

const text = ref('')
const textWithIcon = ref('')
const password = ref('')
const textWithError = ref('')
const textWithSuccess = ref('')
const disabledText = ref('')
const textarea = ref('')
const textWithCounter = ref('')
</script>
