@if(env('FACEBOOK_ACTIVE') || env('GITHUB_ACTIVE') || env('GOOGLE_ACTIVE'))
<div class="mb-4">
    <div class="text-center mt-2 mb-4">
        Sign in with social Login
    </div>

    <div class="pb-4 text-center">
        @if(env('FACEBOOK_ACTIVE'))
        <x-button-a href="{{route('social.login', 'facebook')}}" class="btn btn-primary">
            <span class="">Facebook</span>
        </x-button-a>
        @endif

        @if(env('GITHUB_ACTIVE'))
        <x-button-a href="{{route('social.login', 'github')}}" class="btn btn-primary">
            <span class="">Github</span>
        </x-button-a>
        @endif

        @if(env('GOOGLE_ACTIVE'))
        <x-button-a href="{{route('social.login', 'google')}}" class="btn btn-primary">
            <span class="">Google</span>
        </x-button-a>
        @endif
    </div>

    <hr>
</div>
@endif
