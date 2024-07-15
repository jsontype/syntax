<template>
  <div>
    <b-button variant="primary" @click="castModal = true"><i class="fa-solid fa-square-plus me-2"></i>{{ $t('castmodal.add_castCrew') }}</b-button>
    <b-modal v-model="castModal" :title="$t('castmodal.add_cast')" :ok-title="$t('castmodal.save')" :cancel-title="$t('castmodal.close')" @ok="formSubmit">
      <b-form class="section-form">
        <b-row>
          <b-col sm="12">
            <InputField v-model="person" name="person" :label="$t('castmodal.person')" type="text" :placeholder="$t('castmodal.enter_name')"></InputField>
          </b-col>
          <b-col sm="12">
            <label class="form-label flex-grow-1 px-3" for="quality">
              <strong>{{ $t('castmodal.occupation') }}:</strong>
            </label>
            <div class="px-3 mb-3">
              <select ref="selectElement" class="form-control select2-basic-multiple" :placeholder="$t('castmodal.director')" :tabindex="tabindex" name="video_quality">
                <option value="0">{{ $t('edit.cast') }}</option>
                <option value="1">{{ $t('edit.crew') }}</option>
                <option value="2">{{ $t('edit.producer') }}</option>
                <option value="2">{{ $t('castmodal.director') }}</option>
              </select>
            </div>
          </b-col>
          <b-col sm="12">
            <InputField :label="$t('castmodal.as')" type="text" :placeholder="$t('castmodal.played_as')"></InputField>
          </b-col>
          <b-col sm="12">
            <InputField :label="$t('castmodal.status')" type="toggle" placeholder="" class="d-flex align-self-start justify-content-between" name="status" />
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
const castModal = ref(false);
</script>
