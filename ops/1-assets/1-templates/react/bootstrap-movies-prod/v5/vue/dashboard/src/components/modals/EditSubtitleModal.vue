<template>
  <div>
    <b-button variant="primary" @click="editsubtitleModal = true"><i class="fa-solid fa-square-plus me-2"></i>{{ $t('episodemodal.edit_subtitle') }}</b-button>
    <b-modal v-model="editsubtitleModal" :title="$t('episodemodal.edit_subtitle')" :ok-title="$t('formelement.save_changes')" :cancel-title="$t('formelement.cancel')">
      <b-form>
        <label class="form-label flex-grow-1 px-3" for="subtitle">
          <strong>{{ $t('episodemodal.subtitle') }}</strong>
        </label>
        <div class="px-3 mb-3">
          <select ref="selectElement" class="form-control select2-basic-multiple" :placeholder="$t('movielist.gujrati')" :tabindex="tabindex">
            <option value="0">{{ $t('movielist.gujrati') }}</option>
            <option value="1">{{ $t('Datatable.hindi') }}</option>
            <option value="2">{{ $t('Datatable.english') }}</option>
            <option value="2">{{ $t('Datatable.french') }}</option>
            <option value="2">{{ $t('movielist.marathi') }}</option>
          </select>
        </div>
        <InputField v-model="subtitle_file" :label="$t('episodemodal.file')" name="subtitle_file" type="file" />
      </b-form>
    </b-modal>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import InputField from '../../components/partials/InputField.vue';
import Choices from 'choices.js';

const selectElement = ref(null);
const tabindex = '-1'; // Tab index

onMounted(() => {
  new Choices(selectElement.value, {
    searchEnabled: true,
    shouldSort: true,
  });
});

const editsubtitleModal = ref(false);
</script>
