@extends('frontend::layouts.master', ['isBreadCrumb' => true, 'isFslightbox' => true, 'title' => 'Dramas'])

@section('content')
<div class="section-padding">
    <div class="container">
        <div class="row">

            <div class="col-lg-8 col-sm-12">
                <article>
                    @include('frontend::components.cards.blog-card', [
                    'isCategory' => 'true',
                    'isTag' => 'true',
                    'blogImg' => asset('frontend/images/blog/blog1.webp'),
                    'id' => '01',
                    'blogDate' => 'February 2, 2019',
                    'blogTag' => __('frontendblogs.goldenmace'),
                    'blogTitle' => 'The Most Anticipated Movies',
                    'blogText' =>
                    'Praesent iaculis, purus ac vehicula mattis, arcu lorem blandit nisl, non laoreet dui mi eget elit.
                    Donec porttitor ex vel augue maximus luctus. Vivamus finibus nibh eu nunc volutpat suscipit.',
                    'categoriesText1' => 'Dramas',
                    'tagText1' => 'comedy',
                    'tagText2' => 'drama',
                    'tagText3' => 'trailers',
                    ])



                </article>
                <article>
                    @include('frontend::components.cards.blog-card', [
                    'isCategory' => 'true',
                    'isTag' => 'true',
                    'blogImg' => asset('frontend/images/blog/blog2.webp'),
                    'id' => '02',
                    'blogDate' => 'February 2, 2019',
                    'blogTag' => __('frontendblogs.goldenmace'),
                    'blogTitle' => 'Everything You Need to Know About',
                    'blogText' =>
                    'Praesent iaculis, purus ac vehicula mattis, arcu lorem blandit nisl, non laoreet dui mi eget elit.
                    Donec porttitor ex vel augue maximus luctus. Vivamus finibus nibh eu nunc volutpat suscipit.',
                    'categoriesText1' => 'Trailer',
                    'tagText1' => 'Comedy',
                    'tagText2' => 'Movie Trailers',
                    'tagText3' => 'Trailers',
                    'tagText4' => 'TV series',
                    ])

                </article>
                <article>
                    @include('frontend::components.cards.blog-card', [
                    'isCategory' => 'true',
                    'isTag' => 'true',
                    'blogImg' => asset('frontend/images/blog/blog3.webp'),
                    'id' => '03',
                    'blogDate' => 'February 2, 2019',
                    'blogTag' => __('frontendblogs.goldenmace'),
                    'blogTitle' => 'My streaming Black Pearl',
                    'blogText' =>
                    'Praesent iaculis, purus ac vehicula mattis, arcu lorem blandit nisl, non laoreet dui mi eget elit.
                    Donec porttitor ex vel augue maximus luctus. Vivamus finibus nibh eu nunc volutpat suscipit.',
                    'categoriesText1' => 'Movie Trailers',
                    'tagText1' => 'Movie trailers',
                    'tagText2' => 'Mystery',
                    'tagText3' => 'Thrill',
                    'buttonUrl' => 'javascript:void(0)',
                    ])
                </article>
                <article>
                    @include('frontend::components.cards.blog-card', [
                    'isCategory' => 'true',
                    'isTag' => 'true',
                    'blogImg' => asset('frontend/images/blog/blog4.webp'),
                    'id' => '04',
                    'blogDate' => 'February1, 2019',
                    'blogTag' => __('frontendblogs.goldenmace'),
                    'blogTitle' => 'Cookies and Web Beacons',
                    'blogText' =>
                    'Praesent iaculis, purus ac vehicula mattis, arcu lorem blandit nisl, non laoreet dui mi eget elit.
                    Donec porttitor ex vel augue maximus luctus. Vivamus finibus nibh eu nunc volutpat suscipit.',
                    'categoriesText1' => 'tc comedies',
                    'tagText1' => 'Comedy',
                    'tagText2' => 'tc rumors',
                    'tagText3' => 'tv series',
                    ])
                </article>
                <article>
                    @include('frontend::components.cards.blog-card', [
                    'isCategory' => 'true',
                    'isTag' => 'true',
                    'blogImg' => asset('frontend/images/blog/blog5.webp'),
                    'id' => '05',
                    'blogDate' => 'January 30, 2019',
                    'blogTag' => __('frontendblogs.goldenmace'),
                    'blogTitle' => 'Birds Of Prey Star Says She’s Definitely Open To A Ghost Return',
                    'blogText' =>
                    'Praesent iaculis, purus ac vehicula mattis, arcu lorem blandit nisl, non laoreet dui mi eget elit.
                    Donec porttitor ex vel augue maximus luctus. Vivamus finibus nibh eu nunc volutpat suscipit.',
                    'categoriesText1' => 'Dramas',
                    'tagText1' => 'Comedies',
                    'tagText2' => 'Drama',
                    'tagText3' => 'Horror',
                    'tagText4' => 'Movie',
                    ])
                </article>
                <article>
                    @include('frontend::components.cards.blog-card', [
                    'isCategory' => 'true',
                    'isTag' => 'true',
                    'blogImg' => asset('frontend/images/blog/blog6.webp'),
                    'id' => '06',
                    'blogDate' => 'January 30, 2019',
                    'blogTag' => __('frontendblogs.goldenmace'),
                    'blogTitle' => 'Saturday Night Live’ Re-Enacts Biden and Harris’ Victory Speeches',
                    'blogText' =>
                    'Praesent iaculis, purus ac vehicula mattis, arcu lorem blandit nisl, non laoreet dui mi eget elit.
                    Donec porttitor ex vel augue maximus luctus. Vivamus finibus nibh eu nunc volutpat suscipit.',
                    'categoriesText1' => 'Historical',
                    'tagText1' => 'historical',
                    'tagText2' => 'Movie',
                    'tagText3' => 'mystery',
                    'tagText4' => 'Thriller',
                    ])
                </article>
                <article>
                    @include('frontend::components.cards.blog-card', [
                    'isCategory' => 'true',
                    'isTag' => 'true',
                    'blogImg' => asset('frontend/images/blog/blog7.webp'),
                    'id' => '07',
                    'blogDate' => 'January 30, 2019',
                    'blogTag' => __('frontendblogs.goldenmace'),
                    'blogTitle' => 'Gillian Anderson Shares the Photos From The Crown',
                    'blogText' =>
                    'Praesent iaculis, purus ac vehicula mattis, arcu lorem blandit nisl, non laoreet dui mi eget elit.
                    Donec porttitor ex vel augue maximus luctus. Vivamus finibus nibh eu nunc volutpat suscipit.',
                    'categoriesText1' => 'movie',
                    'tagText1' => 'comedies',
                    'tagText2' => 'Movie trailers',
                    'tagText3' => 'tv series',
                    ])
                </article>
            </div>
            <div class="col-lg-4 col-sm-12">
                @include('frontend::components.cards.blog-sidebar', [])

            </div>
        </div>
    </div>
</div>
@endsection