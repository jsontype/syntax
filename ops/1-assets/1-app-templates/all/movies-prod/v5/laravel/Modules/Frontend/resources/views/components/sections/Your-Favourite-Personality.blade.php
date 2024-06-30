<div class="favourite-person-block">
    <div class="container-fluid">
        <section class="overflow-hidden">
            <div class="d-flex align-items-center justify-content-between px-md-3 px-1 my-4">
                <h5 class="main-title text-capitalize mb-0">{{__('otthome.personality')}}</h5>
                <a href="{{ route('frontend.all_personality') }}"
                    class="text-primary iq-view-all text-decoration-none">{{__('otthome.view_all')}}</a>
            </div>
            <div class="position-relative swiper swiper-card" data-slide="11" data-laptop="11" data-tab="4"
                data-mobile="2" data-mobile-sm="2" data-autoplay="false" data-loop="true" data-navigation="true"
                data-pagination="true">
                <ul class="p-0 swiper-wrapper m-0  list-inline personality-card">
                    <li class="swiper-slide">
                        @include('frontend::components.cards.personality-card', [
                        'image' => asset('frontend/images/cast/01.webp'),
                        'title' => __('otthome.john_abraham'),
                        'category' => __('frontenddetail_page.actor'),
                        ])

                    </li>
                    <li class="swiper-slide">
                        @include('frontend::components.cards.personality-card', [
                        'image' => asset('frontend/images/cast/02.webp'),
                        'title' => __('otthome.leena_burton'),
                        'category' =>__('otthome.actress'),
                        ])

                    </li>
                    <li class="swiper-slide">
                        @include('frontend::components.cards.personality-card', [
                        'image' => asset('frontend/images/cast/03.webp'),
                        'title' => __('otthome.lorina_williams'),
                        'category' =>__('otthome.actress'),
                        ])

                    </li>
                    <li class="swiper-slide">
                        @include('frontend::components.cards.personality-card', [
                        'image' => asset('frontend/images/cast/04.webp'),
                        'title' => __('otthome.davina_decorous'),
                        'category' => __('otthome.actress'),
                        ])

                    </li>
                    <li class="swiper-slide">
                        @include('frontend::components.cards.personality-card', [
                        'image' => asset('frontend/images/cast/05.webp'),
                        'title' =>__('otthome.thomas_bailey'),
                        'category' => __('otthome.producer'),
                        ])

                    </li>
                    <li class="swiper-slide">
                        @include('frontend::components.cards.personality-card', [
                        'image' => asset('frontend/images/cast/06.webp'),
                        'title' => __('otthome.kelly_reilly'),
                        'category' => __('otthome.actress'),
                        ])

                    </li>
                    <li class="swiper-slide">
                        @include('frontend::components.cards.personality-card', [
                        'image' => asset('frontend/images/cast/07.webp'),
                        'title' => __('otthome.smith_jonas'),
                        'category' => __('otthome.director'),
                        ])

                    </li>
                    <li class="swiper-slide">
                        @include('frontend::components.cards.personality-card', [
                        'image' => asset('frontend/images/cast/08.webp'),
                        'title' => __('otthome.angel_louis'),
                        'category' => __('otthome.producer'),
                        ])

                    </li>
                    <li class="swiper-slide">
                        @include('frontend::components.cards.personality-card', [
                        'image' => asset('frontend/images/cast/09.webp'),
                        'title' => __('otthome.millar_joseph'),
                        'category' => 'actor',
                        ])

                    </li>
                    <li class="swiper-slide">
                        @include('frontend::components.cards.personality-card', [
                        'image' => asset('frontend/images/cast/10.webp'),
                        'title' => 'mark wilson',
                        'category' => 'actor',
                        ])

                    </li>
                    <li class="swiper-slide">
                        @include('frontend::components.cards.personality-card', [
                        'image' => asset('frontend/images/cast/11.webp'),
                        'title' => __('otthome.kelley_walker'),
                        'category' => __('otthome.director'),
                        ])

                    </li>
                    <li class="swiper-slide">
                        @include('frontend::components.cards.personality-card', [
                        'image' => asset('frontend/images/cast/12.webp'),
                        'title' => __('otthome.amy_sedaris'),
                        'category' => __('otthome.actress'),
                        ])

                    </li>
                </ul>
                <div class="swiper-button swiper-button-next"></div>
                <div class="swiper-button swiper-button-prev"></div>
            </div>
        </section>
    </div>
</div>