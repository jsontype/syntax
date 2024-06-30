<button {{ $attributes->merge(['type' => 'submit', 'class' => 'btn btn-btn btn-primary']) }}>
    {{ $slot }}
</button>
