<section class="continue-watching-block">
    <div class="container-fluid">
        <div class="overflow-hidden">
            <div class="d-flex align-items-center justify-content-between px-2 px-md-3 mb-4">
                <h5 class="main-title text-capitalize mb-0">{{__('otthome.continue_watching')}}</h5>
            </div>
            <div class="position-relative swiper swiper-card" data-slide="{{$value}}" data-slide="4" data-laptop="4"
                data-tab="3" data-mobile="2" data-mobile-sm="2" data-autoplay="false" data-loop="false"
                data-navigation="true" data-pagination="true">
                <ul class="p-0 swiper-wrapper m-0  list-inline">
                    <li class="swiper-slide">
                        @include('frontend::components.cards.continue-watch-card', ['imagePath'=>
                        asset('frontend/images/continue-watch/01.webp'), 'progressValue'=>"50%", 'dataLeftTime'=>"70 of
                        230 m"])
                    </li>
                    <li class="swiper-slide">
                        @include('frontend::components.cards.continue-watch-card', ['imagePath'=>
                        asset('frontend/images/continue-watch/02.webp'), 'progressValue'=>"30%", 'dataLeftTime'=>"120 of
                        130 m"])
                    </li>
                    <li class="swiper-slide">
                        @include('frontend::components.cards.continue-watch-card', ['imagePath'=>
                        asset('frontend/images/continue-watch/03.webp'), 'progressValue'=>"90%", 'dataLeftTime'=>"60 of
                        134 m"])
                    </li>
                    <li class="swiper-slide">
                        @include('frontend::components.cards.continue-watch-card', ['imagePath'=>
                        asset('frontend/images/continue-watch/04.webp'), 'progressValue'=>"20%", 'dataLeftTime'=>"60 of
                        134 m"])
                    </li>
                    <li class="swiper-slide">
                        @include('frontend::components.cards.continue-watch-card', ['imagePath'=>
                        asset('frontend/images/continue-watch/05.webp'), 'progressValue'=>"100%", 'dataLeftTime'=>"45 of
                        157 m"])
                    </li>
                    <li class="swiper-slide">
                        @include('frontend::components.cards.continue-watch-card', ['imagePath'=>
                        asset('frontend/images/continue-watch/06.webp'), 'progressValue'=>"100%", 'dataLeftTime'=>"70 of
                        230 m"])
                    </li>
                </ul>
                <div class="swiper-button swiper-button-next"></div>
                <div class="swiper-button swiper-button-prev"></div>
            </div>
        </div>
    </div>
</section>