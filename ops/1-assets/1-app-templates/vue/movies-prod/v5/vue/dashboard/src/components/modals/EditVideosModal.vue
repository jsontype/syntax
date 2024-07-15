<template>
  <div>
    <b-button variant="primary" @click="editVideoModal = true"><i class="fa-solid fa-square-plus me-2"></i>{{ $t('episodemodal.edit_video') }}</b-button>
    <b-modal v-model="editVideoModal" :title="$t('episodemodal.edit_video')" size="md" :ok-title="$t('formelement.save_changes')" :cancel-title="$t('castmodal.close')">
      <b-form>
        <b-row>
          <b-col sm="12">
            <label class="form-label flex-grow-1 px-3" for="subtitle">
              <strong>{{ $t('episodemodal.quality') }}:</strong>
            </label>
            <div class="px-3 mb-3">
              <select ref="selectElement" class="form-control select2-basic-multiple" placeholder="780p" :tabindex="tabindex" name="video_quality">
                <option value="0">480p</option>
                <option value="1">720p</option>
                <option value="2">1080P</option>
              </select>
            </div>
          </b-col>
          <b-col sm="12">
            <InputField v-model="video" :label="$t('sidebar.video')" name="video" type="file" />
          </b-col>
          <b-col sm="12">
            <InputField v-model="download_link" :label="$t('episodemodal.download_link')" name="download_link" type="toggle" class="d-flex align-self-start justify-content-between" />
          </b-col>
        </b-row>
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

const editVideoModal = ref(false);
</script>
