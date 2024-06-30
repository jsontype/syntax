<!-- :img-src="image" -->
<template>
  <div class="card cast border-0 rounded-0">
    <img :src="image" className="img-fluid" alt="castImg" loading="lazy" />
    <div class="card-img-overlay cast-body rounded-0 d-flex flex-column justify-content-between">
      <span class="credits">
        <div class="progress" style="--secound: 302.4deg">
          <span class="title timer">{{ rating }}</span>
          <div class="overlay"></div>
          <div class="left"></div>
          <div class="right"></div>
        </div>
      </span>
      <div class="cast-text">
        <h6 class="cast-title">
          <!-- <Link to={props.castLink}>{props.castTitle}</Link> -->
          <a href="#">{{ name }}</a>
        </h6>
        <span class="cast-subtitle">{{ role }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeatureCastCard',
  props: {
    image: {
      type: String,
      default: '',
    },
    rating: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    role: {
      type: String,
      default: '',
    },
  },
};
</script>
