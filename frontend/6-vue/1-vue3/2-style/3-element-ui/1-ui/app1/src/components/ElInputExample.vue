<template>
  <div>
    <h1>El-Input</h1>
    <el-input placeholder="Please input" v-model="inputText"></el-input>
    <el-input placeholder="Password" show-password v-model="inputPassword"></el-input>
    <el-input placeholder="Enter something" v-model="inputWithButton">
      <template #append>
        <el-button icon="el-icon-search">Search</el-button>
      </template>
    </el-input>
    <el-input placeholder="Clearable" clearable v-model="inputClearable"></el-input>
  </div>

  <div>
    <h1>El-Textarea</h1>
    <el-input type="textarea" placeholder="Textarea" v-model="inputTextarea"></el-input>
  </div>
</template>

<script setup>
import { ElInput, ElButton } from 'element-plus'
import { ref } from 'vue'

const inputText = ref('')
const inputPassword = ref('')
const inputWithButton = ref('')
const inputClearable = ref('')
const inputTextarea = ref('')
</script>

<style scoped>
</style>
