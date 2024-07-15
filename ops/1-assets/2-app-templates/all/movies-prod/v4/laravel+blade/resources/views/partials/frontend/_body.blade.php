<div id="loading">
    @include('partials.frontend._body_loader')
</div>
@include('partials.frontend._body_header')

<div class="content-page">
    {{ $slot }}
</div>
@include('partials.frontend._body_footer')

@include('partials.frontend._scripts')
