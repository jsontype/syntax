<div class="iq-blog-box">
    <div class="iq-blog-image clearfix">
        <a href="blog-detail">
            <img src="{{ $blogImg }}" alt="blogImg-{{ $id }}" class="img-fluid w-100" loading="lazy">
        </a>
    </div>
    <div class="iq-blog-detail">
        <div class="iq-blog-meta d-flex mb-3">
            <ul class="list-inline mb-0">
                <li class="border-gredient-left">
                    <a href="{{ route('frontend.blog_date') }}">
                        <span>{{ $blogDate }}</span></a>
                </li>
            </ul>
            <ul class="iq-blogtag list-inline">
                <li class="border-gredient-left"><a href="{{ route('frontend.blog_tag') }}">{{ $blogTag }}</a></li>
            </ul>
        </div>

        <a href="{{ route('frontend.detail_page') }}">
            <h3 class="mb-3 line-count-1 blog-heading">{{ $blogTitle }}</h3>
        </a>
        <p class="line-count-2">{{ $blogText }}</p>
        @if (isset($linkButton) && $linkButton)
        <div class="iq-button link-button">
            <a href="{{ route('frontend.detail_page') }}" class="btn text-capitalize position-relative">
                <span class="button-text">{{__('frontendform.read_more')}} <i class="fa fa-angle-right ml-2" aria-hidden="true"></i></span>

            </a>
        </div>
        @else
        <div class="iq-button">
            <a href="{{ route('frontend.detail_page') }}" class="btn text-uppercase position-relative">
                <span class="button-text">Read More </span>
                <i class="fa-solid fa-play"></i>
            </a>
        </div>
        @endif
        @if (isset($isCategory) && $isCategory)
        <ul class="iq-blog-meta-cat-tag iq-blogcat mt-4">
            <li class="iq-tag-title">
                <i class="fas fa-film" aria-hidden="true"></i>
                {{__('frontendform.categories')}}:
            </li>
            <li>
                <a href="{{ route('frontend.blog_category') }}">
                    {{ $categoriesText1 }}
                </a>
            </li>
        </ul>
        @endif
        @if (isset($isTag) && $isTag)
        <ul class="iq-blog-meta-cat-tag iq-blogtag">
            <li class="iq-tag-title">
                <i class="fas fa-tags" aria-hidden="true"></i>
                {{__('frontendform.tags')}}:
            </li>
            <li>
                <a href="{{ route('frontend.blog_tag') }}">
                    {{ $tagText1 }}
                </a>
            </li>
            <li>
                <a href="{{ route('frontend.blog_tag') }}">
                    {{ $tagText2 }}
                </a>
            </li>
            <li>
                <a href="{{ route('frontend.blog_tag') }}">
                    {{ $tagText3 }}
                </a>
            </li>
        </ul>
        @endif

    </div>
</div>