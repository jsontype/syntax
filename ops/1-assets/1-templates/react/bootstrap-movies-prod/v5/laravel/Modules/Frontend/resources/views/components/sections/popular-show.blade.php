<section class="recommended-block section-top-spacing">
    <div class="container-fluid">
        <div class="overflow-hidden">
            <div class="d-flex align-items-center justify-content-between px-3 my-4">
                <h5 class="main-title text-capitalize mb-0">TV Popular Shows</h5>
                <a href="{{ route('frontend.view_all') }}" class="text-primary iq-view-all text-decoration-none">View
                    All</a>
            </div>
            <div class="card-style-slider">
                <div class="position-relative swiper swiper-card" data-slide="6" data-laptop="5" data-tab="2" data-mobile="2" data-mobile-sm="2" data-autoplay="false" data-loop="true" data-navigation="true" data-pagination="true">
                    <ul class="p-0 swiper-wrapper m-0  list-inline">
                        <li class="swiper-slide">
                            @include('frontend::components.cards.card-style', [
                            'cardImage' => asset('frontend/images/movies/popular/01.webp'),
                            'cardTitle' => 'CRW',
                            'movieTime' => '2hr : 12mins',
                            ])

                        </li>
                        <li class="swiper-slide">
                            @include('frontend::components.cards.card-style', [
                            'cardImage' => asset('frontend/images/movies/popular/02.webp'),
                            'cardTitle' => 'Batte Wiire',
                            'movieTime' => '1hr : 22mins',
                            ])

                        </li>
                        <li class="swiper-slide">
                            @include('frontend::components.cards.card-style', [
                            'cardImage' => asset('frontend/images/movies/popular/03.webp'),
                            'cardTitle' => 'Goal',
                            'movieTime' => '2hr : 30mins',
                            ])

                        </li>
                        <li class="swiper-slide">
                            @include('frontend::components.cards.card-style', [
                            'cardImage' => asset('frontend/images/movies/popular/04.webp'),
                            'cardTitle' => 'Dandacg',
                            'movieTime' => '1hr : 30mins',
                            ])

                        </li>
                        <li class="swiper-slide">
                            @include('frontend::components.cards.card-style', [
                            'cardImage' => asset('frontend/images/movies/popular/05.webp'),
                            'cardTitle' => 'mexcan',
                            'movieTime' => '1hr : 30mins',
                            ])

                        </li>
                        <li class="swiper-slide">
                            @include('frontend::components.cards.card-style', [
                            'cardImage' => asset('frontend/images/movies/popular/06.webp'),
                            'cardTitle' => 'oit moleld',
                            'movieTime' => '1hr : 30mins',
                            ])

                        </li>
                        <li class="swiper-slide">
                            @include('frontend::components.cards.card-style', [
                            'cardImage' => asset('frontend/images/movies/popular/07.webp'),
                            'cardTitle' => 'Dragon Fire',
                            'movieTime' => '1hr : 30mins',
                            ])

                        </li>
                    </ul>
                    <div class="swiper-button swiper-button-next"></div>
                    <div class="swiper-button swiper-button-prev"></div>
                </div>
            </div>
        </div>
    </div>
</section>