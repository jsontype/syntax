<template>
  <b-row>
    <b-col sm="12">
      <b-card no-body>
        <b-card-header class="border-bottom d-flex justify-content-between align-items-center py-3">
          <div class="d-flex align-items-center gap-2 pt-3">
            <div class="mb-0">
              <select ref="selectElement" class="form-control select2-basic-multiple"
                :placeholder="$t('bordertable.no_action')" :tabindex="tabindex">
                <option value="0">{{ $t('bordertable.no_action') }}</option>
                <option value="1">{{ $t('bordertable.status') }}</option>
                <option value="2">{{ $t('edit.delete') }}</option>
              </select>
            </div>
            <b-button variant="primary" class="mb-0">{{ $t('bordertable.apply') }}</b-button>
          </div>
          <b-button variant="primary mt-3" class="mb-0" @click="offcanvasEnd = true"><i class="fa-solid fa-plus me-2"
              style="color: #fafcff"></i>{{ $t('edit.add_show') }}</b-button>
        </b-card-header>
        <b-card-body>
          <div class="table-view table-responsive table-space">
            <table id="datatable" ref="tableRef" class="data-tables table custom-table movie_table"
              data-toggle="data-table"></table>
          </div>
        </b-card-body>
      </b-card>

      <b-offcanvas v-model="offcanvasEnd" class="offcanvas-width-80" header-close-class="me-0"
        :placement="themeSchemeDirection !== 'ltr' ? 'start' : 'end'" :title="$t('edit.show_list')">
        <b-form class="section-form" @submit="formSubmit">
          <fieldset>
            <legend>{{ $t('edit.show') }}</legend>
            <b-row class="mt-3">
              <b-col lg="12">
                <InputField :label="$t('edit.show_name')" name="name" :is-required="true" type="text"
                  :placeholder="$t('edit.enter_show_name')" />
              </b-col>
              <b-col lg="12">
                <InputField v-model="shortDescription" :label="$t('edit.description')"
                  :placeholder="$t('edit.description')" type="textarea" />
              </b-col>
            </b-row>

            <b-row class="mt-3">
              <b-col lg="6">
                <label class="form-label flex-grow-1 px-3" for="movie-access"><strong>{{ $t('edit.show_access')
                    }}:</strong></label>
                <div class="px-3 mb-3">
                  <select ref="addMovieAccess" class="form-control select2-basic-multiple"
                    :placeholder="$t('movielist.select_movie_access')" :tabindex="tabindexaddMD">
                    <option value="0">{{ $t('pricing.free') }}</option>
                    <option value="1">{{ $t('movielist.standard') }}</option>
                    <option value="2">{{ $t('pricing.premium') }}</option>
                  </select>
                </div>
              </b-col>
              <b-col lg="6">
                <label class="form-label flex-grow-1 px-3" for="language"><strong>{{ $t('episodemodal.language')
                    }}:</strong></label>
                <div class="px-3 mb-3">
                  <select ref="addLanguage" class="form-control select2-basic-multiple"
                    :placeholder="$t('edit.select_languages')" :tabindex="tabindexLanguage">
                    <option value="0">{{ $t('Datatable.english') }}</option>
                    <option value="1">{{ $t('Datatable.hindi') }}</option>
                    <option value="2">{{ $t('Datatable.french') }}</option>
                  </select>
                </div>
              </b-col>
              <b-col lg="12">
                <label class="form-label flex-grow-1 px-3" for="genres"><strong>{{ $t('edit.genres')
                    }}:</strong></label>
                <div class="px-3 mb-3">
                  <select ref="addGenres" class="form-control select2-basic-multiple"
                    :placeholder="$t('edit.select_genres')" :tabindex="tabindexaddGenres">
                    <option value="0">{{ $t('edit.action') }}</option>
                    <option value="1">{{ $t('edit.adventure') }}</option>
                    <option value="2">{{ $t('movielist.animation') }}</option>
                    <option value="2">{{ $t('dashboard.comedy') }}</option>
                  </select>
                </div>
              </b-col>
            </b-row>
            <div class="d-flex justify-content-between align-items-center my-4 px-3">
              <h5>
                <strong>{{ $t('edit.casts&crews') }}</strong>
              </h5>
              <CastModal />
            </div>

            <b-row class="px-3">
              <div class="table-responsive">
                <table class="table table-bordered table-strip">
                  <thead>
                    <tr class="text-center">
                      <th>{{ $t('edit.casts/crews') }}</th>
                      <th>{{ $t('edit.name') }}</th>
                      <th>{{ $t('edit.role') }}</th>
                      <th>{{ $t('edit.action') }}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="text-center">
                      <td>{{ $t('edit.cast') }}</td>
                      <td>{{ $t('edit.abc') }}</td>
                      <td>{{ $t('edit.james') }}</td>
                      <td>
                        <div class="d-flex align-items-center justify-content-center">
                          <router-link v-b-tooltip.hover :title="$t('edit.edit')" to="#" class="text-success"><i
                              class="fa-solid fa-pen mx-4"></i></router-link>
                          <router-link v-b-tooltip.hover :title="$t('edit.delete')" to="#" class="text-danger"><i
                              class="fa-solid fa-trash me-4"></i></router-link>
                        </div>
                      </td>
                    </tr>
                    <tr class="text-center">
                      <td>{{ $t('edit.crew') }}</td>
                      <td>{{ $t('edit.xyz') }}</td>
                      <td>{{ $t('edit.producer') }}</td>
                      <td>
                        <div class="d-flex align-items-center justify-content-center">
                          <router-link v-b-tooltip.hover :title="$t('edit.edit')" to="#" class="text-success"><i
                              class="fa-solid fa-pen mx-4"></i></router-link>
                          <router-link v-b-tooltip.hover :title="$t('edit.delete')" to="#" class="text-danger"><i
                              class="fa-solid fa-trash me-4"></i></router-link>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </b-row>

            <b-row class="mt-5">
              <b-col lg="3">
                <InputField :label="$t('edit.content_rating')" type="text" :placeholder="$t('accesscontrol.rating')"
                  name="duration" />
              </b-col>
              <b-col lg="3">
                <InputField :label="$t('edit.release_date')" type="date" name="publish_date"
                  :placeholder="$t('edit.release_date')" />
              </b-col>
              <b-col lg="3">
                <InputField :label="$t('edit.publicsh_date')" type="date" name="publish_date"
                  :placeholder="$t('edit.publicsh_date')" />
              </b-col>
              <b-col lg="3">
                <InputField :label="$t('edit.duration')" type="text" :placeholder="$t('edit.durationinmin')"
                  name="duration" />
              </b-col>
              <b-col lg="12" class="mt-4">
                <InputField :label="$t('edit.status')" type="toggle" placeholder="" class="d-flex align-self-start"
                  name="status" />
              </b-col>
            </b-row>
          </fieldset>
        </b-form>
        <div class="offcanvas-footer border-top">
          <div class="d-grid d-flex gap-3 p-3">
            <b-button variant="primary" type="submit" class="d-block"><i class="fa-solid fa-floppy-disk me-2"></i>{{
                  $t('edit.save') }}</b-button>
            <b-button variant="outline-primary" type="button" class="d-block" @click="offcanvasEnd = false"><i
                class="fa-solid fa-angles-left me-2"></i>{{ $t('edit.close') }}</b-button>
          </div>
        </div>
      </b-offcanvas>
    </b-col>
    <b-offcanvas v-model="offcanvasEnd1" class="offcanvas-width-80" header-close-class="me-0"
      :placement="themeSchemeDirection !== 'ltr' ? 'start' : 'end'" :title="$t('edit.edit_show_list')">
      <b-form class="section-form" @submit="formSubmit">
        <fieldset>
          <legend>{{ $t('edit.show') }}</legend>
          <b-row class="mt-3">
            <b-col lg="12">
              <InputField :label="$t('edit.show_name')" name="name" :is-required="true" type="text"
                :model-value="$t('movielist.day_of_darkness')" :placeholder="$t('edit.enter_show_name')" />
            </b-col>
            <b-col lg="12">
              <InputField v-model="shortDescription" :label="$t('edit.description')"
                :model-value="$t('widgetcard.dummytext')" :placeholder="$t('edit.description')" type="textarea" />
            </b-col>
          </b-row>

          <b-row class="mt-3">
            <b-col lg="6">
              <label class="form-label flex-grow-1 px-3" for="movie-access"><strong>{{ $t('edit.show_access')
                  }}:</strong></label>
              <div class="px-3 mb-3">
                <select ref="addMovieAccess1" class="form-control select2-basic-multiple"
                  :placeholder="$t('movielist.select_movie_access')" :tabindex="tabindexaddMD1">
                  <option value="0">{{ $t('pricing.free') }}</option>
                  <option value="1">{{ $t('movielist.standard') }}</option>
                  <option value="2">{{ $t('pricing.premium') }}</option>
                </select>
              </div>
            </b-col>
            <b-col lg="6">
              <label class="form-label flex-grow-1 px-3" for="language"><strong>{{ $t('episodemodal.language')
                  }}:</strong></label>
              <div class="px-3 mb-3">
                <select ref="addLanguage1" class="form-control select2-basic-multiple"
                  :placeholder="$t('edit.select_languages')" :tabindex="tabindexLanguage1">
                  <option value="0">{{ $t('Datatable.english') }}</option>
                  <option value="1">{{ $t('Datatable.hindi') }}</option>
                  <option value="2">{{ $t('Datatable.french') }}</option>
                </select>
              </div>
            </b-col>
            <b-col lg="12">
              <label class="form-label flex-grow-1 px-3" for="genres"><strong>{{ $t('edit.genres') }}:</strong></label>
              <div class="px-3 mb-3">
                <select ref="addGenres1" class="form-control select2-basic-multiple"
                  :placeholder="$t('edit.select_genres')" :tabindex="tabindexaddGenres1">
                  <option value="0">{{ $t('edit.action') }}</option>
                  <option value="1">{{ $t('edit.adventure') }}</option>
                  <option value="2">{{ $t('movielist.animation') }}</option>
                  <option value="2">{{ $t('dashboard.comedy') }}</option>
                </select>
              </div>
            </b-col>
          </b-row>
          <div class="d-flex justify-content-between align-items-center my-4 px-3">
            <h5>
              <strong>{{ $t('edit.casts&crews') }}</strong>
            </h5>
            <EditCastModal />
          </div>

          <b-row class="px-3">
            <div class="table-responsive">
              <table class="table table-bordered table-strip">
                <thead>
                  <tr class="text-center">
                    <th>{{ $t('edit.casts/crews') }}</th>
                    <th>{{ $t('edit.name') }}</th>
                    <th>{{ $t('edit.role') }}</th>
                    <th>{{ $t('edit.action') }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="text-center">
                    <td>{{ $t('edit.cast') }}</td>
                    <td>{{ $t('edit.abc') }}</td>
                    <td>{{ $t('edit.james') }}</td>
                    <td>
                      <div class="d-flex align-items-center justify-content-center">
                        <router-link v-b-tooltip.hover :title="$t('edit.edit')" to="#" class="text-success"><i
                            class="fa-solid fa-pen mx-4"></i></router-link>
                        <router-link v-b-tooltip.hover :title="$t('edit.delete')" to="#" class="text-danger"><i
                            class="fa-solid fa-trash me-4"></i></router-link>
                      </div>
                    </td>
                  </tr>
                  <tr class="text-center">
                    <td>{{ $t('edit.crew') }}</td>
                    <td>{{ $t('edit.xyz') }}</td>
                    <td>{{ $t('edit.producer') }}</td>
                    <td>
                      <div class="d-flex align-items-center justify-content-center">
                        <router-link v-b-tooltip.hover :title="$t('edit.edit')" to="#" class="text-success"><i
                            class="fa-solid fa-pen mx-4"></i></router-link>
                        <router-link v-b-tooltip.hover :title="$t('edit.delete')" to="#" class="text-danger"><i
                            class="fa-solid fa-trash me-4"></i></router-link>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </b-row>

          <b-row class="mt-5">
            <b-col lg="3">
              <InputField :label="$t('edit.content_rating')" type="text" :placeholder="$t('accesscontrol.rating')"
                name="duration" />
            </b-col>
            <b-col lg="3">
              <InputField :label="$t('edit.release_date')" type="date" name="publish_date"
                :placeholder="$t('edit.release_date')" />
            </b-col>
            <b-col lg="3">
              <InputField :label="$t('edit.publicsh_date')" type="date" name="publish_date"
                :placeholder="$t('edit.publicsh_date')" />
            </b-col>
            <b-col lg="3">
              <InputField :label="$t('edit.duration')" type="text" :placeholder="$t('edit.durationinmin')"
                name="duration" />
            </b-col>
            <b-col lg="12" class="mt-4">
              <InputField :label="$t('edit.status')" type="toggle" placeholder="" class="d-flex align-self-start"
                name="status" />
            </b-col>
          </b-row>
        </fieldset>
      </b-form>
      <div class="offcanvas-footer border-top">
        <div class="d-grid d-flex gap-3 p-3">
          <b-button variant="primary" type="submit" class="d-block"><i class="fa-solid fa-floppy-disk me-2"></i>{{
                  $t('edit.save') }}</b-button>
          <b-button variant="outline-primary" type="button" class="d-block" @click="offcanvasEnd1 = false"><i
              class="fa-solid fa-angles-left me-2"></i>{{ $t('edit.close') }}</b-button>
        </div>
      </div>
    </b-offcanvas>
  </b-row>
</template>

<script setup>
import { ref, watch, computed, onMounted } from 'vue';
import Swal from 'sweetalert2';
import InputField from '../components/partials/InputField.vue';
import CastModal from '@/components/modals/CastModal.vue';
import EditCastModal from '@/components/modals/EditCastModal.vue';
import useDataTable from '../hooks/useDatatable';
import Choices from 'choices.js';
import { useSetting } from '@/store/pinia';
defineProps({
  name: { type: String, default: '' },
  thumbnail: { type: String, default: '' },
  duration: { type: String, default: '' },
  genres: { type: Array, default: () => [''] },
  quality: { type: String, default: '' },
  date: { type: String, default: '' },
  access: { type: Array, default: () => [''] },
  subtitles: { type: String, default: '' },
});

const tableData = ref([
  { movie: '/assets/images/movie-thumb/03.jpg', title: 'Arrival 1999', quality: '480/720/1080', category: 'Hello', publish_date: '2010', movie_access: 'World', seo: '!!!', action: 'checked' },
  { movie: '/assets/images/movie-thumb/04.jpg', title: 'Day Of Darkness', quality: '480/720/1080', category: 'Hello', publish_date: '2010', movie_access: 'World', seo: '!!!', action: '' },
  { movie: '/assets/images/movie-thumb/05.jpg', title: 'Don Jon', quality: '480/720/1080', category: 'Hello', publish_date: '2010', movie_access: 'World', seo: '!!!', action: '' },
  { movie: '/assets/images/movie-thumb/06.jpg', title: 'Mega Fun', quality: '480/720/1080', category: 'Hello', publish_date: '2010', movie_access: 'World', seo: '!!!', action: '' },
  { movie: '/assets/images/movie-thumb/07.jpg', title: 'My True Friends', quality: '480/720/1080', category: 'Hello', publish_date: '2010', movie_access: 'World', seo: '!!!', action: 'checked' },
  { movie: '/assets/images/movie-thumb/08.jpg', title: 'Night Mare', quality: '480/720/1080', category: 'Hello', publish_date: '2010', movie_access: 'World', seo: '!!!', action: '' },
  { movie: '/assets/images/movie-thumb/09.jpg', title: 'Portable', quality: '480/720/1080', category: 'Hello', publish_date: '2010', movie_access: 'World', seo: '!!!', action: '' },
  { movie: '/assets/images/movie-thumb/10.jpg', title: 'Suffered', quality: '480/720/1080', category: 'Hello', publish_date: '2010', movie_access: 'World', seo: '!!!', action: 'checked' },
  { movie: '/assets/images/movie-thumb/02.jpg', title: 'The Witcher', quality: '480/720/1080', category: 'Hello', publish_date: '2010', movie_access: 'World', seo: '!!!', action: '' },
  { movie: '/assets/images/movie-thumb/01.jpg', title: 'Troll Hunter', quality: '480/720/1080', category: 'Hello', publish_date: '2010', movie_access: 'World', seo: '!!!', action: '' },
  { movie: '/assets/images/movie-thumb/03.jpg', title: 'Suffered', quality: '480/720/1080', category: 'Hello', publish_date: '2010', movie_access: 'World', seo: '!!!', action: '' },
  { movie: '/assets/images/movie-thumb/04.jpg', title: 'Suffered', quality: '480/720/1080', category: 'Hello', publish_date: '2010', movie_access: 'World', seo: '!!!', action: '' },
]);
const columns = ref([
  {
    data: null,
    orderable: false,
    searchable: false,
    title: '<input type="checkbox" class="form-check-input">',
    render: function () {
      return `
       <input type="checkbox" class="form-check-input">
        `;
    },
  },
  {
    data: null,
    title: 'Movie',
    render: function (row) {
      return `
      <div class="d-flex">
          <img src="${generateImgPath(row.movie)}" class="rounded-2 avatar avatar-55 img-fluid" />
          <div class="d-flex flex-column ms-3 justify-content-center">
              <h6 class="text-capitalize">${row.title}</h6>
              <small>2h 21m</small>
              <small class="text-capitalize">(english, hindi)</small>
          </div>
      </div>

        `;
    },
  },
  {
    data: null,
    title: 'Quality',
    render: function (row) {
      return `
      <small>${row.quality}</small>
        `;
    },
  },
  { data: 'category', title: 'Category' },
  { data: 'publish_date', title: 'Publish Date' },
  { data: 'movie_access', title: 'Movie Access' },
  { data: 'seo', title: 'Seo' },
  {
    data: null,
    orderable: false,
    searchable: false,
    title: 'Action',
    render: function (row) {
      return `
      <div class="d-flex justify-content-between">
          <div class="form-check form-switch ms-2">
              <input class="form-check-input" type="checkbox" ${row.action}>
          </div>
      </div>
        `;
    },
  },
  {
    data: null,
    orderable: false,
    searchable: false,
    title: 'Action',
    render: function () {
      return `
       <div class="d-flex gap-1 align-items-center">
        <a title="Edit" class="btn btn-sm btn-icon btn-success rounded" data-table="action" data-id="0" data-method="edit" href="#"><i class="fa-solid fa-pen"></i></a>
        <a title="Delete" class="btn btn-sm btn-icon btn-danger delete-btn rounded" data-table="action" data-id="0" data-method="delete" href="#"><i class="fa-solid fa-trash"></i></a>
      </div>
        `;
    },
  },
]);

const showOffcanvas1 = () => {
  offcanvasEnd1.value = true;
};

const showAlert = () => {
  deleteSwal();
};
const tableRef = ref(null);
useDataTable({
  tableRef: tableRef,
  columns: columns.value,
  data: tableData.value,
  actionCallback: (data) => {
    switch (data.method) {
      case 'edit':
        showOffcanvas1();
        break;

      case 'delete':
        showAlert();
        break;

      default:
        break;
    }
  },
});

const generateImgPath = (path) => {
  return window.origin + import.meta.env.BASE_URL + path;
};

const offcanvasEnd = ref(false);
const offcanvasEnd1 = ref(false);

const deleteSwal = () => {
  Swal.fire({
    title: 'Are you sure?',
    text: 'You want to delete this item',
    icon: 'error',
    showCancelButton: true,
    backdrop: 'rgba(60,60,60,0.8)',
    confirmButtonText: 'Yes, delete it!',
    confirmButtonColor: '#c03221',
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire('Deleted!', 'Your item has been deleted.', 'success');
    }
  });
};
const selectElement = ref(null);
const tabindex = '-1'; // Tab index

