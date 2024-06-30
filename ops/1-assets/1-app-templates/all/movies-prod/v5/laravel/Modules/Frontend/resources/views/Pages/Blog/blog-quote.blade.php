@extends('frontend::layouts.master', ['isBreadCrumb' => true, 'isFslightbox' => true,'bodyClass'=>'blog-single', 'title' =>
__('frontendblogs.saturday_night')])

@section('content')
@include('frontend::components.cards.blog-details ', [
    'isQuote' => true,
    'simon_doe' => false,
    'previous'=>"frontend.blog_link",
        'next'=>"frontend.blog_gallery",
    ])
@endsection
