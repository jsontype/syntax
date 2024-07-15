@extends('frontend::layouts.master', ['isBreadCrumb' => true, 'isFslightbox' => true])

@section('content')
<div class="section-padding">
    <div class="container">
        <div class="row {{ isset($gridClasses) ? $gridClasses : '' }}">
            <div class="col">

                @include('frontend::components.cards.blog-card', [
                'id' => '01',
                'linkButton' => true,
                'blogImg' => asset('frontend/images/blog/blog1.webp'),
                'blogDate' => 'January 1, 2022',
                'blogTag' => __('frontendblogs.movy'),
                'blogTitle' => __('frontendblogs.emmy_2018'),
                'blogText' =>__('frontendblogs.blog_desc'),
                'categoriesText1' => __('frontendblogs.drama'),
                'tagText1' => __('frontendblogs.comedy'),
                'tagText2' => __('otthome.drama'),
                'tagText3' => __('frontendblogs.trailer'),
                ])
            </div>
            <div class="col">
                @include('frontend::components.cards.blog-card', [
                'linkButton' => 'true',
                'blogImg' => asset('frontend/images/blog/blog2.webp'),
                'id' => '02',
                'blogDate' => 'February 2, 2022',
                'blogTag' => __('frontendblogs.trailer'),
                'blogTitle' => __('frontendblogs.soccer_2022'),
                'blogText' =>__('frontendblogs.blog_desc'),
                'categoriesText1' => __('frontendblogs.drama'),
                'tagText1' => __('frontendblogs.comedy'),
                'tagText2' => __('otthome.drama'),
                'tagText3' => __('frontendblogs.trailer'),
                ])
            </div>
            <div class="col">
                @include('frontend::components.cards.blog-card', [
                'linkButton' => 'true',
                'blogImg' => asset('frontend/images/blog/blog3.webp'),
                'id' => '03',
                'blogDate' => 'January 30, 2022',
                'blogTag' => __('frontendblogs.movy'),
                'blogTitle' => __('frontendblogs.free_gold'),
                'blogText' =>__('frontendblogs.blog_desc'),
                'categoriesText1' => __('frontendblogs.drama'),
                'tagText1' => __('frontendblogs.comedy'),
                'tagText2' => __('otthome.drama'),
                'tagText3' => __('frontendblogs.trailer'),
                ])
            </div>
            <div class="col">
                @include('frontend::components.cards.blog-card', [
                'linkButton' => 'true',
                'blogImg' => asset('frontend/images/blog/blog4.webp'),
                'id' => '04',
                'blogDate' => 'January 30, 2022',
                'blogTag' => __('frontendblogs.trailer'),
                'blogTitle' => __('frontendblogs.island_2'),
                'blogText' =>__('frontendblogs.blog_desc'),
                'categoriesText1' => __('frontendblogs.drama'),
                'tagText1' =>__('frontendblogs.comedy'),
                'tagText2' => __('otthome.drama'),
                'tagText3' => __('frontendblogs.trailer'),
                ])
            </div>
            <div class="col">
                @include('frontend::components.cards.blog-card', [
                'linkButton' => 'true',
                'blogImg' => asset('frontend/images/blog/blog5.webp'),
                'id' => '05',
                'blogDate' => 'January 30, 2022',
                'blogTag' => __('frontendblogs.trailer'),
                'blogTitle' => __('frontendblogs.drum_gum'),
                'blogText' =>__('frontendblogs.blog_desc'),
                'categoriesText1' => __('frontendblogs.drama'),
                'tagText1' =>__('frontendblogs.comedy'),
                'tagText2' => __('otthome.drama'),
                'tagText3' => __('frontendblogs.trailer'),
                ])
            </div>
            <div class="col">
                @include('frontend::components.cards.blog-card', [
                'linkButton' => 'true',
                'blogImg' => asset('frontend/images/blog/blog6.webp'),
                'id' => '06',
                'blogDate' => 'February 2, 2022',
                'blogTag' => __('frontendblogs.tv_series'),
                'blogTitle' => __('frontendblogs.racing_show'),
                'blogText' => __('frontendblogs.blog_desc'),
                'categoriesText1' => __('frontendblogs.drama'),
                'tagText1' => __('frontendblogs.comedy'),
                'tagText2' => __('otthome.drama'),
                'tagText3' => __('frontendblogs.trailer'),
                ])
            </div>
            <div class="col">
                @include('frontend::components.cards.blog-card', [
                'linkButton' => 'true',
                'blogImg' => asset('frontend/images/blog/blog7.webp'),
                'id' => '07',
                'blogDate' => 'February1, 2022',
                'blogTag' => __('frontendblogs.history'),
                'blogTitle' => __('frontendblogs.merghani_league'),
                'blogText' => __('frontendblogs.blog_desc'),
                'categoriesText1' => __('frontendblogs.drama'),
                'tagText1' => __('frontendblogs.comedy'),
                'tagText2' => __('otthome.drama'),
                'tagText3' => __('frontendblogs.trailer'),
                ])
            </div>
            <div class="col">
                @include('frontend::components.cards.blog-card', [
                'linkButton' => 'true',
                'blogImg' => asset('frontend/images/blog/blog8.webp'),
                'id' => '08',
                'blogDate' => 'February 2, 2022',
                'blogTag' => __('frontendblogs.trailer'),
                'blogTitle' => __('frontendblogs.free_pc_game'),
                'blogText' =>__('frontendblogs.blog_desc'),
                'categoriesText1' => __('frontendblogs.drama'),
                'tagText1' => __('frontendblogs.comedy'),
                'tagText2' => __('otthome.drama'),
                'tagText3' => __('frontendblogs.trailer'),
                ])
            </div>

            <div class="col">
                @include('frontend::components.cards.blog-card', [
                'linkButton' => 'true',
                'blogImg' => asset('frontend/images/blog/blog9.webp'),
                'id' => '08',
                'blogDate' => 'February1, 2022',
                'blogTag' => __('frontendblogs.history'),
                'blogTitle' => __('frontendblogs.hot_wheels'),
                'blogText' =>__('frontendblogs.blog_desc'),
                'categoriesText1' => __('frontendblogs.drama'),
                'tagText1' => __('frontendblogs.comedy'),
                'tagText2' => __('otthome.drama'),
                'tagText3' => __('frontendblogs.trailer'),
                ])
            </div>

            <div class="col">
                @include('frontend::components.cards.blog-card', [
                'linkButton' => 'true',
                'blogImg' => asset('frontend/images/blog/blog10.webp'),
                'id' => '08',
                'blogDate' => 'February1, 2022',
                'blogTag' => __('frontendblogs.movy'),
                'blogTitle' => __('frontendblogs.grab_free_skin'),
                'blogText' =>__('frontendblogs.blog_desc'),
                'categoriesText1' => __('frontendblogs.drama'),
                'tagText1' => __('frontendblogs.comedy'),
                'tagText2' => __('otthome.drama'),
                'tagText3' => __('frontendblogs.trailer'),
                ])
            </div>
        </div>
    </div>
</div>
</div>
@endsection