const addMovieAccess = ref(null);
const tabindexaddMD = '-1'; // Tab index

const addLanguage = ref(null);
const tabindexLanguage = '-1'; // Tab index

const addGenres = ref(null);
const tabindexaddGenres = '-1'; // Tab index

const addMovieAccess1 = ref(null);
const tabindexaddMD1 = '-1'; // Tab index

const addLanguage1 = ref(null);
const tabindexLanguage1 = '-1'; // Tab index

const addGenres1 = ref(null);
const tabindexaddGenres1 = '-1'; // Tab index

onMounted(() => {
  new Choices(selectElement.value, {
    searchEnabled: true,
    shouldSort: true,
  });
  new Choices(addMovieAccess.value, {
    searchEnabled: true,
    shouldSort: true,
  });
  new Choices(addLanguage.value, {
    searchEnabled: true,
    shouldSort: true,
  });
  new Choices(addGenres.value, {
    searchEnabled: true,
    shouldSort: true,
  });
  new Choices(addMovieAccess1.value, {
    searchEnabled: true,
    shouldSort: true,
  });
  new Choices(addLanguage1.value, {
    searchEnabled: true,
    shouldSort: true,
  });
  new Choices(addGenres1.value, {
    searchEnabled: true,
    shouldSort: true,
  });
});

// Variables
const show = ref(false);

const store = useSetting();
const themeSchemeDirection = computed(() => store.theme_scheme_direction_value);
// Life cycle hooks
watch(themeSchemeDirection, () => {
  show.value = false;
});
</script>
