<template>
  <div class="text-center">
    <div class="iq-button">
      <button
        type="button"
        class="btn text-uppercase position-relativ"
        @click="modal = !modal"
      >
        <span class="button-text">{{ $t("playlist.create_playlist") }}</span>
        <i class="fa-solid fa-play"></i>
      </button>
    </div>
  </div>
  <BModal v-model="modal" size="lg" hide-footer content-class="border-0">
    <template #header>
      <div>
        <h1 class="modal-title text-capitalize fs-5 fw-500">
          {{ $t("playlist.new_playlist") }}
        </h1>
        <p class="mb-0">{{ $t("playlist.information") }}</p>
      </div>
      <button type="button" class="btn-close" @click="modal = !modal"></button>
    </template>
    <form>
      <div class="form-group">
        <label class="text-white fw-500 mb-2"
          >{{ $t("playlist.name") }} *</label
        >
        <input type="text" class="form-control" />
      </div>
      <div class="form-group">
        <label class="text-white fw-500 mb-2">{{
          $t("playlist.description")
        }}</label>
        <textarea class="form-control" cols="5"></textarea>
      </div>
      <div class="form-group">
        <label class="text-white fw-500 mb-2">{{
          $t("playlist.privacy")
        }}</label>
        <select class="form-control">
          <option>{{ $t("playlist.public") }}</option>
          <option>{{ $t("playlist.private") }}</option>
        </select>
      </div>
      <div class="form-group">
        <label class="text-white fw-500">{{ $t("playlist.thumbnail") }}</label>
        <small class="d-block my-2">{{ $t("playlist.maximum_upload") }} </small>
        <input type="file" class="form-control" />
      </div>
      <div class="form-group d-flex align-items-center gap-3">
        <button
          type="button"
          class="btn btn-sm btn-light text-uppercase fw-medium"
          @click="modal = !modal"
        >
          {{ $t("playlist.cancel") }}
        </button>
        <button
          type="button"
          class="btn btn-sm btn-primary text-uppercase fw-medium"
          @click="modal = !modal"
        >
          {{ $t("playlist.save") }}
        </button>
      </div>
    </form>
  </BModal>
</template>
<script setup>
import { ref } from "vue";
const modal = ref(false);
</script>
<style>
.modal-open .bg-dark {
  --bs-bg-opacity: 0.5;
}
</style>
