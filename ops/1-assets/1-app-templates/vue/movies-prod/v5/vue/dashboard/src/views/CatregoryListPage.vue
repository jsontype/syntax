<template>
  <b-container fluid>
    <b-row>
      <b-col sm="12">
        <b-card no-body>
          <b-card-header class="d-flex justify-content-between align-items-center">
            <div class="iq-header-title">
              <h4 class="card-title">Category Lists</h4>
            </div>
            <div class="card-header-toolbar d-flex align-items-center">
              <b-button variant="primary" @click="offcanvasEnd = true">Add Category</b-button>
            </div>
          </b-card-header>
          <b-card-body> </b-card-body>
        </b-card>

        <b-offcanvas v-model="offcanvasEnd" class="offcanvasright w-50" placement="end" title="Add Category"></b-offcanvas>
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup>
import { ref } from 'vue';
const offcanvasEnd = ref(false);
</script>
