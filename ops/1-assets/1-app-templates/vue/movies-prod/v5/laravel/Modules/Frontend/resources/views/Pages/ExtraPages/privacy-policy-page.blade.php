@extends('frontend::layouts.master', ['isBreadCrumb' => true, 'title' => 'Privacy Policy'])

@section('content')
    <div class="section-padding">
        <div class="container">
            <div class="title-box">
                <h4 class="mb-4">{{__('frontendprivacy_policy.waht_personal')}}</h4>
                <p class="mb-0">{{__('frontendprivacy_policy.desc1')}}</p>
            </div>
            <div class="title-box">
                <h4 class="mb-4">{{__('frontendprivacy_policy.cookies_web')}}</h4>
                <p>{{__('frontendprivacy_policy.desc2')}}</p>
                <p class="mb-0">{{__('frontendprivacy_policy.desc3')}}</p>
            </div>
            <div class="title-box">
                <h4 class="mb-4">{{__('frontendprivacy_policy.third_party')}}</h4>
                <p class="mb-0">{{__('frontendprivacy_policy.desc1')}}</p>
            </div>
            <div class="title-box">
                <h4 class="mb-4">4. {{__('frontendprivacy_policy.disclousure')}}</h4>
                <p class="mb-0">{{__('frontendprivacy_policy.desc1')}}</p>
            </div>
            <div class="title-box">
                <h4 class="mb-4">5. {{__('frontendprivacy_policy.transfer_storage')}} & {{__('frontendprivacy_policy.processing_globally')}}</h4>
                <p class="mb-0">{{__('frontendprivacy_policy.desc1')}}</p>
            </div>
        </div>
    </div>
@endsection
