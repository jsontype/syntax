@extends('frontend::layouts.master', ['isBreadCrumb' => true, 'title' => 'FAQ'])

@section('content')
    <div class="section-padding">
        <div class="container">
            <div class="iq-accordian iq-accordian-square">
                <div class="iq-accordian-block iq-active 1">
                    <div class="iq-accordian-title text-capitalize">
                        <div class="iq-icon-right">
                            <i aria-hidden="true" class="fas fa-minus active"></i>
                            <i aria-hidden="true" class="fas fa-plus inactive"></i>
                        </div>
                        <h4 class="mb-0 accordian-title">{{__('frontendfaq.what_is_streamit')}}</h4>
                    </div>
                    <div class="iq-accordian-details" style="display: block;">
                        <p class="mb-0"> {{__('frontendfaq.desc')}}</p>
                    </div>
                </div>
                <div class="iq-accordian-block 2">
                    <div class="iq-accordian-title text-capitalize">
                        <div class="iq-icon-right">
                            <i aria-hidden="true" class="fa fa-minus active"></i>
                            <i aria-hidden="true" class="fa fa-plus inactive"></i>
                        </div>
                        <h4 class="mb-0 accordian-title">{{__('frontendfaq.will_account')}}</h4>
                    </div>
                    <div class="iq-accordian-details" style="display: none;">
                        <p class="mb-0"> {{__('frontendfaq.desc')}}</p>
                    </div>
                </div>
                <div class="iq-accordian-block 3">
                    <div class="iq-accordian-title text-capitalize">
                        <div class="iq-icon-right">
                            <i aria-hidden="true" class="fa fa-minus active"></i>
                            <i aria-hidden="true" class="fa fa-plus inactive"></i>
                        </div>
                        <h4 class="mb-0 accordian-title text-capitalize">{{__('frontendfaq.video_issue')}}
                        </h4>
                    </div>
                    <div class="iq-accordian-details" style="display: none;">
                        <p class="mb-0"> {{__('frontendfaq.desc')}}</p>
                    </div>
                </div>
                <div class="iq-accordian-block 4">
                    <div class="iq-accordian-title">
                        <div class="iq-icon-right">
                            <i aria-hidden="true" class="fa fa-minus active"></i>
                            <i aria-hidden="true" class="fa fa-plus inactive"></i>
                        </div>
                        <h4 class="mb-0 accordian-title text-capitalize">{{__('frontendfaq.manage_notification')}}</h4>
                    </div>
                    <div class="iq-accordian-details" style="display: none;">
                        <p class="mb-0"> {{__('frontendfaq.desc')}}</p>
                    </div>
                </div>
                <div class="iq-accordian-block 5">
                    <div class="iq-accordian-title">
                        <div class="iq-icon-right">
                            <i aria-hidden="true" class="fa fa-minus active"></i>
                            <i aria-hidden="true" class="fa fa-plus inactive"></i>
                        </div>
                        <h4 class="mb-0 accordian-title text-capitalize"> {{__('frontendfaq.what_benefits')}}</h4>
                    </div>
                    <div class="iq-accordian-details" style="display: none;">
                        <p class="mb-0"> {{__('frontendfaq.desc')}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
