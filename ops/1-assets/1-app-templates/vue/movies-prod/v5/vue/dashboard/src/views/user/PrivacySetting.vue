<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col lg="12">
          <b-card no-body>
            <b-card-header class="d-flex justify-content-between">
              <div class="header-title">
                <h4 class="card-title">{{ $t('header.privacy_setting') }}</h4>
              </div>
            </b-card-header>
            <b-card-body>
              <div class="acc-privacy">
                <div class="data-privacy">
                  <h4 class="mb-2">{{ $t('movielist.account_privacy') }}</h4>
                  <b-form-checkbox v-model="privacySettings.privateAccount">{{ $t('movielist.private_account') }}</b-form-checkbox>
                  <p>{{ $t('movielist.lorem1_privacysetting') }}</p>
                </div>
                <hr />
                <div class="data-privacy">
                  <h4 class="mb-2">{{ $t('movielist.activity_status') }}</h4>
                  <b-form-checkbox v-model="privacySettings.showActivityStatus">{{ $t('movielist.show_activity_status') }}</b-form-checkbox>
                  <p>{{ $t('movielist.lorem2_privacysetting') }}</p>
                </div>
                <hr />
                <div class="data-privacy">
                  <h4 class="mb-2">{{ $t('movielist.story_sharing') }}</h4>
                  <b-form-checkbox v-model="privacySettings.allowSharing">{{ $t('movielist.allow_sharing') }}</b-form-checkbox>
                  <p>{{ $t('movielist.lorem2_privacysetting') }}</p>
                </div>
                <hr />
                <div class="data-privacy">
                  <h4 class="mb-2">{{ $t('movielist.photo_of_you') }}</h4>
                  <b-form-radio-group>
                    <b-form-radio value="disable" checked>{{ $t('movielist.add_automatically') }}</b-form-radio> <br />
                    <b-form-radio>{{ $t('movielist.add_manually') }}</b-form-radio>
                  </b-form-radio-group>
                  <p>{{ $t('movielist.lorem2_privacysetting') }}</p>
                </div>
                <hr />
                <div class="data-privacy">
                  <h4 class="mb-2">{{ $t('movielist.your_profile') }}</h4>
                  <b-form-radio-group>
                    <b-form-radio value="public">{{ $t('movielist.public') }}</b-form-radio> <br />
                    <b-form-radio value="friend">{{ $t('movielist.friend') }}</b-form-radio> <br />
                    <b-form-radio value="specificFriend">{{ $t('movielist.specific_friend') }}</b-form-radio> <br />
                    <b-form-radio value="onlyMe">{{ $t('movielist.only_me') }}</b-form-radio>
                  </b-form-radio-group>
                  <p>{{ $t('movielist.lorem2_privacysetting') }}</p>
                </div>
                <hr />
                <div class="data-privacy">
                  <h4 class="mb-2">{{ $t('movielist.login_notification') }}</h4>
                  <b-form-radio-group v-model="privacySettings.loginNotification">
                    <b-form-radio value="disable">{{ $t('movielist.enable') }}</b-form-radio> <br />
                    <b-form-radio value="disable">{{ $t('movielist.disable') }}</b-form-radio>
                  </b-form-radio-group>
                  <p>{{ $t('movielist.lorem2_privacysetting') }}</p>
                </div>
                <hr />
                <div class="data-privacy">
                  <h4 class="mb-2">{{ $t('movielist.privacy_help') }}</h4>
                  <a href="#"><i class="ri-customer-service-2-line me-2"></i>{{ $t('movielist.support') }}</a>
                </div>
              </div>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      privacySettings: {
        privateAccount: false,
        showActivityStatus: false,
        allowSharing: false,
        photoOfYou: 'addAutomatically',
        profileVisibility: 'public',
        loginNotification: 'enable',
      },
    };
  },
};
</script>
