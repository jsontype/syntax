<template>
  <b-row>
    <b-col lg="6" sm="12">
      <b-card no-body>
        <b-card-header header-class="d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">{{ $t('formelement.basic_form') }}</h4>
          </div>
        </b-card-header>
        <b-card-body>
          <b-form>
            <b-form-group>
              <label for="input-01" class="form-label">{{ $t('formelement.email_address:') }}</label>
              <b-form-input id="input-01"></b-form-input>
            </b-form-group>
            <b-form-group class="mt-3">
              <label for="input-02" class="form-label">{{ $t('formelement.password:') }}</label>
              <b-form-input id="input-02"></b-form-input>
            </b-form-group>

            <b-form-group class="mt-3 mb-3">
              <b-form-checkbox>{{ $t('formelement.remember_me') }}</b-form-checkbox>
            </b-form-group>
            <div class="d-flex flex-wrap">
              <b-button variant="primary" class="me-1">{{ $t('formelement.submit') }}</b-button>
              <b-button variant="danger">{{ $t('formelement.cancel') }}</b-button>
            </div>
          </b-form>
        </b-card-body>
      </b-card>
      <b-card no-body>
        <b-card-header header-class="d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">{{ $t('formelement.form_grid') }}</h4>
          </div>
        </b-card-header>
        <b-card-body>
          <b-form>
            <b-row>
              <b-col>
                <b-form-input :placeholder="$t('formelement.first_name')"></b-form-input>
              </b-col>
              <b-col>
                <b-form-input type="text" :placeholder="$t('formelement.last_name')"></b-form-input>
              </b-col>
            </b-row>
          </b-form>
        </b-card-body>
      </b-card>

      <b-card no-body>
        <b-card-header header-class="d-flex justify-content-between">
          <div class="header-title">
            <b-card-title>{{ $t('formelement.input') }}</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <b-form>
            <b-form-group>
              <label for="input-101" class="form-label">{{ $t('formelement.input_text') }}</label>
              <b-form-input id="input-101" type="text" placeholder="Mark Jhon"></b-form-input>
            </b-form-group>
            <b-form-group class="mt-3">
              <label for="input-102" class="form-label">{{ $t('formelement.email_input') }}</label>
              <b-form-input id="input-102" type="email" placeholder="markjhon@gmail.com"></b-form-input>
            </b-form-group>
            <b-form-group class="mt-3">
              <label for="input-103" class="form-label">{{ $t('formelement.url_input') }} </label>
              <b-form-input id="input-103" type="url" placeholder="https://getbootstrap.com"></b-form-input>
            </b-form-group>
            <b-form-group class="mt-3">
              <label for="input-104" class="form-label">{{ $t('formelement.teliphone_input') }} </label>
              <b-form-input id="input-104" type="tel" placeholder="1-(555)-555-5555"></b-form-input>
            </b-form-group>
            <b-form-group class="mt-3">
              <label for="input-105" class="form-label">{{ $t('formelement.number_input') }} </label>
              <b-form-input id="input-105" type="number" placeholder="2356"></b-form-input>
            </b-form-group>
            <b-form-group class="mt-3">
              <label for="input-106" class="form-label">{{ $t('formelement.password_input') }} </label>
              <b-form-input id="input-106" type="password" model-value="markjhon123">markjhon123</b-form-input>
            </b-form-group>
            <b-form-group class="mt-3">
              <label for="input-107" class="form-label">{{ $t('formelement.date_input') }} </label>
              <b-form-input id="input-107" type="date" model-value="2019-12-18"></b-form-input>
            </b-form-group>
            <b-form-group class="mt-3">
              <label for="input-108" class="form-label">{{ $t('formelement.month_input') }} </label>
              <b-form-input id="input-108" type="month" model-value="2019-12"></b-form-input>
            </b-form-group>
            <b-form-group class="mt-3">
              <label for="input-109" class="form-label">{{ $t('formelement.week_input') }} </label>
              <b-form-input id="input-109" type="week" model-value="2019-W46"></b-form-input>
            </b-form-group>
            <b-form-group class="mt-3">
              <label for="input-110" class="form-label">{{ $t('formelement.time_input') }} </label>
              <b-form-input id="input-110" type="time" model-value="13:45"></b-form-input>
            </b-form-group>
            <b-form-group class="mt-3">
              <label for="input-111" class="form-label">{{ $t('formelement.date_time') }}</label>
              <b-form-input id="input-111" type="datetime-local" model-value="2019-12-19T13:45:00"></b-form-input>
            </b-form-group>
            <b-form-group class="mt-3 mb-3">
              <label for="input-112" class="form-label">{{ $t('formelement.example_textarea') }} </label>
              <b-form-textarea id="input-112" rows="5" max-rows="6"></b-form-textarea>
            </b-form-group>
            <div class="d-flex flex-wrap">
              <b-button variant="primary" class="me-1">{{ $t('formelement.submit') }}</b-button>
              <b-button variant="danger">{{ $t('formelement.cancel') }}</b-button>
            </div>
          </b-form>
        </b-card-body>
      </b-card>
      <b-card no-body>
        <b-card-header header-class="d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">{{ $t('formelement.input_size') }}</h4>
          </div>
        </b-card-header>
        <b-card-body>
          <b-form>
            <b-form-group>
              <label for="input-201" class="form-label">{{ $t('formelement.small') }}</label>
              <b-form-input id="input-201" size="sm" placeholder="form-control-sm"></b-form-input>
            </b-form-group>
            <b-form-group class="mt-3">
              <label for="input-202" class="form-label">{{ $t('formelement.default') }}</label>
              <b-form-input id="input-202" placeholder="form-control"></b-form-input>
            </b-form-group>
            <b-form-group class="mt-3">
              <label for="input-203" class="form-label">{{ $t('formelement.large') }}</label>
              <b-form-input id="input-203" size="lg" placeholder="form-control-lg"></b-form-input>
            </b-form-group>
          </b-form>
        </b-card-body>
      </b-card>

      <b-card no-body>
        <b-card-header header-class="d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">{{ $t('formelement.select_size') }}</h4>
          </div>
        </b-card-header>
        <b-card-body>
          <b-form class="mb-3">
            <b-form-group>
              <label for="input-201" class="form-label">{{ $t('formelement.small') }}</label>
              <b-form-select
