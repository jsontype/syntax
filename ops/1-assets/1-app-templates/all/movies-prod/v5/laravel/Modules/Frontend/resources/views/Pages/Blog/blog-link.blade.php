@extends('frontend::layouts.master', ['isBreadCrumb' => true, 'isFslightbox' => true,'bodyClass'=>'blog-single', 'title' =>
__('frontendblogs.birds_of_prey')])

@section('content')
@include('frontend::components.cards.blog-details ', [
    'isLink' => true,
    'simon_doe' => true,
    'previous'=>"frontend.blog_video",
        'next'=>"frontend.blog_quote",
    ])
@endsection
