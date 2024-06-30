@props(['extra' => ''])

<div class="container">
    <div class="justify-content-center align-items-center height-self-center row">
        <div class="align-self-center col-lg-5 col-md-12">
            <div class="sign-user_card ">

                <div class="text-center">
                    {{ $logo ?? '' }}
                </div>

                <div>
                    {{ $slot }}
                </div>

                <div class="text-center mt-3 d-none">
                    {{ $extra }}
                </div>

            </div>
        </div>
    </div>
</div>
