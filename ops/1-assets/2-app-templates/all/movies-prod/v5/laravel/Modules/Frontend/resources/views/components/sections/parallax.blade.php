<section id="parallex" class="parallax-window bg-attachment-fixed"
    style="background: url('{{ asset('frontend/images/parallax/parallex.webp') }}') fixed;">
    <div class="container-fluid h-100">
        <div class="row align-items-center justify-content-center h-100 parallaxt-details">
            <div class="col-xl-5 col-lg-12 col-md-12 r-mb-23">
                <div class="text-start">
                    <h2 class="big-font-5 text-uppercase texture-text mb-0"
                        style="background-image: url('{{ asset('frontend/images/pages/texure.webp') }}');">{{__('frontendhome.bailey')}}</h2>
                    <div class="d-flex flex-wrap align-items-center r-mb-23 my-4">
                        <div class="slider-ratting d-flex align-items-center">
                            <ul
                                class="ratting-start p-0 m-0 list-inline text-warning d-flex align-items-center justify-content-left">
                                <li>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                </li>
                                <li>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                </li>
                                <li>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                </li>
                                <li>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                </li>
                                <li>
                                    <i class="fa fa-star-half" aria-hidden="true"></i>
                                </li>
                            </ul>
                            <span class="text-white ms-2 font-size-14 fw-500">4.2</span>
                            <span class="ms-2">
                                <img src="{{ asset('frontend/images/movies/imdb-logo.svg') }} " alt="imdb logo"
                                    class="img-fluid" loading="lazy">
                            </span>
                        </div>
                        <span class="badge rounded-0 text-white text-uppercase p-2 mx-3 bg-secondary">15+</span>
                        <span class="font-size-14 fw-500">2 Hr : 6 Mins</span>
                    </div>
                    <h4 class="iq-title mb-2 fw-bold">
                        {{__('frontendhome.movie_year')}}
                    </h4>
                    <p class="line-count-2 w-75 mb-5">{{__('frontendhome.baileys_irish')}}
                    </p>
                    <div class="parallax-buttons">
                        @include('frontend::components.cards.custom-button', [
                            'buttonUrl' => route('frontend.movie_detail'),
                            'buttonTitle' => __('otthome.play_now'),
                        ])

                    </div>
                </div>
            </div>
            <div class="col-xl-7 col-lg-12 col-md-12 mt-5 mt-xl-0">
                <div class="parallax-img">
                    <a href="{{route('frontend.movie_detail')}}">
                        <img src="{{ asset('frontend/images/parallax/parallex.webp') }}" class="img-fluid w-100"
                            loading="lazy" alt="bailey">
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>
