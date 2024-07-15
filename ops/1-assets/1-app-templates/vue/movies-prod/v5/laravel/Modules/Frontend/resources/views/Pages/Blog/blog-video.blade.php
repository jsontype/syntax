@extends('frontend::layouts.master', ['isBreadCrumb' => true, 'isFslightbox' => true,'bodyClass'=>'blog-single', 'title' => __('frontendblogs.cookies_web')])

@section('content')
    @include('frontend::components.cards.blog-details ', [
        'isVideo' => true,
        'simon_doe'=>true,
        'previous'=>"frontend.blog_audio",
        'next'=>"frontend.blog_link",
        ])
@endsection
