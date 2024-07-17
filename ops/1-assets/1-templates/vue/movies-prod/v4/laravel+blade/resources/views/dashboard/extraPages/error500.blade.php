<x-layouts.GuestLayout>
    <div class="container pt-5">
        <div class="row no-gutters height-self-center">
            <div class="col-sm-12 text-center align-self-center">
                <div class="iq-error position-relative">
                    <img src="{{ asset('dashboard/images/error/500.png') }}" class="img-fluid iq-error-img" alt="">
                    <h1 class="text-in-box">500</h1>
                    <h2 class="mb-0">Oops! This Page is Not Working.</h2>
                    <p>The requested is Internal Server Error.</p>
                    <a class="btn btn-primary mt-3" href="{{ route('dashboard.home') }}"><i class="ri-home-4-line"></i>Back to Home</a>
                    
                </div>
            </div>
        </div>
    </div>
</x-layouts.GuestLayout>