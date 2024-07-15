<div id="loading">
    @include('partials.dashboard._body_loader')
</div>
<div class="wrapper">
    @include('partials.dashboard._body_sidebar')
    
    @include('partials.dashboard._body_header')

   

    <div class="content-page" class="content-page">
        {{ $slot }}
    </div>
</div>
@include('partials.dashboard._body_footer')

@if($modalJs)
    <!-- Ajax Modal Html-->
    @include('partials.dashboard.components.modal-view')
@endif

@include('partials.dashboard._scripts')
@include('partials.dashboard._app_toast')
