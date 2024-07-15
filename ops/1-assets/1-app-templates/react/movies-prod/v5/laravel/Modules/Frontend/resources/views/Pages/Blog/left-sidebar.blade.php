@extends('frontend::layouts.master', ['isBreadCrumb' => true, 'isFslightbox' => true, 'title' => 'Left Sidebar'])

@section('content')
    <div class="section-padding">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-sm-12">
                    @include('frontend::components.cards.blog-sidebar', [])

                </div>
                <div class="col-lg-8 col-sm-12">
                    <article>
                        @include('frontend::components.cards.blog-card', [
                            'isCategory' => 'true',
                            'isTag' => 'true',
                            'blogImg' => asset('frontend/images/blog/blog1.webp'),
                            'id' => '01',
                            'blogDate' => 'February 2, 2019',
                            'blogTag' => __('frontendblogs.goldenmace'),
                            'blogTitle' => __('frontendblogs.anticipated_movies'),
                            'blogText' =>  __('frontendblogs.blog_desc'),
                            'categoriesText1' => __('frontendblogs.drama'),
                            'tagText1' =>  __('frontendblogs.comedy'),
                            'tagText2' => __('otthome.drama'),
                            'tagText3' => __('frontendblogs.trailer'),
                        ])
                    </article>

                    <article>
                        @include('frontend::components.cards.blog-card', [
                            'isCategory' => 'true',
                            'isTag' => 'true',
                            'blogImg' => asset('frontend/images/blog/blog4.webp'),
                            'id' => '02',
                            'blogDate' => 'February 2, 2019',
                            'blogTag' => __('frontendblogs.goldenmace'),
                            'blogTitle' => __('frontendblogs.everything_about'),
                            'blogText' =>  __('frontendblogs.blog_desc'),
                            'categoriesText1' => __('frontendblogs.trail'),
                            'tagText1' =>  __('frontendblogs.comedy'),
                            'tagText2' => __('frontendblogs.movie_trailers'),
                            'tagText3' => __('frontendblogs.trailer'),
                            'tagText4' => __('frontendblogs.tv_series'),
                        ])
                    </article>

                    <article>
                        @include('frontend::components.cards.blog-card', [
                            'isCategory' => 'true',
                            'isTag' => 'true',
                            'blogImg' => asset('frontend/images/blog/blog5.webp'),
                            'id' => '03',
                            'blogDate' => 'February 2, 2019',
                            'blogTag' =>__('frontendblogs.goldenmace'),
                            'blogTitle' => __('frontendblogs.black_pearl'),
                            'blogText' => __('frontendblogs.blog_desc'),
                            'categoriesText1' => __('frontendblogs.movie_trailers'),
                            'tagText1' => __('frontendblogs.movie_trailers'),
                            'tagText2' => __('otthome.mystery'),
                            'tagText3' => __('frontendblogs.thrill'),
                        ])
                    </article>

                    <article>
                        @include('frontend::components.cards.blog-card', [
                            'isCategory' => 'true',
                            'isTag' => 'true',
                            'blogImg' => asset('frontend/images/blog/blog7.webp'),
                            'blog7.webp',
                            'id' => '04',
                            'blogDate' => 'February1, 2019',
                            'blogTag' =>__('frontendblogs.goldenmace'),
                            'blogTitle' =>  __('frontendblogs.cookies_web'),
                            'blogText' => __('frontendblogs.blog_desc'),
                            'categoriesText1' => __('frontendblogs.tc_comedies'),
                            'tagText1' =>  __('frontendblogs.comedy'),
                            'tagText2' => __('frontendblogs.tc_rumors'),
                            'tagText3' => __('frontendblogs.tv_series'),
                        ])
                    </article>

                    <article>
                        @include('frontend::components.cards.blog-card', [
                            'isCategory' => 'true',
                            'isTag' => 'true',
                            'blogImg' => asset('frontend/images/blog/blog8.webp'),
                            'blog8.webp',
                            'id' => '05',
                            'blogDate' => 'January 30, 2019',
                            'blogTag' =>__('frontendblogs.goldenmace'),
                            'blogTitle' => __('frontendblogs.birds_of_prey'),
                            'blogText' => __('frontendblogs.blog_desc'),
                            'categoriesText1' => __('frontendblogs.drama'),
                            'tagText1' => __('frontendblogs.comedies'),
                            'tagText2' => __('otthome.drama'),
                            'tagText3' => __('otthome.horror'),
                            'tagText4' => __('frontendblogs.movy'),
                        ])
                    </article>

                    <article>
                        @include('frontend::components.cards.blog-card', [
                            'isCategory' => 'true',
                            'isTag' => 'true',
                            'blogImg' => asset('frontend/images/blog/blog9.webp'),
                            'id' => '05',
                            'blogDate' => 'January 30, 2019',
                            'blogTag' =>__('frontendblogs.goldenmace'),
                            'blogTitle' => __('frontendblogs.saturday_night'),
                            'blogText' => __('frontendblogs.blog_desc'),
                            'categoriesText1' => __('frontendblogs.history'),
                            'tagText1' => __('frontendblogs.history'),
                            'tagText2' => __('frontendblogs.movy'),
                            'tagText3' =>  __('otthome.mystery'),
                            'tagText4' =>  __('movielist.thriller'),
                        ])
                    </article>

                    <article>
                        @include('frontend::components.cards.blog-card', [
                            'isCategory' => 'true',
                            'isTag' => 'true',
                            'blogImg' => asset('frontend/images/blog/blog10.webp'),
                            'id' => '05',
                            'blogDate' => 'January 30, 2019',
                            'blogTag' =>__('frontendblogs.goldenmace'),
                            'blogTitle' => __('frontendblogs.gillian_shares'),
                            'blogText' => __('frontendblogs.blog_desc'),
                            'categoriesText1' => __('frontendblogs.movy'),
                            'tagText1' => __('frontendblogs.comedies'),
                            'tagText2' => __('frontendblogs.movie_trailers'),
                            'tagText3' => __('frontendblogs.tv_series'),
                        ])
                    </article>

                </div>
            </div>
        </div>
    </div>
@endsection
