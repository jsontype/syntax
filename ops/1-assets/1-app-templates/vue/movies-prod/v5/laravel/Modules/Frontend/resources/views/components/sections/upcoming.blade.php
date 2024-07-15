<section class="upcomimg-block">
    <div class="container-fluid">
      <div class="overflow-hidden">
      <div class="d-flex align-items-center justify-content-between px-3 pt-2 my-4">
      <h5 class="main-title text-capitalize mb-0">{{__('widgets.Upcoming')}}</h5>
      </div>
      <div class="card-style-slider">
      <div class="position-relative swiper swiper-card" data-slide="5" data-laptop="5" data-tab="2" data-mobile="2"
          data-mobile-sm="2" data-autoplay="false" data-loop="true" data-navigation="true" data-pagination="true">
          <ul class="p-0 swiper-wrapper m-0  list-inline">
            <li class="swiper-slide">
             @include('frontend::components.cards.card-style',['cardImage'=>asset('frontend/images/movies/upcoming/01.webp'), 'cardTitle'=>__('frontenddetail_page.dinoosaur') ,'movieTime'=>"2hr : 12mins"])

            </li>
            <li class="swiper-slide">
             @include('frontend::components.cards.card-style',['cardImage'=>asset('frontend/images/movies/upcoming/02.webp'), 'cardTitle'=>__('frontenddetail_page.godilla') ,'movieTime'=>"1hr : 22mins"])

            </li>
            <li class="swiper-slide">
             @include('frontend::components.cards.card-style',['cardImage'=>asset('frontend/images/movies/upcoming/03.webp'), 'cardTitle'=> __('frontenddetail_page.batter_caill'),'movieTime'=>"1hr : 55mins"])

            </li>
            <li class="swiper-slide">
             @include('frontend::components.cards.card-style',['cardImage'=>asset('frontend/images/movies/upcoming/04.webp'), 'cardTitle'=> __('frontenddetail_page.co_nouerllng') ,'movieTime'=>"1hr : 30mins"])

            </li>
            <li class="swiper-slide">
             @include('frontend::components.cards.card-style',['cardImage'=>asset('frontend/images/movies/upcoming/05.webp'), 'cardTitle'=> __('frontenddetail_page.fast_furious') ,'movieTime'=>"2hr : 45mins"])

            </li>
            <li class="swiper-slide">
             @include('frontend::components.cards.card-style',['cardImage'=>asset('frontend/images/movies/upcoming/06.webp'), 'cardTitle'=>__('frontenddetail_page.spiderman'),'movieTime'=>"1hr : 45mins"])

            </li>
            <li class="swiper-slide">
             @include('frontend::components.cards.card-style',['cardImage'=>asset('frontend/images/movies/upcoming/07.webp'), 'cardTitle'=>__('frontenddetail_page.onepeoc') ,'movieTime'=>"2hr : 30mins"])

            </li>
         </ul>
          <div class="swiper-button swiper-button-next"></div>
          <div class="swiper-button swiper-button-prev"></div>
      </div>
      </div>
      </div>
    </div>
  </section>
