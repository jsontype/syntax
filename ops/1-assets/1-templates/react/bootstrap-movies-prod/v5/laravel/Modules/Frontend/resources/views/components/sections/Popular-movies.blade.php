<div class="popular-movies-block">
    <div class="container-fluid">
        <section class="overflow-hidden">
            <div class="d-flex align-items-center justify-content-between  px-3 my-4">
                <h5 class="main-title text-capitalize mb-0">{{__('otthome.popular_movies')}}</h5>
                <a href="{{ route('frontend.view_all') }}" class="text-primary iq-view-all text-decoration-none flex-none">{{__('otthome.view_all')}}</a>
            </div>
            <div class="card-style-slider">
                <div class="position-relative swiper swiper-card" data-slide="6" data-laptop="6" data-tab="3" data-mobile="2" data-mobile-sm="2" data-autoplay="false" data-loop="true" data-navigation="true" data-pagination="true">
                    <ul class="p-0 swiper-wrapper m-0  list-inline">
                        <li class="swiper-slide">
                            @include('frontend::components.cards.card-style', [
                            'cardImage' => asset('frontend/images/movies/popular/01.webp'),
                            'cardTitle' => __('otthome.crw'),
                            'movieTime' => '2hr : 12mins',
                            ])

                        </li>
                        <li class="swiper-slide">
                            @include('frontend::components.cards.card-style', [
                            'cardImage' => asset('frontend/images/movies/popular/02.webp'),
                            'cardTitle' => __('otthome.batte_wiire'),
                            'movieTime' => '1hr : 22mins',
                            ])

                        </li>
                        <li class="swiper-slide">
                            @include('frontend::components.cards.card-style', [
                            'cardImage' => asset('frontend/images/movies/popular/03.webp'),
                            'cardTitle' => __('otthome.goal'),
                            'movieTime' => '2hr : 30mins',
                            ])

                        </li>
                        <li class="swiper-slide">
                            @include('frontend::components.cards.card-style', [
                            'cardImage' => asset('frontend/images/movies/popular/04.webp'),
                            'cardTitle' => __('otthome.dandacg'),
                            'movieTime' => '1hr : 30mins',
                            ])

                        </li>
                        <li class="swiper-slide">
                            @include('frontend::components.cards.card-style', [
                            'cardImage' => asset('frontend/images/movies/popular/05.webp'),
                            'cardTitle' => __('otthome.mexcan'),
                            'movieTime' => '1hr : 30mins',
                            ])

                        </li>
                        <li class="swiper-slide">
                            @include('frontend::components.cards.card-style', [
                            'cardImage' => asset('frontend/images/movies/popular/06.webp'),
                            'cardTitle' => __('otthome.oit_moleld'),
                            'movieTime' => '1hr : 30mins',
                            ])

                        </li>
                        <li class="swiper-slide">
                            @include('frontend::components.cards.card-style', [
                            'cardImage' => asset('frontend/images/movies/popular/07.webp'),
                            'cardTitle' => __('otthome.dragon_Fire'),
                            'movieTime' => '1hr : 30mins',
                            ])

                        </li>
                    </ul>
                    <div class="swiper-button swiper-button-next"></div>
                    <div class="swiper-button swiper-button-prev"></div>
                </div>
            </div>
        </section>
    </div>
</div>
