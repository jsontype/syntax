<div class="iq-breadcrumb" style="background-image: url({{ asset('/frontend/images/pages/01.webp') }});">
    <div class="container-fluid">
        <div class="row align-items-center">
            <div class="col-sm-12">
                <nav aria-label="breadcrumb" class="text-center">
                    <h2 class="title">{{ $title ?? 'Page' }}</h2>
                    <ol class="breadcrumb justify-content-center">
                        <li class="breadcrumb-item"><a href="{{ route('frontend.ott') }}">Home</a></li>
                        <li class="breadcrumb-item active">{{ $title ?? 'Page' }}</li>
                    </ol>
                </nav>
            </div>
        </div>
    </div>
</div>