id="input-201" v-model="select" :options="options1" size="sm"
                placeholder="form-control-lg"></b-form-select>
            </b-form-group>
            <b-form-group class="mt-3">
              <label for="input-202" class="form-label">{{ $t('formelement.default') }}</label>
              <b-form-select id="input-202" v-model="select" :options="options1"></b-form-select>
            </b-form-group>
            <b-form-group class="mt-3">
              <label for="input-203" class="form-label">{{ $t('formelement.large') }}</label>
              <b-form-select id="input-203" v-model="select" :options="options1" size="lg"></b-form-select>
            </b-form-group>
          </b-form>
        </b-card-body>
      </b-card>
    </b-col>
    <b-col lg="6" sm="12">
      <b-card no-body>
        <b-card-header header-class="d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">{{ $t('formelement.horizontal_form') }}</h4>
          </div>
        </b-card-header>
        <b-card-body>
          <b-form>
            <b-form-group>
              <b-row class="align-items-center">
                <b-col sm="3">
                  <label for="input-1101" class="form-label mb-0">{{ $t('formelement.email') }}:</label>
                </b-col>
                <b-col sm="9">
                  <b-form-input id="input-1101" :placeholder="$t('formelement.enter_email')"></b-form-input>
                </b-col>
              </b-row>
            </b-form-group>
            <b-form-group class="mt-3">
              <b-row class="align-items-center">
                <b-col sm="3">
                  <label for="input-1102" class="form-label mb-0">{{ $t('formelement.password') }}:</label>
                </b-col>
                <b-col sm="9">
                  <b-form-input
id="input-1102" type="password"
                    :placeholder="$t('formelement.enter_password')"></b-form-input>
                </b-col>
              </b-row>
            </b-form-group>
            <b-form-group class="mt-3 mb-3">
              <b-form-checkbox>{{ $t('formelement.remember_me') }}</b-form-checkbox>
            </b-form-group>
            <div class="d-flex flex-wrap mb-3">
              <b-button variant="primary" class="me-1">{{ $t('formelement.submit') }}</b-button>
              <b-button variant="danger">{{ $t('formelement.cancel') }}</b-button>
            </div>
          </b-form>
        </b-card-body>
      </b-card>
      <b-card no-body>
        <b-card-header header-class="d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">{{ $t('formelement.input') }}</h4>
          </div>
        </b-card-header>
        <b-card-body>
          <b-form>
            <b-form-group class="mb-3">
              <label class="form-label">{{ $t('formelement.disabled_input') }}</label>
              <b-form-input disabled placeholder="Mark Jhon"></b-form-input>
            </b-form-group>
          </b-form>
          <b-card-body>
            <b-form>
              <b-form-group class="mb-3">
                <b-row class="align-items-center">
                  <b-col sm="3">
                    <label for="input-2201" class="form-label mb-0">{{ $t('formelement.email') }}:</label>
                  </b-col>
                  <b-col sm="9">
                    <b-form-input id="input-2201" :placeholder="$t('formelement.enter_email')"></b-form-input>
                  </b-col>
                </b-row>
              </b-form-group>
              <b-form-group class="mt-3">
                <b-row class="align-items-center">
                  <b-col sm="3">
                    <label for="input-2202" class="form-label mb-0">{{ $t('formelement.password') }}:</label>
                  </b-col>
                  <b-col sm="9">
                    <b-form-input
