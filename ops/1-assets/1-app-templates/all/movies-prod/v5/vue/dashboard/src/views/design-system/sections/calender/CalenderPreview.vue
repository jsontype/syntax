<template>
  <b-row>
    <b-col md="6" class="order-md-1">
      <div class="bd-example">
        <b-form-group>
          <flat-picker v-model="dateBasic" class-name="form-control" :config="datePicker" placeholder="Date Picker"></flat-picker>
        </b-form-group>
      </div>
      <div class="bd-example">
        <b-form-group>
          <flat-picker v-model="date" :config="{ mode: 'range', minDate: 'today', dateFormat: 'Y-m-d' }" name="date" placeholder="Range Date Picker" class="form-control"></flat-picker>
        </b-form-group>
      </div>
      <div class="bd-example">
        <b-form-group>
          <flat-picker id="time" v-model="inTime" :config="timePicker" class-name="form-control" placeholder="Time Picker" readonly="readonly"></flat-picker>
        </b-form-group>
      </div>
      <div class="bd-example">
        <b-form-group>
          <div class="input-group wrap_flatpicker">
            <flat-picker v-model="selectdate" class-name="form-control" :config="selectDate" placeholder="Select Date .."></flat-picker>

            <!-- input is mandatory -->
            <a class="input-group-text input-button pointer-event" title="toggle" data-toggle href="javascript:void(0)">
              <svg width="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </a>
            <a class="input-group-text input-button" title="clear" data-clear href="javascript:void(0)">
              <svg width="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </a>
          </div>
        </b-form-group>
      </div>
    </b-col>
    <b-col md="6" class="bd-example form-group order-md-0 mt-0">
      <flat-picker v-model="inlineDate" class-name="d-none" :config="inlineDatepicker" placeholder="select Date"></flat-picker>
    </b-col>
  </b-row>
</template>
<script setup>
import { ref } from 'vue';
import moment from 'moment';
import FlatPicker from 'vue-flatpickr-component';

const dateBasic = ref('');
const inlineDate = ref('');
const datePicker = ref({
  inline: false,
  minDate: 'today',
  dateFormat: 'Y-m-d',
});
const selectDate = ref({
  altInput: true,
  dateFormat: 'YYYY-MM-DD',
  altFormat: 'DD-MM-YYYY',
  allowInput: true,
  parseDate: (datestr, format) => {
    return moment(datestr, format, true).toDate();
  },
  formatDate: (date, format) => {
    // locale can also be used
    return moment(date).format(format);
  },
});
const inlineDatepicker = ref({
  inline: true,
  minDate: 'today',
  dateFormat: 'Y-m-d',
});
const timePicker = ref({
  wrap: true,
  enableTime: true,
  enableSeconds: false,
  noCalendar: true,
});
</script>
