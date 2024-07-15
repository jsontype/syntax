@extends('frontend::layouts.blank')

@section('content')
<div class="section-padding vh-100 image-flip-rtl" style="background: url('{{ asset('frontend/images/pages/404-two.webp') }}'); background-size: cover; background-repeat: no-repeat; position: relative;min-height:500px">
    <div class="container h-100">
        <div class="row h-100 align-items-center">
            <div class="col-lg-6"></div>
            <div class="col-lg-5">
                <img src="{{ asset('frontend/images/pages/404-text.webp') }}" class="mb-5" alt="404" loading="lazy">
                <h4 class="fw-bold text-center">{{__('frontenderror.ohhh_no')}}</h4>
                <p class="text-center">{{__('frontenderror.page_doesn\'t_exist')}}</p>
                <div class="text-center mt-4 pt-3">
                    @include('frontend::components.cards.custom-button', [
                    'buttonTitle' => __('frontenderror.back_home'),
                    'buttonUrl' => route('frontend.ott'),
                    ])
                </div>
            </div>
            <div class="col-lg-1"></div>
        </div>
    </div>
</div>
@endsection