<template>
  <b-row>
    <b-col sm="12" lg="6">
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Slides only</h4>
          </div>
        </b-card-header>
        <b-card-body>
          <p>Here’s a carousel with slides only. Note the presence of the <code>.d-block</code> and <code>.img-fluid</code> on carousel images to prevent browser default image alignment.</p>
          <div>
            <BCarousel :interval="5000" ride="carousel">
              <BCarouselSlide :img-src="generateImgPath('/assets/images/page-img/01.jpg')" />
              <BCarouselSlide :img-src="generateImgPath('/assets/images/page-img/01.jpg')" />
              <BCarouselSlide :img-src="generateImgPath('/assets/images/page-img/01.jpg')" />
            </BCarousel>
          </div>
        </b-card-body>
        <!-- <div class="card-body">
            <p>Here’s a carousel with slides only. Note the presence of the <code>.d-block</code> and <code>.img-fluid</code> on carousel images to prevent browser default image alignment.</p>
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <:img src="generateImgPath('/assets/images/page-img/01.jpg')" class="d-block w-100" alt="#" loading="lazy" />
                </div>
                <div class="carousel-item">
                  <:img src="generateImgPath('/assets/images/page-img/01.jpg')" class="d-block w-100" alt="#" loading="lazy" />
                </div>
                <div class="carousel-item">
                  <:img src="generateImgPath('/assets/images/page-img/01.jpg')" class="d-block w-100" alt="#" loading="lazy" />
                </div>
              </div>
            </div>
          </div> -->
      </b-card>
    </b-col>
    <b-col sm="12" lg="6">
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Slides With Controls</h4>
          </div>
        </b-card-header>
        <b-card-body>
          <p>Here’s a carousel with slides only. Note the presence of the <code>.d-block</code> and <code>.img-fluid</code> on carousel images to prevent browser default image alignment.</p>
          <div>
            <BCarousel :interval="5000" ride="carousel" controls>
              <BCarouselSlide :img-src="generateImgPath('/assets/images/page-img/01.jpg')" />
              <BCarouselSlide :img-src="generateImgPath('/assets/images/page-img/01.jpg')" />
              <BCarouselSlide :img-src="generateImgPath('/assets/images/page-img/01.jpg')" />
            </BCarousel>
          </div>
        </b-card-body>
      </b-card>
    </b-col>
    <b-col sm="12" lg="6">
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Slides With Indicators</h4>
          </div>
        </b-card-header>
        <b-card-body>
          <p>Here’s a carousel with slides only. Note the presence of the <code>.d-block</code> and <code>.img-fluid</code> on carousel images to prevent browser default image alignment.</p>
          <div>
            <BCarousel indicators :interval="5000" ride="carousel" controls>
              <BCarouselSlide :img-src="generateImgPath('/assets/images/page-img/01.jpg')" />
              <BCarouselSlide :img-src="generateImgPath('/assets/images/page-img/01.jpg')" />
              <BCarouselSlide :img-src="generateImgPath('/assets/images/page-img/01.jpg')" />
            </BCarousel>
          </div>
        </b-card-body>
      </b-card>
    </b-col>
    <b-col sm="12" lg="6">
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Slides With Captions</h4>
          </div>
        </b-card-header>
        <b-card-body>
          <p>Here’s a carousel with slides only. Note the presence of the <code>.d-block</code> and <code>.img-fluid</code> on carousel images to prevent browser default image alignment.</p>
          <BCarousel controls indicators>
            <BCarouselSlide :img-src="generateImgPath('/assets/images/page-img/01.jpg')">
              <h4 class="text-black">First slide label</h4>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </BCarouselSlide>
            <BCarouselSlide :img-src="generateImgPath('/assets/images/page-img/01.jpg')">
              <h4 class="text-black">Second slide label</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </BCarouselSlide>
            <h4 class="text-black">Third slide label</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </BCarousel>
        </b-card-body>
      </b-card>
    </b-col>
    <b-col sm="12" lg="6">
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Slides With Crossfade</h4>
          </div>
        </b-card-header>
        <b-card-body>
          <p>Here’s a carousel with slides only. Note the presence of the <code>.d-block</code> and <code>.img-fluid</code> on carousel images to prevent browser default image alignment.</p>
          <BCarousel fade controls>
            <BCarouselSlide :img-src="generateImgPath('/assets/images/page-img/01.jpg')" />
            <BCarouselSlide :img-src="generateImgPath('/assets/images/page-img/01.jpg')" />
            <BCarouselSlide :img-src="generateImgPath('/assets/images/page-img/01.jpg')" />
          </BCarousel>
        </b-card-body>
      </b-card>
    </b-col>
  </b-row>
</template>
<script setup>
const generateImgPath = (path) => {
  return window.origin + import.meta.env.BASE_URL + path;
};
</script>
