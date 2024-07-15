@extends('frontend::layouts.master', ['isBreadCrumb' => true, 'isFslightbox' => true,'bodyClass'=>'blog-single', 'title' =>
__('frontendblogs.black_pearl')])

@section('content')
@include('frontend::components.cards.blog-details ', [
    'isAudio' => true,
    'simon_doe'=>true,
    'previous'=>"frontend.detail_page",
    'next'=>"frontend.blog_video",
    ])
@endsection
