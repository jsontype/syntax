<template>
  <div class="row">
    <div class="col-sm-12">
      <div class="card">
        <div class="card-header d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">{{ $t('header.basic_table') }}</h4>
          </div>
        </div>
        <div class="card-body table-fixed p-0">
          <div class="table-responsive mt-4 border rounded mb-0">
            <table id="basic-table" class="table table-striped mb-0" role="grid">
              <thead>
                <tr>
                  <th>{{ $t('bootstraptable.companies') }}</th>
                  <th>{{ $t('bootstraptable.members') }}</th>
                  <th>{{ $t('bootstraptable.budget') }}</th>
                  <th>{{ $t('bootstraptable.status') }}</th>
                  <th>{{ $t('bootstraptable.completion') }}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div class="d-flex align-items-center">
                      <img class="rounded img-fluid avatar-40 me-3 bg-primary-subtle" src="/assets/images/shapes/01.png" alt="profile" loading="lazy" />
                      <h6>{{ $t('bootstraptable.soft_ui') }}</h6>
                    </div>
                  </td>
                  <td>
                    <div class="iq-media-group iq-media-group-1">
                      <a href="#" class="iq-media-1 me-1">
                        <div class="icon iq-icon-box-3 rounded-pill">{{ $t('bootstraptable.sp') }}</div>
                      </a>
                      <a href="#" class="iq-media-1 me-1">
                        <div class="icon iq-icon-box-3 rounded-pill">{{ $t('bootstraptable.pp') }}</div>
                      </a>
                      <a href="#" class="iq-media-1">
                        <div class="icon iq-icon-box-3 rounded-pill">{{ $t('bootstraptable.mm') }}</div>
                      </a>
                    </div>
                  </td>
                  <td>$14000</td>
                  <td>
                    <div class="text-info">{{ $t('bootstraptable.pending') }}</div>
                  </td>
                  <td>
                    <div class="d-flex align-items-center mb-2">
                      <h6>60%</h6>
                    </div>
                    <b-progress :max="100" class="bg-info-subtle shadow-none w-100" style="height: 6px">
                      <b-progress-bar :value="60" variant="info"></b-progress-bar>
                    </b-progress>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="d-flex align-items-center">
                      <img class="rounded img-fluid avatar-40 me-3 bg-primary-subtle" src="/assets/images/shapes/02.png" alt="profile" loading="lazy" />
                      <h6>{{ $t('bootstraptable.add_progress') }}</h6>
                    </div>
                  </td>
                  <td>
                    <div class="iq-media-group iq-media-group-1">
                      <a href="#" class="iq-media-1 me-1">
                        <div class="icon iq-icon-box-3 rounded-pill">{{ $t('bootstraptable.sp') }}</div>
                      </a>
                      <a href="#" class="iq-media-1">
                        <div class="icon iq-icon-box-3 rounded-pill">{{ $t('bootstraptable.pp') }}</div>
                      </a>
                    </div>
                  </td>
                  <td>$3000</td>
                  <td>
                    <div class="text-danger">{{ $t('bootstraptable.pending') }}</div>
                  </td>
                  <td>
                    <div class="d-flex align-items-center mb-2">
                      <h6>10%</h6>
                    </div>
                    <b-progress :max="100" class="bg-danger-subtle shadow-none w-100" style="height: 6px">
                      <b-progress-bar :value="10" variant="danger"></b-progress-bar>
                    </b-progress>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="d-flex align-items-center">
                      <img class="rounded img-fluid avatar-40 me-3 bg-primary-subtle" src="/assets/images/shapes/03.png" alt="profile" loading="lazy" />
                      <h6>{{ $t('bootstraptable.fix_platform') }}</h6>
                    </div>
                  </td>
                  <td>
                    <div class="iq-media-group iq-media-group-1">
                      <a href="#" class="iq-media-1 me-1">
                        <div class="icon iq-icon-box-3 rounded-pill">{{ $t('bootstraptable.sp') }}</div>
                      </a>
                      <a href="#" class="iq-media-1">
                        <div class="icon iq-icon-box-3 rounded-pill">{{ $t('bootstraptable.pp') }}</div>
                      </a>
                    </div>
                  </td>
                  <td>{{ $t('bootstraptable.not_set') }}</td>
                  <td>
                    <div class="text-success">{{ $t('bootstraptable.completed') }}</div>
                  </td>
                  <td>
                    <div class="d-flex align-items-center mb-2">
                      <h6>100%</h6>
                    </div>
                    <b-progress :max="100" class="shadow-none w-100" style="height: 6px">
                      <b-progress-bar :value="100" variant="success"></b-progress-bar>
                    </b-progress>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="d-flex align-items-center">
                      <img class="rounded img-fluid avatar-40 me-3 bg-primary-subtle" src="/assets/images/shapes/04.png" alt="profile" loading="lazy" />
                      <h6>{{ $t('bootstraptable.launch_our') }}</h6>
                    </div>
                  </td>
                  <td>
                    <div class="iq-media-group iq-media-group-1">
                      <a href="#" class="iq-media-1 me-1">
                        <div class="icon iq-icon-box-3 rounded-pill">{{ $t('bootstraptable.sp') }}</div>
                      </a>
                      <a href="#" class="iq-media-1 me-1">
                        <div class="icon iq-icon-box-3 rounded-pill">{{ $t('bootstraptable.pp') }}</div>
                      </a>
                      <a href="#" class="iq-media-1 me-1">
                        <div class="icon iq-icon-box-3 rounded-pill">{{ $t('bootstraptable.ap') }}</div>
                      </a>
                      <a href="#" class="iq-media-1">
                        <div class="icon iq-icon-box-3 rounded-pill">{{ $t('bootstraptable.dp') }}</div>
                      </a>
                    </div>
                  </td>
                  <td>$20500</td>
                  <td>
                    <div class="text-success">{{ $t('bootstraptable.completed') }}</div>
                  </td>
                  <td>
                    <div class="d-flex align-items-center mb-2">
                      <h6>100%</h6>
                    </div>
                    <b-progress :max="100" class="shadow-none w-100" style="height: 6px">
                      <b-progress-bar :value="100" variant="success"></b-progress-bar>
                    </b-progress>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="d-flex align-items-center">
                      <img class="rounded img-fluid avatar-40 me-3 bg-primary-subtle" src="/assets/images/shapes/06.png" alt="profile" loading="lazy" />
                      <h6>{{ $t('bootstraptable.add_pricing') }}</h6>
                    </div>
                  </td>
                  <td>
                    <div class="iq-media-group iq-media-group-1">
                      <a href="#" class="iq-media-1">
                        <div class="icon iq-icon-box-3 rounded-pill">{{ $t('bootstraptable.sp') }}</div>
                      </a>
                    </div>
                  </td>
                  <td>$500</td>
                  <td>
                    <div class="text-primary">{{ $t('bootstraptable.on_schedule') }}</div>
                  </td>
                  <td>
                    <div class="d-flex align-items-center mb-2">
                      <h6>25%</h6>
                    </div>
                    <b-progress :max="100" class="bg-primary-subtle shadow-none w-100" style="height: 6px">
                      <b-progress-bar :value="25" variant="primary"></b-progress-bar>
                    </b-progress>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="d-flex align-items-center">
                      <img class="rounded img-fluid avatar-40 me-3 bg-primary-subtle" src="/assets/images/shapes/01.png" alt="profile" loading="lazy" />
                      <h6>{{ $t('bootstraptable.redesign_shop') }}</h6>
                    </div>
                  </td>
                  <td>
                    <div class="iq-media-group iq-media-group-1">
                      <a href="#" class="iq-media-1 me-1">
                        <div class="icon iq-icon-box-3 rounded-pill">{{ $t('bootstraptable.sp') }}</div>
                      </a>
                      <a href="#" class="iq-media-1">
                        <div class="icon iq-icon-box-3 rounded-pill">{{ $t('bootstraptable.pp') }}</div>
                      </a>
                    </div>
                  </td>
                  <td>$2000</td>
                  <td>
                    <div class="text-warning">{{ $t('bootstraptable.completed') }}</div>
                  </td>
                  <td>
                    <div class="d-flex align-items-center mb-2">
                      <h6>40%</h6>
                    </div>
                    <b-progress :max="100" class="bg-warning-subtle shadow-none w-100" style="height: 6px">
                      <b-progress-bar :value="40" variant="warning"></b-progress-bar>
                    </b-progress>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
