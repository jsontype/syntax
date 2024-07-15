<div class="top-ten-block">
    <div class="container-fluid">
        <section class="overflow-hidden">
            <div class="d-flex align-items-center justify-content-between px-md-3 px-1 mb-4">
                <h5 class="main-title text-capitalize mb-0">{{__('otthome.top_ten_movies')}}</h5>
                <a href="{{ route('frontend.view_all') }}" class="text-primary iq-view-all text-decoration-none flex-none">{{__('otthome.view_all')}}</a>
            </div>
            <div class="position-relative swiper swiper-card iq-top-ten-block-slider" data-slide="6" data-laptop="6" data-tab="3" data-mobile="2" data-mobile-sm="2" data-autoplay="false" data-loop="false" data-navigation="true" data-pagination="true">
                <ul class="p-0 swiper-wrapper mb-5 list-inline">
                    <li class="swiper-slide">
                        @include('frontend::components.cards.top-ten-card', [
                        'imagePath' => asset('frontend/images/top-ten-number/01.webp'),
                        'countValue' => '1',
                        ])

                    </li>
                    <li class="swiper-slide">
                        @include('frontend::components.cards.top-ten-card', [
                        'imagePath' => asset('frontend/images/top-ten-number/02.webp'),
                        'countValue' => '2',
                        ])

                    </li>
                    <li class="swiper-slide">
                        @include('frontend::components.cards.top-ten-card', [
                        'imagePath' => asset('frontend/images/top-ten-number/03.webp'),
                        'countValue' => '3',
                        ])

                    </li>
                    <li class="swiper-slide">
                        @include('frontend::components.cards.top-ten-card', [
                        'imagePath' => asset('frontend/images/top-ten-number/04.webp'),
                        'countValue' => '4',
                        ])

                    </li>
                    <li class="swiper-slide">
                        @include('frontend::components.cards.top-ten-card', [
                        'imagePath' => asset('frontend/images/top-ten-number/05.webp'),
                        'countValue' => '5',
                        ])

                    </li>
                    <li class="swiper-slide">
                        @include('frontend::components.cards.top-ten-card', [
                        'imagePath' => asset('frontend/images/top-ten-number/06.webp'),
                        'countValue' => '6',
                        ])

                    </li>
                    <li class="swiper-slide">
                        @include('frontend::components.cards.top-ten-card', [
                        'imagePath' => asset('frontend/images/top-ten-number/07.webp'),
                        'countValue' => '7',
                        ])

                    </li>
                    <li class="swiper-slide">
                        @include('frontend::components.cards.top-ten-card', [
                        'imagePath' => asset('frontend/images/top-ten-number/08.webp'),
                        'countValue' => '8',
                        ])

                    </li>
                    <li class="swiper-slide">
                        @include('frontend::components.cards.top-ten-card', [
                        'imagePath' => asset('frontend/images/top-ten-number/09.webp'),
                        'countValue' => '9',
                        ])

                    </li>
                    <li class="swiper-slide">
                        @include('frontend::components.cards.top-ten-card', [
                        'imagePath' => asset('frontend/images/top-ten-number/10.webp'),
                        'countValue' => '10',
                        ])

                    </li>
                </ul>
                <div class="swiper-button swiper-button-next"></div>
                <div class="swiper-button swiper-button-prev"></div>
            </div>
        </section>
    </div>
</div>