<template>
  <b-row>
    <b-col lg="12">
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <b-card-title>Avatar Sizing</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <div class="iq-avatars d-flex flex-wrap align-items-center">
            <div v-for="(item, index) in AvatarSizing" :key="index" class="iq-avatar me-2">
              <img :class="`${item.avatarSize} rounded`" :src="item.img" alt="#" loading="lazy" data-bs-original-title="" title="" />
            </div>
          </div>
        </b-card-body>
      </b-card>
    </b-col>
    <b-col sm="12" lg="6">
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <b-card-title>Shape Rounded</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <div class="iq-avatars d-flex flex-wrap align-items-center">
            <div v-for="(item, index) in ShapeRounded" :key="index" class="iq-avatar me-2">
              <img :class="`${item.avatarSize} rounded`" :src="item.img" alt="#" loading="lazy" data-bs-original-title="" title="" />
            </div>
          </div>
        </b-card-body>
      </b-card>
    </b-col>
    <b-col sm="12" lg="6">
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <b-card-title>Shape Rounded Circle</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <div class="iq-avatars d-flex flex-wrap align-items-center">
            <div v-for="(item, index) in RoundedCircle" :key="index" class="iq-avatar me-2">
              <img :class="`${item.avatarSize} rounded`" :src="item.img" alt="#" loading="lazy" data-bs-original-title="" title="" />
            </div>
          </div>
        </b-card-body>
      </b-card>
    </b-col>
    <b-col sm="12" lg="6">
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <b-card-title>Status Indicator</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <div class="iq-avatars d-flex flex-wrap align-items-center">
            <div v-for="(item, index) in StatusIndicator" :key="index" class="iq-avatar me-2">
              <img :class="`${item.avatarSize} rounded`" :src="item.img" alt="#" loading="lazy" data-bs-original-title="" title="" />
              <span :class="`${item.classlist} iq-dots`"></span>
            </div>
          </div>
        </b-card-body>
      </b-card>
    </b-col>
    <b-col sm="12" lg="6">
      <b-card no-body class="card card-block card-stretch card-height">
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <b-card-title>Image Groups</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <div class="iq-avatars d-flex flex-wrap align-items-center">
            <div class="iq-avatar">
              <div class="iq-media-group me-3">
                <a v-for="(item, index) in ImageGroupsSize60" :key="index" href="#" :class="`iq-media ${item.meClass}`">
                  <img :class="`img-fluid ${item.avatarSize} rounded`" :src="item.img" alt="" loading="lazy" />
                </a>
              </div>
            </div>
            <div class="iq-avatar">
              <div class="iq-media-group me-3">
                <a v-for="(item, index) in ImageGroupsSize50" :key="index" href="#" :class="`iq-media ${item.meClass}`">
                  <img :class="`img-fluid ${item.avatarSize} rounded`" :src="item.img" alt="" loading="lazy" />
                </a>
              </div>
            </div>
            <div class="iq-avatar">
              <div class="iq-media-group me-3">
                <a v-for="(item, index) in ImageGroupsSize40" :key="index" href="#" :class="`iq-media ${item.meClass}`">
                  <img :class="`img-fluid ${item.avatarSize} rounded`" :src="item.img" alt="" loading="lazy" />
                </a>
              </div>
            </div>
          </div>
        </b-card-body>
      </b-card>
    </b-col>
  </b-row>
