@props(['status'])

@if ($status)
    <div {{ $attributes->merge(['class' => 'alert bg-soft-success']) }}>
        {{ $status }}
    </div>
@endif
