@if (isset($partialBlock))
    @include($partialBlock)
@else
    @for ($i = 1; $i <= 5; $i++)
        @if ($rating >= $i)
            @include('frontend::components.cards.rating-star', ['fill' => true])
        @else
            @include('frontend::components.cards.rating-star')
        @endif
    @endfor
@endif
