@extends('frontend::layouts.blank')

@section('content')
    <div class="section-padding vh-100">
        <div class="container h-100">
            <div class="row h-100 align-items-center">
                <div class="col-lg-2"></div>
                <div class="col-lg-8">
                    <img src="{{ asset('frontend/images/pages/404.webp') }}" loading="lazy">
                    <div class="py-3 text-center mt-5 mb-4"
                        style="background: url('{{ asset('frontend/images/pages/404-bg-patten.webp') }}');  background-repeat: no-repeat; background-position: center center; background-size: 68% auto;">
                        <h4 class="fw-semibold mb-0">{{__('frontenderror.something_wrong')}}</h4>
                    </div>
                    <p class="text-center">{{__('frontenderror.looking_for')}}</p>
                    <div class="text-center mt-4 pt-3">
                        @include('frontend::components.cards.custom-button', [
                            'buttonTitle' => __('frontenderror.back_home'),
                            'buttonUrl' => route('frontend.ott'),
                        ])

                </div>
            </div>
            <div class="col-lg-2"></div>
        </div>
    </div>
</div>
@endsection
