<template>
  <b-row>
    <b-col sm="12">
      <b-card no-body>
        <b-card-header class="border-bottom d-flex justify-content-between align-items-center p-3">
          <div class="d-flex align-items-center gap-2 pt-3">
            <div class="mb-0">
              <select ref="selectElement" class="form-control select2-basic-multiple" :placeholder="$t('bordertable.no_action')" :tabindex="tabindex">
                <option value="0">{{ $t('bordertable.no_action') }}</option>
                <option value="1">{{ $t('bordertable.status') }}</option>
                <option value="2">{{ $t('edit.delete') }}</option>
              </select>
            </div>
            <b-button variant="primary" class="mb-0">{{ $t('bordertable.apply') }}</b-button>
          </div>
          <b-button variant="primary mt-3" @click="offcanvasEnd = true"><i class="fa-solid fa-plus me-2" style="color: #fafcff"></i>{{ $t('episodemodal.add_episode') }}</b-button>
        </b-card-header>
        <b-card-body>
          <div class="table-view table-responsive table-space">
            <table id="datatable" ref="tableRef" class="data-tables table custom-table movie_table" data-toggle="data-table"></table>
          </div>
        </b-card-body>
      </b-card>

      <b-offcanvas v-model="offcanvasEnd" class="offcanvas-width-80" header-close-class="me-0" :placement="themeSchemeDirection !== 'ltr' ? 'start' : 'end'" :title="$t('episodemodal.add_new_episode')">
        <b-form class="section-form" @submit="formSubmit">
          <fieldset>
            <legend>{{ $t('episodemodal.episodes') }}</legend>
            <b-row>
              <b-col sm="12">
                <label class="form-label flex-grow-1 px-3" for="show"
                  ><strong>{{ $t('edit.show') }}:</strong></label
                >
                <div class="px-3 mb-3">
                  <select ref="selectShow" class="form-control select2-basic-multiple" :placeholder="$t('edit.show')" :tabindex="tabindexselectShow">
                    <option value="0">{{ $t('movielist.zombie_island') }}</option>
                    <option value="1">{{ $t('movielist.folke_the_fat') }}</option>
                    <option value="2">{{ $t('episodemodal.the_mandalorian') }}</option>
                    <option value="2">{{ $t('movielist.criminals_and_agents') }}</option>
                  </select>
                </div>
              </b-col>
              <b-col sm="12">
                <label class="form-label flex-grow-1 px-3" for="season"
                  ><strong>{{ $t('seasonsmodal.season') }}:</strong></label
                >
                <div class="px-3 mb-3">
                  <select ref="selectSeason" class="form-control select2-basic-multiple" :placeholder="$t('movielist.season_1')" :tabindex="tabindexSeason">
                    <option value="0">{{ $t('movielist.season_1') }}</option>
                    <option value="1">{{ $t('movielist.season_2') }}</option>
                    <option value="2">{{ $t('movielist.season_3') }}</option>
                    <option value="2">{{ $t('movielist.season_4') }}</option>
                  </select>
                </div>
              </b-col>
              <b-col sm="12">
                <InputField :label="$t('episodemodal.episode_name')" name="name" :is-required="true" type="text" :placeholder="$t('episodemodal.enter_episode_name')" />
              </b-col>
              <b-col sm="12">
                <InputField v-model="shortDescription" :label="$t('edit.description')" :placeholder="$t('edit.description')" type="textarea" />
              </b-col>
            </b-row>
            <!-- add :is-multi="true" for multi-select -->
            <div class="d-flex justify-content-between align-items-center my-5 px-3">
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
                          <router-link v-b-tooltip.hover :title="$t('edit.edit')" to="#" class="text-success"><i class="fa-solid fa-pen mx-4"></i></router-link>
                          <router-link v-b-tooltip.hover :title="$t('edit.delete')" to="#" class="text-danger"><i class="fa-solid fa-trash me-4"></i></router-link>
                        </div>
                      </td>
                    </tr>
                    <tr class="text-center">
                      <td>{{ $t('edit.crew') }}</td>
                      <td>{{ $t('edit.xyz') }}</td>
                      <td>{{ $t('edit.producer') }}</td>
                      <td>
                        <div class="d-flex align-items-center justify-content-center">
                          <router-link v-b-tooltip.hover :title="$t('edit.edit')" to="#" class="text-success"><i class="fa-solid fa-pen mx-4"></i></router-link>
                          <router-link v-b-tooltip.hover :title="$t('edit.delete')" to="#" class="text-danger"><i class="fa-solid fa-trash me-4"></i></router-link>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </b-row>

            <b-row class="mt-5">
              <b-col lg="3">
                <InputField :label="$t('edit.content_rating')" type="text" :placeholder="$t('accesscontrol.rating')" name="rating" />
              </b-col>
              <b-col lg="3">
                <InputField :label="$t('edit.release_date')" type="date" name="publish_date" :placeholder="$t('edit.release_date')" />
              </b-col>
              <b-col lg="3">
                <InputField :label="$t('edit.publicsh_date')" type="date" name="publish_date" :placeholder="$t('edit.publicsh_date')" />
              </b-col>
              <b-col lg="3">
                <InputField :label="$t('edit.duration')" type="text" :placeholder="$t('edit.durationinmin')" name="duration" />
              </b-col>
              <b-col lg="12" class="mt-4">
                <InputField :label="$t('edit.status')" type="toggle" placeholder="" class="d-flex align-self-start" name="status" />
              </b-col>
            </b-row>
          </fieldset>
          <fieldset>
            <legend class="mt-5">{{ $t('episodemodal.media') }}</legend>
            <b-row>
              <b-col sm="12" lg="6">
                <InputField :label="$t('episodemodal.thumbnail')" name="thumbnail" :is-required="true" type="file" />
              </b-col>
              <b-col sm="12" lg="6">
                <InputField v-model="poster" :label="$t('episodemodal.poster')" name="poster" :is-multi="true" :is-required="true" type="file" />
              </b-col>
              <b-col sm="12">
                <InputField v-model="trailer_url" :label="$t('episodemodal.trailer_url')" name="trailer_link" :is-required="true" :placeholder="$t('episodemodal.trailer_url')" type="text" />
              </b-col>
            </b-row>
            <div class="d-flex justify-content-between align-items-center mt-5 mb-3 px-3">
              <h5>
                <strong>{{ $t('episodemodal.video_quality') }}</strong>
              </h5>
              <VideoModal />
            </div>
            <b-row class="px-3">
              <div class="table-responsive">
                <table class="table table-bordered table-strip">
                  <thead>
                    <tr class="text-center">
                      <th style="width: 30%">{{ $t('episodemodal.quality') }}</th>
                      <th style="width: 30%">{{ $t('episodemodal.video_url') }}</th>
                      <th style="width: 30%">{{ $t('edit.action') }}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="text-center">
                      <td>720P</td>
                      <td>video_720.mp4</td>
                      <td>
                        <div class="d-flex align-items-center justify-content-center">
                          <router-link v-b-tooltip.hover :title="$t('edit.edit')" to="#" class="text-success"><i class="fa-solid fa-pen mx-4"></i></router-link>
                          <router-link v-b-tooltip.hover :title="$t('edit.edit')" to="#" class="text-danger"><i class="fa-solid fa-trash me-4"></i></router-link>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </b-row>
            <div class="d-flex justify-content-between align-items-center mt-5 mb-3 px-3">
              <h5>
                <strong>{{ $t('episodemodal.subtitles') }}</strong>
              </h5>
              <SubtitleModal />
            </div>
            <b-row class="px-3">
              <div class="table-responsive">
                <table class="table table-bordered table-strip">
                  <thead>
                    <tr class="text-center">
                      <th style="width: 30%">{{ $t('episodemodal.language') }}</th>
                      <th style="width: 30%">URL</th>
                      <th style="width: 30%">{{ $t('edit.action') }}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="text-center">
                      <td>{{ $t('Datatable.english') }}</td>
                      <td>{{ $t('Datatable.english') }}.txt</td>
                      <td>
                        <div class="d-flex align-items-center justify-content-center">
                          <router-link v-b-tooltip.hover :title="$t('edit.edit')" to="#" class="text-success"><i class="fa-solid fa-pen mx-4"></i></router-link>
                          <router-link v-b-tooltip.hover :title="$t('edit.delete')" to="#" class="text-danger"><i class="fa-solid fa-trash me-4"></i></router-link>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </b-row>
          </fieldset>

          <div class="offcanvas-footer border-top">
            <div class="d-grid d-flex gap-3 p-3">
              <b-button variant="primary" type="submit" class="d-block"><i class="fa-solid fa-floppy-disk me-2"></i>{{ $t('edit.save') }}</b-button>
              <b-button variant="outline-primary" type="button" class="d-block" @click="offcanvasEnd = false"><i class="fa-solid fa-angles-left me-2"></i>{{ $t('edit.close') }}</b-button>
            </div>
          </div>
        </b-form>
      </b-offcanvas>
    </b-col>
    <b-offcanvas v-model="offcanvasEnd1" class="offcanvas-width-80" header-close-class="me-0" :placement="themeSchemeDirection !== 'ltr' ? 'start' : 'end'" :title="$t('episodemodal.edit_episode')">
      <b-form class="section-form" @submit="formSubmit">
        <fieldset>
          <legend>{{ $t('episodemodal.episodes') }}</legend>
          <b-row>
            <b-col sm="12">
              <label class="form-label flex-grow-1 px-3" for="show"
                ><strong>{{ $t('edit.show') }}:</strong></label
              >
              <div class="px-3 mb-3">
                <select ref="selectShow1" class="form-control select2-basic-multiple" :placeholder="$t('edit.show')" :tabindex="tabindexselectShow1">
                  <option value="0">{{ $t('movielist.zombie_island') }}</option>
                  <option value="1">{{ $t('movielist.folke_the_fat') }}</option>
                  <option value="2">{{ $t('episodemodal.the_mandalorian') }}</option>
                  <option value="2">{{ $t('movielist.criminals_and_agents') }}</option>
                </select>
              </div>
            </b-col>
            <b-col sm="12">
              <label class="form-label flex-grow-1 px-3" for="season"
                ><strong>{{ $t('seasonsmodal.season') }}:</strong></label
              >
              <div class="px-3 mb-3">
                <select ref="selectSeason1" class="form-control select2-basic-multiple" :placeholder="$t('movielist.season_1')" :tabindex="tabindexSeason1">
                  <option value="0">{{ $t('movielist.season_1') }}</option>
                  <option value="1">{{ $t('movielist.season_2') }}</option>
                  <option value="2">{{ $t('movielist.season_3') }}</option>
                  <option value="2">{{ $t('movielist.season_4') }}</option>
                </select>
              </div>
            </b-col>
            <b-col sm="12">
              <InputField :label="$t('episodemodal.episode_name')" name="name" :is-required="true" type="text" :model-value="$t('episodemodal.don_jon')" :placeholder="$t('episodemodal.enter_episode_name')" />
            </b-col>
            <b-col sm="12">
              <InputField v-model="shortDescription" :label="$t('edit.description')" :model-value="$t('widgetcard.dummytext')" :placeholder="$t('edit.description')" type="textarea" />
            </b-col>
          </b-row>
          <!-- add :is-multi="true" for multi-select -->
          <div class="d-flex justify-content-between align-items-center my-5 px-3">
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
                        <router-link v-b-tooltip.hover :title="$t('edit.edit')" to="#" class="text-success"><i class="fa-solid fa-pen mx-4"></i></router-link>
                        <router-link v-b-tooltip.hover :title="$t('edit.delete')" to="#" class="text-danger"><i class="fa-solid fa-trash me-4"></i></router-link>
                      </div>
                    </td>
                  </tr>
                  <tr class="text-center">
                    <td>{{ $t('edit.crew') }}</td>
                    <td>{{ $t('edit.xyz') }}</td>
                    <td>{{ $t('edit.producer') }}</td>
                    <td>
                      <div class="d-flex align-items-center justify-content-center">
                        <router-link v-b-tooltip.hover :title="$t('edit.edit')" to="#" class="text-success"><i class="fa-solid fa-pen mx-4"></i></router-link>
                        <router-link v-b-tooltip.hover :title="$t('edit.delete')" to="#" class="text-danger"><i class="fa-solid fa-trash me-4"></i></router-link>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </b-row>

          <b-row class="mt-5">
            <b-col lg="3">
              <InputField :label="$t('edit.content_rating')" type="text" :placeholder="$t('accesscontrol.rating')" name="duration" />
            </b-col>
            <b-col lg="3">
              <InputField :label="$t('edit.release_date')" type="date" name="publish_date" :placeholder="$t('edit.release_date')" />
            </b-col>
            <b-col lg="3">
              <InputField :label="$t('edit.publicsh_date')" type="date" name="publish_date" :placeholder="$t('edit.publicsh_date')" />
            </b-col>
            <b-col lg="3">
              <InputField :label="$t('edit.duration')" type="text" :placeholder="$t('edit.durationinmin')" name="duration" />
            </b-col>
            <b-col lg="12" class="mt-4">
              <InputField :label="$t('edit.status')" type="toggle" placeholder="" class="d-flex align-self-start" name="status" />
            </b-col>
          </b-row>
        </fieldset>
        <fieldset>
          <legend class="mt-5">{{ $t('episodemodal.media') }}</legend>
          <b-row>
            <b-col sm="12" lg="6">
              <InputField :label="$t('episodemodal.thumbnail')" name="thumbnail" :is-required="true" type="file" />
            </b-col>
            <b-col sm="12" lg="6">
              <InputField v-model="poster" :label="$t('episodemodal.poster')" name="poster" :is-multi="true" :is-required="true" type="file" />
            </b-col>
            <b-col sm="12">
              <InputField v-model="trailer_url" :label="$t('episodemodal.trailer_url')" name="trailer_link" :is-required="true" :placeholder="$t('episodemodal.trailer_url')" type="text" />
            </b-col>
          </b-row>
          <div class="d-flex justify-content-between align-items-center mt-5 mb-3 px-3">
            <h5>
              <strong>{{ $t('episodemodal.video_quality') }}</strong>
            </h5>
            <EditVideoModal />
          </div>
          <b-row class="px-3">
            <div class="table-responsive">
              <table class="table table-bordered table-strip">
                <thead>
                  <tr class="text-center">
                    <th style="width: 30%">{{ $t('episodemodal.quality') }}</th>
                    <th style="width: 30%">{{ $t('episodemodal.video_url') }}</th>
                    <th style="width: 30%">{{ $t('edit.action') }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="text-center">
                    <td>720P</td>
                    <td>video_720.mp4</td>
                    <td>
                      <div class="d-flex align-items-center justify-content-center">
                        <router-link v-b-tooltip.hover :title="$t('edit.edit')" to="#" class="text-success"><i class="fa-solid fa-pen mx-4"></i></router-link>
                        <router-link v-b-tooltip.hover :title="$t('edit.edit')" to="#" class="text-danger"><i class="fa-solid fa-trash me-4"></i></router-link>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </b-row>
          <div class="d-flex justify-content-between align-items-center mt-5 mb-3 px-3">
            <h5>
              <strong>{{ $t('episodemodal.subtitles') }}</strong>
            </h5>
            <EditSubtitleModal />
          </div>
          <b-row class="px-3">
            <div class="table-responsive">
              <table class="table table-bordered table-strip">
                <thead>
                  <tr class="text-center">
                    <th style="width: 30%">{{ $t('episodemodal.language') }}</th>
                    <th style="width: 30%">URL</th>
                    <th style="width: 30%">{{ $t('edit.action') }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="text-center">
                    <td>{{ $t('Datatable.english') }}</td>
                    <td>{{ $t('Datatable.english') }}.txt</td>
                    <td>
                      <div class="d-flex align-items-center justify-content-center">
                        <router-link v-b-tooltip.hover :title="$t('edit.edit')" to="#" class="text-success"><i class="fa-solid fa-pen mx-4"></i></router-link>
                        <router-link v-b-tooltip.hover :title="$t('edit.delete')" to="#" class="text-danger"><i class="fa-solid fa-trash me-4"></i></router-link>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </b-row>
        </fieldset>

        <div class="offcanvas-footer border-top">
          <div class="d-grid d-flex gap-3 p-3">
            <b-button variant="primary" type="submit" class="d-block"><i class="fa-solid fa-floppy-disk me-2"></i>{{ $t('edit.save') }}</b-button>
            <b-button variant="outline-primary" type="button" class="d-block" @click="offcanvasEnd1 = false"><i class="fa-solid fa-angles-left me-2"></i>{{ $t('edit.close') }}</b-button>
          </div>
        </div>
      </b-form>
    </b-offcanvas>
  </b-row>
</template>

<script setup>
import { ref, watch, computed, onMounted } from 'vue';
import Swal from 'sweetalert2';
import InputField from '../components/partials/InputField.vue';
import CastModal from '@/components/modals/CastModal.vue';
import EditCastModal from '@/components/modals/EditCastModal.vue';
import VideoModal from '@/components/modals/VideosModal.vue';
import EditVideoModal from '@/components/modals/EditVideosModal.vue';
import SubtitleModal from '@/components/modals/SubtitleModal.vue';
import EditSubtitleModal from '@/components/modals/EditSubtitleModal.vue';
import useDataTable from '../hooks/useDatatable';
import { useSetting } from '@/store/pinia';
import Choices from 'choices.js';
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

const selectElement = ref(null);
const tabindex = '-1'; // Tab index

const selectShow = ref(null);
const tabindexselectShow = '-1'; // Tab index

const selectShow1 = ref(null);
const tabindexselectShow1 = '-1'; // Tab index

const selectSeason = ref(null);
const tabindexSeason = '-1'; // Tab index

const selectSeason1 = ref(null);
const tabindexSeason1 = '-1'; // Tab index

onMounted(() => {
  new Choices(selectElement.value, {
    searchEnabled: true,
    shouldSort: true,
  });
  new Choices(selectShow.value, {
    searchEnabled: true,
    shouldSort: true,
  });
  new Choices(selectShow1.value, {
    searchEnabled: true,
    shouldSort: true,
  });
  new Choices(selectSeason.value, {
    searchEnabled: true,
    shouldSort: true,
  });
  new Choices(selectSeason1.value, {
    searchEnabled: true,
    shouldSort: true,
  });
});

const tableData = ref([
  { movie: '/assets/images/movie-thumb/03.jpg', title: 'Arrival 1999', quality: '480/720/1080', category: 'Hello', publish_date: '2010', movie_access: 'World', seo: '!!!' },
  { movie: '/assets/images/movie-thumb/04.jpg', title: 'Day Of Darkness', quality: '480/720/1080', category: 'Hello', publish_date: '2010', movie_access: 'World', seo: '!!!' },
  { movie: '/assets/images/movie-thumb/05.jpg', title: 'Don Jon', quality: '480/720/1080', category: 'Hello', publish_date: '2010', movie_access: 'World', seo: '!!!' },
  { movie: '/assets/images/movie-thumb/06.jpg', title: 'Mega Fun', quality: '480/720/1080', category: 'Hello', publish_date: '2010', movie_access: 'World', seo: '!!!' },
  { movie: '/assets/images/movie-thumb/07.jpg', title: 'My True Friends', quality: '480/720/1080', category: 'Hello', publish_date: '2010', movie_access: 'World', seo: '!!!' },
  { movie: '/assets/images/movie-thumb/08.jpg', title: 'Night Mare', quality: '480/720/1080', category: 'Hello', publish_date: '2010', movie_access: 'World', seo: '!!!' },
  { movie: '/assets/images/movie-thumb/09.jpg', title: 'Portable', quality: '480/720/1080', category: 'Hello', publish_date: '2010', movie_access: 'World', seo: '!!!' },
  { movie: '/assets/images/movie-thumb/10.jpg', title: 'Suffered', quality: '480/720/1080', category: 'Hello', publish_date: '2010', movie_access: 'World', seo: '!!!' },
  { movie: '/assets/images/movie-thumb/02.jpg', title: 'The Witcher', quality: '480/720/1080', category: 'Hello', publish_date: '2010', movie_access: 'World', seo: '!!!' },
  { movie: '/assets/images/movie-thumb/01.jpg', title: 'Troll Hunter', quality: '480/720/1080', category: 'Hello', publish_date: '2010', movie_access: 'World', seo: '!!!' },
  { movie: '/assets/images/movie-thumb/03.jpg', title: 'Suffered', quality: '480/720/1080', category: 'Hello', publish_date: '2010', movie_access: 'World', seo: '!!!' },
  { movie: '/assets/images/movie-thumb/04.jpg', title: 'Suffered', quality: '480/720/1080', category: 'Hello', publish_date: '2010', movie_access: 'World', seo: '!!!' },
  { movie: '/assets/images/movie-thumb/09.jpg', title: 'Suffered', quality: '480/720/1080', category: 'Hello', publish_date: '2010', movie_access: 'World', seo: '!!!' },
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
  {
    data: null,
    title: 'Publish Date',
    render: function (row) {
      return `
      <small>${row.publish_date}</small>
      `;
    },
  },
  { data: 'movie_access', title: 'Movie Access' },
  { data: 'seo', title: 'Seo' },
  {
    data: null,
    orderable: false,
    searchable: false,
    title: 'Action',
    render: function () {
      return `
      <div class="d-flex justify-content-between">
          <div class="form-check form-switch ms-2">
              <input class="form-check-input" type="checkbox">
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

// Variables
const show = ref(false);

const store = useSetting();
const themeSchemeDirection = computed(() => store.theme_scheme_direction_value);
// Life cycle hooks
watch(themeSchemeDirection, () => {
  show.value = false;
});
</script>
