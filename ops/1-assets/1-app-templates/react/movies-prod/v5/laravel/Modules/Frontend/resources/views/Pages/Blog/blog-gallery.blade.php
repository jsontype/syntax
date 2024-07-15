@extends('frontend::layouts.master', ['isBreadCrumb' => true, 'isFslightbox' => true,'bodyClass'=>'blog-single', 'title' => __('frontendblogs.gillian_shares')])

@section('content')
    @include('frontend::components.cards.blog-details ', [
        'isGallery' => true,
        'simon_doe'=>true,
        'previous'=>"frontend.blog_quote",
        'next'=>"frontend.blog_template",
        ])
@endsection
