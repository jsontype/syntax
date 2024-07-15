<div class="suggested-block">
    <div class="container-fluid">
        <section class="overflow-hidden">
            <div class="d-flex align-items-center justify-content-between px-3 my-4">
                <h5 class="main-title text-capitalize mb-0">{{__('frontendhome.suggested_block')}}</h5>
                <a href="{{ route('frontend.view_all') }}"
                    class="text-primary iq-view-all text-decoration-none flex-none">{{__('otthome.view_all')}}</a>
            </div>
            <div class="card-style-slider">
                <div class="position-relative swiper swiper-card" data-slide="6" data-laptop="6" data-tab="3"
                    data-mobile="2" data-mobile-sm="2" data-autoplay="false" data-loop="true" data-navigation="true"
                    data-pagination="true">
                    <ul class="p-0 swiper-wrapper m-0  list-inline">
                        <li class="swiper-slide">
                            @include('frontend::components.cards.card-style', [
                                'cardImage' => asset('frontend/images/movies/suggested/01.webp'),
                                'cardTitle' => __('frontenddetail_page.choflief'),
                                'movieTime' => '2hr : 30mins',
                            ])

                        </li>
                        <li class="swiper-slide">
                            @include('frontend::components.cards.card-style', [
                                'cardImage' => asset('frontend/images/movies/suggested/02.webp'),
                                'cardTitle' => __('frontenddetail_page.lost'),
                                'movieTime' => '3hr : 0mins',
                            ])

                        </li>
                        <li class="swiper-slide">
                            @include('frontend::components.cards.card-style', [
                                'cardImage' => asset('frontend/images/movies/suggested/03.webp'),
                                'cardTitle' => __('frontenddetail_page.red_hamald'),
                                'movieTime' => '1hr : 45mins',
                            ])

                        </li>
                        <li class="swiper-slide">
                            @include('frontend::components.cards.card-style', [
                                'cardImage' => asset('frontend/images/movies/suggested/04.webp'),
                                'cardTitle' => __('frontenddetail_page.pandap'),
                                'movieTime' => '2hr : 45mins',
                            ])

                        </li>
                        <li class="swiper-slide">
                            @include('frontend::components.cards.card-style', [
                                'cardImage' => asset('frontend/images/movies/suggested/05.webp'),
                                'cardTitle' => __('frontenddetail_page.femllaeemll'),
                                'movieTime' => '1hr : 55mins',
                            ])

                        </li>
                        <li class="swiper-slide">
                            @include('frontend::components.cards.card-style', [
                                'cardImage' => asset('frontend/images/movies/suggested/06.webp'),
                                'cardTitle' => __('frontenddetail_page.ragnarorr'),
                                'movieTime' => '2hr : 30mins',
                            ])

                        </li>
                        <li class="swiper-slide">
                            @include('frontend::components.cards.card-style', [
                                'cardImage' => asset('frontend/images/movies/suggested/07.webp'),
                                'cardTitle' => __('frontenddetail_page.sonil'),
                                'movieTime' => '2hr : 15mins',
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