</template>
<script setup>
const generateImgPath = (path) => {
  return window.origin + import.meta.env.BASE_URL + path;
};
const AvatarSizing = [
  { img: generateImgPath('/assets/images/avatars/01.png'), avatarSize: 'avatar-100' },
  { img: generateImgPath('/assets/images/avatars/01.png'), avatarSize: 'avatar-90' },
  { img: generateImgPath('/assets/images/avatars/01.png'), avatarSize: 'avatar-80' },
  { img: generateImgPath('/assets/images/avatars/01.png'), avatarSize: 'avatar-70' },
  { img: generateImgPath('/assets/images/avatars/01.png'), avatarSize: 'avatar-60' },
  { img: generateImgPath('/assets/images/avatars/01.png'), avatarSize: 'avatar-50' },
  { img: generateImgPath('/assets/images/avatars/01.png'), avatarSize: 'avatar-40' },
  { img: generateImgPath('/assets/images/avatars/01.png'), avatarSize: 'avatar-30' },
];
const ShapeRounded = [
  { img: generateImgPath('/assets/images/avatars/01.png'), avatarSize: 'avatar-80' },
  { img: generateImgPath('/assets/images/avatars/01.png'), avatarSize: 'avatar-70' },
  { img: generateImgPath('/assets/images/avatars/01.png'), avatarSize: 'avatar-60' },
  { img: generateImgPath('/assets/images/avatars/01.png'), avatarSize: 'avatar-50' },
  { img: generateImgPath('/assets/images/avatars/01.png'), avatarSize: 'avatar-40' },
  { img: generateImgPath('/assets/images/avatars/01.png'), avatarSize: 'avatar-30' },
];
const RoundedCircle = [
  { img: generateImgPath('/assets/images/avatars/01.png'), avatarSize: 'avatar-80' },
  { img: generateImgPath('/assets/images/avatars/01.png'), avatarSize: 'avatar-70' },
  { img: generateImgPath('/assets/images/avatars/01.png'), avatarSize: 'avatar-60' },
  { img: generateImgPath('/assets/images/avatars/01.png'), avatarSize: 'avatar-50' },
  { img: generateImgPath('/assets/images/avatars/01.png'), avatarSize: 'avatar-40' },
  { img: generateImgPath('/assets/images/avatars/01.png'), avatarSize: 'avatar-30' },
];
const StatusIndicator = [
  { img: generateImgPath('/assets/images/avatars/01.png'), avatarSize: 'avatar-80', classlist: 'bg-success dots-100' },
  { img: generateImgPath('/assets/images/avatars/01.png'), avatarSize: 'avatar-70', classlist: 'dots-90' },
  { img: generateImgPath('/assets/images/avatars/01.png'), avatarSize: 'avatar-60', classlist: 'bg-success dots-80' },
  { img: generateImgPath('/assets/images/avatars/01.png'), avatarSize: 'avatar-50', classlist: 'dots-80' },
  { img: generateImgPath('/assets/images/avatars/01.png'), avatarSize: 'avatar-40', classlist: 'bg-success dots-80' },
  { img: generateImgPath('/assets/images/avatars/01.png'), avatarSize: 'avatar-30', classlist: 'dots-80' },
];
const ImageGroupsSize60 = [
  { img: generateImgPath('/assets/images/avatars/01.png'), avatarSize: 'avatar-60', meClass: 'me-1' },
  { img: generateImgPath('/assets/images/avatars/01.png'), avatarSize: 'avatar-60', meClass: 'me-1' },
  { img: generateImgPath('/assets/images/avatars/01.png'), avatarSize: 'avatar-60', meClass: '' },
];
const ImageGroupsSize50 = [
  { img: generateImgPath('/assets/images/avatars/01.png'), avatarSize: 'avatar-50', meClass: 'me-1' },
  { img: generateImgPath('/assets/images/avatars/01.png'), avatarSize: 'avatar-50', meClass: 'me-1' },
  { img: generateImgPath('/assets/images/avatars/01.png'), avatarSize: 'avatar-50', meClass: '' },
];
const ImageGroupsSize40 = [
  { img: generateImgPath('/assets/images/avatars/01.png'), avatarSize: 'avatar-40', meClass: 'me-1' },
  { img: generateImgPath('/assets/images/avatars/01.png'), avatarSize: 'avatar-40', meClass: 'me-1' },
  { img: generateImgPath('/assets/images/avatars/01.png'), avatarSize: 'avatar-40', meClass: '' },
];
</script>
