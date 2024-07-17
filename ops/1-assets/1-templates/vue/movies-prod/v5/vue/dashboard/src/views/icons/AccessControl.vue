<template>
  <b-row>
    <b-card no-body>
      <div id="permission_2" class="permission-collapse border rounded p-3 mb-3 mt-3 pb-0">
        <div class="d-flex align-items-center justify-content-between">
          <h6>{{ $t('accesscontrol.manager') }}</h6>
          <div class="toggle-btn-groups">
            <b-button v-b-toggle.collapseManager variant="primary" class="btn btn-xs collapsed"> {{
              $t('accesscontrol.permission') }} </b-button>
          </div>
        </div>

        <b-collapse id="collapseManager" class="mt-3" visible>
          <div class="table-responsive">
            <table class="table table-condensed table-striped mb-0 fixed-width-table">
              <thead>
                <tr>
                  <th>{{ $t('accesscontrol.modules') }}</th>
                  <th>{{ $t('accesscontrol.view') }}</th>
                  <th>{{ $t('accesscontrol.add') }}</th>
                  <th>{{ $t('accesscontrol.edit') }}</th>
                  <th>{{ $t('accesscontrol.delete') }}</th>
                  <th class="text-end">
                    <input class="btn btn-md btn-secondary" type="submit" :value="$t('accesscontrol.save')" />
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in manager" :key="index">
                  <td>{{ $t(item.name) }}</td>
                  <td>
                    <b-form-checkbox></b-form-checkbox>
                  </td>
                  <td>
                    <b-form-checkbox></b-form-checkbox>
                  </td>
                  <td>
                    <b-form-checkbox></b-form-checkbox>
                  </td>
                  <td>
                    <b-form-checkbox></b-form-checkbox>
                  </td>
                  <td class="text-end">
                    <button
v-if="item.showButton"
                      v-b-toggle="['collapseExample-0', 'collapseExample-1', 'collapseExample-2']"
                      class="btn btn-primary btn-xs collapsed btn btn-primary" type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapseExample" aria-controls="collapseExample">
                      <i class="fa-solid fa-chevron-down me-2"> </i>
                      {{ $t('accesscontrol.more') }}
                    </button>
                  </td>
                </tr>
                <tr v-for="(item, index) in manager2" :key="index">
                  <td colspan="12" class="hiddenRow">
                    <b-collapse :id="'collapseExample-' + index" class="accordian-body collapse" visible>
                      <table class="mb-0 table">
                        <tbody>
                          <tr>
                            <td class="text-center">
                              {{ $t(item.name) }}<span class="ms-5"><input
id="sidebar" type="checkbox" name="sidebar"
                                  class="form-check-input" value="manager2" /></span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </b-collapse>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </b-collapse>
      </div>
    </b-card>
  </b-row>
  <b-row>
    <b-card no-body>
      <div id="permission_2" class="permission-collapse border rounded p-3 mb-3 mt-3">
        <div class="d-flex align-items-center justify-content-between">
          <h6 class="mb-0">{{ $t('accesscontrol.user') }}</h6>
          <div class="toggle-btn-groups">
            <b-button
v-b-toggle.collapseManager2 variant="primary" class="btn btn-xs collapsed"
              aria-controls="example-collapse-text" aria-expanded="false"> {{ $t('accesscontrol.permission') }}
            </b-button>
          </div>
        </div>

        <b-collapse id="collapseManager2" class="mt-3">
          <div class="table-responsive">
            <table class="table table-condensed table-striped mb-0 fixed-width-table">
              <thead>
                <tr>
                  <th>{{ $t('accesscontrol.modules') }}</th>
                  <th>{{ $t('accesscontrol.view') }}</th>
                  <th>{{ $t('accesscontrol.add') }}</th>
                  <th>{{ $t('accesscontrol.edit') }}</th>
                  <th>{{ $t('accesscontrol.delete') }}</th>
                  <th class="text-end">
                    <input class="btn btn-md btn-secondary" type="submit" :value="$t('accesscontrol.save')" />
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in manager" :key="index">
                  <td>{{ $t(item.name) }}</td>
                  <td>
                    <input
id="role-manager-permission-view_branch" type="checkbox" name="permission[view_branch][]"
                      value="manager" class="form-check-input" />
                  </td>
                  <td>
                    <input
id="role-manager-permission-view_branch" type="checkbox" name="permission[view_branch][]"
                      value="manager" class="form-check-input" />
                  </td>
                  <td>
                    <input
id="role-manager-permission-view_branch" type="checkbox" name="permission[view_branch][]"
                      value="manager" class="form-check-input" />
                  </td>
                  <td>
                    <input
id="role-manager-permission-view_branch" type="checkbox" name="permission[view_branch][]"
                      value="manager" class="form-check-input" />
                  </td>
                  <td class="text-end">
                    <button
v-if="item.showButton" v-b-toggle.collapseExample2
                      class="btn btn-primary btn-xs collapsed btn btn-primary" type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2">
                      <i class="fa-solid fa-chevron-down me-2"> </i>
                      {{ $t('accesscontrol.more') }}
                    </button>
                  </td>
                </tr>

                <tr>
                  <td colspan="12" class="hiddenRow">
                    <b-collapse id="collapseExample2" class="collapse">
                      <table class="mb-0 table">
                        <tbody>
                          <tr v-for="(item, index) in manager2" :key="index" class="hiddenRow">
                            <td class="text-center">
                              {{ $t(item.name) }}<span class="ms-5"> <input
id="sidebar" type="checkbox" name="sidebar"
                                  class="form-check-input" value="manager" /></span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </b-collapse>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </b-collapse>
      </div>
    </b-card>
  </b-row>
</template>

<script setup>
const manager = [{ name: 'accesscontrol.rating' }, { name: 'accesscontrol.comments' }, { name: 'accesscontrol.users' }, { name: 'accesscontrol.movie_list' }, { name: 'accesscontrol.shows' }, { name: 'accesscontrol.seasons' }, { name: 'accesscontrol.episodes' }, { name: 'accesscontrol.setting', showButton: true }];

const manager2 = [{ name: 'accesscontrol.sidebar' }, { name: 'accesscontrol.header' }, { name: 'accesscontrol.live_customizer' }];
</script>
