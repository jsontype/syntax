<template>
  <h1>B-Card</h1>
  <div class="d-flex">
    <b-card
      class="w-25"
      title="Card Title"
      img-src="https://placekitten.com/200/200"
      img-alt="Image"
      img-top
    >
      <b-card-text>
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </b-card-text>
      <b-button variant="primary">Go somewhere</b-button>
    </b-card>
    <b-card
      class="w-25"
      title="Card Title"
      img-src="https://placekitten.com/200/100"
      img-alt="Image"
      img-top
    >
      <b-card-text>
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </b-card-text>
      <b-button variant="primary">Go somewhere</b-button>
    </b-card>
  </div>
</template>

<script setup>
import { BCard, BButton } from 'bootstrap-vue-3';
</script>
