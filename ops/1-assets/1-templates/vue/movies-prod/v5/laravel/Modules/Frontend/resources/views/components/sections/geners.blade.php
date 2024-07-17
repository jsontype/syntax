<div class="movie-geners-block">
    <div class="container-fluid">
        <div class="overflow-hidden">
            <div class="d-flex align-items-center justify-content-between px-md-3 px-1 my-4">
                <h5 class="main-title text-capitalize mb-0">{{__('otthome.movie_geners')}}</h5>
                <a href="{{ route('frontend.all-genres') }}" class="text-primary iq-view-all text-decoration-none flex-none">{{__('otthome.view_all')}}</a>
            </div>
            <div class="card-style-slider">
                <div class="position-relative swiper swiper-card" data-slide="6" data-laptop="6" data-tab="3" data-mobile="2" data-mobile-sm="2" data-autoplay="false" data-loop="true" data-navigation="true" data-pagination="true">
                    <ul class="p-0 swiper-wrapper m-0  list-inline geners-card">
                        <li class="swiper-slide">
                            @include('frontend::components.cards.card-genres-grid', [
                            'image' => asset('frontend/images/genre/01.webp'),
                            'title' =>__('otthome.action'),
                            ])

                        </li>
                        <li class="swiper-slide">
                            @include('frontend::components.cards.card-genres-grid', [
                            'image' => asset('frontend/images/genre/02.webp'),
                            'title' => __('otthome.adventure'),
                            ])

                        </li>
                        <li class="swiper-slide">
                            @include('frontend::components.cards.card-genres-grid', [
                            'image' => asset('frontend/images/genre/03.webp'),
                            'title' => __('otthome.animation'),
                            ])

                        </li>
                        <li class="swiper-slide">
                            @include('frontend::components.cards.card-genres-grid', [
                            'image' => asset('frontend/images/genre/04.webp'),
                            'title' => __('otthome.crime'),
                            ])

                        </li>
                        <li class="swiper-slide">
                            @include('frontend::components.cards.card-genres-grid', [
                            'image' => asset('frontend/images/genre/05.webp'),
                            'title' => __('otthome.horror'),
                            ])

                        </li>
                        <li class="swiper-slide">
                            @include('frontend::components.cards.card-genres-grid', [
                            'image' => asset('frontend/images/genre/06.webp'),
                            'title' => __('otthome.mystery'),
                            ])

                        </li>
                        <li class="swiper-slide">
                            @include('frontend::components.cards.card-genres-grid', [
                            'image' => asset('frontend/images/genre/07.webp'),
                            'title' => __('otthome.romance'),
                            ])

                        </li>
                    </ul>
                    <div class="swiper-button swiper-button-next"></div>
                    <div class="swiper-button swiper-button-prev"></div>
                </div>
            </div>
        </div>
    </div>
</div>
