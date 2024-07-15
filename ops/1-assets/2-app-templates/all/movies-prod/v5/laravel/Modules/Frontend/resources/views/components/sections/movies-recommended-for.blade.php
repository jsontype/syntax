<section class="recommended-block">
    <div class="container-fluid">
      <div class="overflow-hidden">
          <div class="d-flex align-items-center justify-content-between px-3 pt-2 my-4">
          <h5 class="main-title text-capitalize mb-0">{{__('frontendform.movies_recommended')}}</h5>
          </div>
        <div class="card-style-slider">
          <div class="position-relative swiper swiper-card" data-slide="5" data-laptop="5" data-tab="2" data-mobile="2"
            data-mobile-sm="2" data-autoplay="false" data-loop="true" data-navigation="true" data-pagination="true">
            <ul class="p-0 swiper-wrapper m-0  list-inline">
                <li class="swiper-slide">
                 @include('frontend::components.cards.card-style', ['cardImage' => asset('frontend/images/movies/recommended/01.webp'), 'cardTitle' => __('frontendepisode_page.giikre'), 'movieTime' => '2hr : 12mins'])

                </li>
                <li class="swiper-slide">
                 @include('frontend::components.cards.card-style', ['cardImage' => asset('frontend/images/movies/recommended/02.webp'), 'cardTitle' =>  __('frontendepisode_page.arrival'), 'movieTime' => '1hr : 22mins'])

                </li>
                <li class="swiper-slide">
                 @include('frontend::components.cards.card-style', ['cardImage' => asset('frontend/images/movies/recommended/03.webp'), 'cardTitle' => __('frontendepisode_page.pricess'), 'movieTime' => '1hr : 30mins'])

                </li>
                <li class="swiper-slide">
                 @include('frontend::components.cards.card-style', ['cardImage' => asset('frontend/images/movies/recommended/04.webp'), 'cardTitle' => __('frontendepisode_page.soull_meate'), 'movieTime' => '2hr : 30mins'])

                </li>
                <li class="swiper-slide">
                 @include('frontend::components.cards.card-style', ['cardImage' => asset('frontend/images/movies/recommended/05.webp'), 'cardTitle' =>  __('frontendepisode_page.dangacg'), 'movieTime' => '1hr : 45mins'])

                </li>
                <li class="swiper-slide">
                 @include('frontend::components.cards.card-style', ['cardImage' => asset('frontend/images/movies/recommended/05.webp'), 'cardTitle' => __('frontendepisode_page.crcikeft'), 'movieTime' => '2hr : 25mins'])

                </li>
                <li class="swiper-slide">
                 @include('frontend::components.cards.card-style', ['cardImage' => asset('frontend/images/movies/recommended/07.webp'), 'cardTitle' => __('otthome.avengrs'), 'movieTime' => '1hr : 45mins'])

                </li>
             </ul>
            <div class="swiper-button swiper-button-next"></div>
            <div class="swiper-button swiper-button-prev"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