id="input-2202" type="password"
                      :placeholder="$t('formelement.enter_password')"></b-form-input>
                  </b-col>
                </b-row>
              </b-form-group>
              <b-form-group class="mt-3 mb-3">
                <b-form-checkbox>{{ $t('formelement.remember_me') }}</b-form-checkbox>
              </b-form-group>
              <div class="d-flex flex-wrap mb-3">
                <b-button variant="primary" class="me-1">{{ $t('formelement.submit') }}</b-button>
                <b-button variant="danger">{{ $t('formelement.cancel') }}</b-button>
              </div>
            </b-form>
          </b-card-body>
        </b-card-body>
      </b-card>
      <b-card no-body>
        <b-card-header header-class="d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">{{ $t('formelement.form_row') }}</h4>
          </div>
        </b-card-header>
        <b-card-body>
          <b-form>
            <b-form-group>
              <label for="input-1301" class="form-label">{{ $t('formelement.readonly') }}</label>
              <b-form-input id="input-1301" readonly disabled placeholder="Mark Jhon"></b-form-input>
            </b-form-group>
            <b-form-group class="mt-3">
              <label class="form-label" for="exampleInputcolor">{{ $t('formelement.input_color') }}</label>
              <input id="exampleInputcolor" type="color" class="form-control" value="#50b5ff" />
            </b-form-group>
            <b-form-group class="mt-3">
              <label for="input-1303" class="form-label">{{ $t('formelement.select_input') }}</label>
              <b-form-select id="input-1303" v-model="select" :options="ageOptions"></b-form-select>
            </b-form-group>
            <b-form-group class="mt-3">
              <label for="input-1304" class="form-label">{{ $t('formelement.select_input_new') }}</label>
              <b-form-select id="input-1304" v-model="select" :options="options01" def></b-form-select>
            </b-form-group>
            <b-form-group class="mt-3">
              <label for="input-1305" class="form-label">{{ $t('formelement.default') }}</label>
              <b-form-select
id="input-1305" v-model="defaultSelected" :options="options001" :select-size="4"
                multiple></b-form-select>
            </b-form-group>
            <b-form-group class="mt-3">
              <label for="input-1306" class="form-label">{{ $t('formelement.example_multiple') }}</label>
              <b-form-select id="input-1306" :options="options02" multiple :select-size="4"></b-form-select>
            </b-form-group>
            <b-form-group class="mt-3">
              <label for="range-2" class="form-label">{{ $t('formelement.range_input') }}</label>
              <b-form-input
id="range-2" v-model="value" class="form-range" type="range" min="0" max="5"
                step="0.5"></b-form-input>
            </b-form-group>
            <b-form-group class="mt-3">
              <b-form-checkbox>{{ $t('formelement.default_checkbox') }}</b-form-checkbox>
              <b-form-checkbox v-model="checked" value="true">{{ $t('formelement.checked_checkbox') }}</b-form-checkbox>
              <b-form-checkbox disabled>{{ $t('formelement.disabled_checkbox') }}</b-form-checkbox>
              <b-form-checkbox v-model="checked" disabled value="true">{{ $t('formelement.disabled_checked_checkbox')
                }}</b-form-checkbox>
            </b-form-group>
            <b-form-group class="mt-3">
              <b-form-radio>Default radio</b-form-radio>
              <b-form-radio v-model="checked" value="true">{{ $t('formelement.default_checked_radio') }}</b-form-radio>
              <b-form-radio disabled>{{ $t('formelement.disabled_radio') }}</b-form-radio>
              <b-form-radio v-model="checked" disabled value="true">{{ $t('formelement.disabled_checked_radio')
                }}</b-form-radio>
              <b-form-radio v-model="selected" disabled value="true">{{ $t('formelement.selected_disabled_radio')
                }}</b-form-radio>
            </b-form-group>
            <b-form-group class="mt-3">
              <div class="custom-control custom-radio custom-control-inline">
                <input id="customRadio6" type="radio" name="customRadio1" class="custom-control-input" />
                {{ '' }}
                <label class="custom-control-label" for="customRadio6"> {{ $t('formelement.default_radio') }}</label>
              </div>
              <!-- <b-form-radio>{{ $t('formelement.default_radio') }}</b-form-radio> -->
              <b-form-checkbox>{{ $t('formelement.default_checkbox') }}</b-form-checkbox>
              <b-form-checkbox v-model="checked" value="true">{{ $t('formelement.checked_checkbox') }}</b-form-checkbox>
              <b-form-checkbox disabled>{{ $t('formelement.disabled_checkbox') }}</b-form-checkbox>
              <b-form-checkbox v-model="checked" disabled value="true">{{ $t('formelement.disabled_checked_checkbox')
                }}</b-form-checkbox>
            </b-form-group>
            <b-form-group class="mt-3">
              <div class="custom-control custom-radio custom-control-inline">
                <input id="customRadio8" type="radio" name="customRadio6" class="custom-control-input" checked="" />
                {{ '' }}
                <label class="custom-control-label" for="customRadio8"> {{ $t('formelement.selected_radio') }}</label>
              </div>
              <!-- <b-form-radio v-model="checked" value="true">{{ $t('formelement.selected_radio') }}</b-form-radio> -->
              <div class="custom-control custom-radio custom-control-inline">
                <input id="customRadio9" type="radio" name="customRadio7" class="custom-control-input" disabled="" />
                {{ '' }}
                <label class="custom-control-label" for="customRadio9">{{ $t('formelement.disabled_radio') }}</label>
              </div>
              <!-- <b-form-radio disabled>{{ $t('formelement.disabled_radio') }}</b-form-radio> -->
              <div class="custom-control custom-radio custom-control-inline">
                <input
id="customRadio10" type="radio" name="customRadio8" class="custom-control-input" disabled=""
                  checked="" />
                {{ '' }}
                <label class="custom-control-label" for="customRadio10"> {{ $t('formelement.selected_disabled_radio')
                  }}</label>
              </div>
              <!-- <b-form-radio v-model="selected" value="true" disabled>{{ $t('formelement.selected_disabled_radio') }}</b-form-radio> -->
            </b-form-group>
            <b-form-group class="mt-3">
              <b-form-checkbox switch>{{ $t('formelement.default_input') }}</b-form-checkbox>
            </b-form-group>
            <b-form-group class="">
              <label for="files-1">{{ $t('formelement.choose_file') }}</label>
              <b-form-file
id="files-3" class="mt-2" multiple :file-name-formatter="formatNames"
                browse-text="file"></b-form-file>
            </b-form-group>
            <b-form-group class="mt-3">
              <label for="files-2">{{ $t('formelement.example_file') }}</label>
              <b-form-file id="files-3" class="mt-2" multiple :file-name-formatter="formatNames"></b-form-file>
            </b-form-group>
            <b-form-group class="mt-3 mb-3">
              <label for="files-3">{{ $t('formelement.choose_file') }}</label>
              <b-form-file id="files-3" class="mt-2" multiple :file-name-formatter="formatNames"></b-form-file>
            </b-form-group>

            <div class="d-flex flex-wrap">
              <b-button variant="primary" class="me-1">{{ $t('formelement.submit') }}</b-button>
              <b-button variant="danger">{{ $t('formelement.cancel') }}</b-button>
            </div>
          </b-form>
        </b-card-body>
      </b-card>
    </b-col>
  </b-row>
</template>

<script setup>
import { ref } from 'vue';
const select = null;
const checked = ref('true');
const selected = ref('true');

const ageOptions = [
  { value: null, text: 'Select your age' },
  { value: 'child', text: '0-18' },
  { value: 'Young', text: '19-30' },
  { value: 'adult', text: '31-49' },
  { value: 'senior-citizen', text: '50-99' },
];
const options1 = [
  { value: null, text: 'Open this select menu' },
  { value: 'One', text: 'One' },
  { value: 'Two', text: 'Two' },
  { value: 'Three', text: 'Three' },
];

const options01 = [
  { value: null, text: 'This is a placeholder' },
  { value: 'Choice 1', text: 'Choice 1' },
  { value: 'Choice 2', text: 'Choice 2' },
  { value: 'Choice 3', text: 'Choice 3' },
  { value: 'Choice 4', text: 'Choice 4' },
];

const options001 = [
  { value: 'Choice 1', text: 'Choice 1' },
  { value: 'Choice 2', text: 'Choice 2' },
  { value: 'Choice 3', text: 'Choice 3' },
  { value: 'Choice 4', text: 'Choice 4' },
];

const defaultSelected = ref(['Choice 1'])

const options02 = [
  { value: 'select-1', text: 'select-1' },
  { value: 'select-2', text: 'select-2' },
  { value: 'select-3', text: 'select-3' },
  { value: 'select-4', text: 'select-4' },
  { value: 'select-5', text: 'select-5' },
  { value: 'select-6', text: 'select-6' },
  { value: 'select-7', text: 'select-7' },
  { value: 'select-8', text: 'select-8' },
];
</script>
