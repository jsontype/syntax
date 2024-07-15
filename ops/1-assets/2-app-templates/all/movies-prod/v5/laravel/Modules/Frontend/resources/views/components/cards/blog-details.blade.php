<div class="section-padding">
    <div class="container">
        <div class="row">
            <div class="col-xl-8">
                <div class="iq-blog blog-detail">

                    @if (isset($isImg) && $isImg)
                    <a href="{{ route('frontend.detail_page') }}" class="blog-image d-block overflow-hidden">
                        <img src="{{ $blogImage }}" alt="blog-image" class="img-fluid w-100" loading="lazy">
                    </a>
                    @endif


                    @if (isset($isVideo) && $isVideo)
                    <div>
                        <iframe class="w-100" height="490" src="https://www.youtube.com/embed/QCGq1epI9pQ"
                            title="Streamit Intro | ULTIMATE OTT Theme &amp; App for WordPress | Iqonic Design"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen></iframe>
                    </div>
                    @endif

                    @if (isset($isAudio) && $isAudio)
                    <div>
                        <iframe height="200" class="w-100" frameborder="no"
                            src="https://w.soundcloud.com/player/?visual=false&amp;url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F36701924&amp;show_artwork=true&amp;maxheight=750&amp;maxwidth=720&amp;auto_play=false&amp;buying=true&amp;liking=true&amp;download=true&amp;sharing=true&amp;show_comments=true&amp;show_playcount=true&amp;show_user=true&amp;color"></iframe>

                    </div>
                    @endif

                    @if (isset($isGallery) && $isGallery)
                    <div class="row row-cols-xl-3 row-cols-md-2 row-cols-1">
                        <div class="col mb-4">
                            <a data-fslightbox="gallery"
                                href=" url('{{ asset('frontend/images/blog/blog1.webp') }}'); ">
                                <img class="img-fluid" src="{{ asset('frontend/images/blog/blog1.webp') }}"
                                    alt="blog-gallery" loading="lazy">
                            </a>
                        </div>
                        <div class="col mb-4">
                            <a data-fslightbox="gallery"
                                href=" url('{{ asset('frontend/images/blog/blog2.webp') }}'); ">
                                <img class="img-fluid" src="{{ asset('frontend/images/blog/blog2.webp') }}"
                                    alt="blog-gallery" loading="lazy">
                            </a>
                        </div>
                        <div class="col mb-4">
                            <a data-fslightbox="gallery"
                                href=" url('{{ asset('frontend/images/blog/blog3.webp') }}'); ">
                                <img class="img-fluid" src="{{ asset('frontend/images/blog/blog3.webp') }}"
                                    alt="blog-gallery" loading="lazy">
                            </a>
                        </div>
                        <div class="col mb-4 mb-md-0">
                            <a data-fslightbox="gallery"
                                href=" url('{{ asset('frontend/images/blog/blog4.webp') }}'); ">
                                <img class="img-fluid" src="{{ asset('frontend/images/blog/blog4.webp') }}"
                                    alt="blog-gallery" loading="lazy">
                            </a>
                        </div>
                        <div class="col mb-4 mb-md-0">
                            <a data-fslightbox="gallery"
                                href=" url('{{ asset('frontend/images/blog/blog5.webp') }}'); ">
                                <img class="img-fluid" src="{{ asset('frontend/images/blog/blog5.webp') }}"
                                    alt="blog-gallery" loading="lazy">
                            </a>
                        </div>
                        <div class="col">
                            <a data-fslightbox="gallery"
                                href=" url('{{ asset('frontend/images/blog/Fantacy.webp') }}'); ">
                                <img class="img-fluid" src="{{ asset('frontend/images/blog/Fantacy.webp') }}"
                                    alt="blog-gallery" loading="lazy">
                            </a>
                        </div>
                    </div>
                    @endif

                    <div class="iq-blog-box pt-4">
                        <div class="iq-blog-meta d-flex mb-3">
                            <ul class="iq-blogtag list-inline">
                                <li class="border-gredient-left"><a href="{{ route('frontend.blog_author') }}"><i
                                            class="far fa-user me-1" aria-hidden="true"></i>
                                        {{__('frontendblogs.jeni')}}</a></li>
                            </ul>
                            <ul class="list-inline mb-0 ms-2">
                                <li class="border-gredient-left">
                                    <a href="{{ route('frontend.blog_date') }}">
                                        <i class="far fa-calendar-alt me-1" aria-hidden="true"></i>January 30, 2019</a>
                                </li>
                            </ul>
                        </div>


                        @if (isset($isLink) && $isLink)
                        <div class="mb-4">
                            <a href="https://iqonic.design/"><i class="fas fa-link text-primary quote-icon"></i></a>
                        </div>
                        @endif


                        @if (isset($isQuote) && $isQuote)
                        <div class="blockquote text-center mb-3">
                            <div class="blockquote-icon">
                                <i aria-hidden="true" class="fas fa-quote-right"></i>
                            </div>
                            <p>{{__('frontendblogs.movies_tretmendos')}}</p>
                            <div class="my-4">
                                <h6 class="border-gredient-left d-inline-block ps-2 fw-normal py-1">
                                    {{__('frontendblogs.walt_disney')}}
                                </h6>
                            </div>
                        </div>
                        @endif



                        <p class="text-white"><strong>{{__('frontendblogs.blog_desc')}}</strong></p>
                        <p>{{__('frontendblogs.nam_scelerisque')}}</p>
                        <p>{{__('frontendblogs.sed_leo')}}</p>

                        @if (isset($simon_doe) && $simon_doe)
                        <blockquote class="block-quote text-white">
                            <p>{{__('frontendblogs.simon_doe')}}<br />{{__('frontendblogs.fictional_skills')}}</p>
                            <cite><a href="#">{{__('frontendblogs.steve_kowalsky')}}</a></cite>
                        </blockquote>
                        @endif


                        <p>{{__('frontendblogs.potenti_fusce')}}</p>
                        <p>{{__('frontendblogs.nisi_habitasse')}}</p>

                        <p>{{__('frontendblogs.potenti_fusce')}}</p>

                        <div class="iq-blog-tag">
                            <div class="blog-nav row">
                                <div class="blog-prev-post col-lg-6 mb-5 mb-lg-0 border-end">
                                    <a href="{{ isset($previous) ? route($previous) : '#' }}">
                                        <div class="blog-arrow font-size-14 fw-normal mb-3">
                                            <i class="fas fa-arrow-left"></i>
                                            <span class="previous fw-medium fst-italic">
                                                {{__('frontendform.previous_post')}}</span>
                                        </div>
                                        <span class="fw-semibold text-white">{{__('frontendform.amy_adams')}}</span>
                                    </a>
                                </div>
                                <div class="blog-next-post col-lg-6 text-start text-lg-end">
                                    <a href="{{ isset($next) ? route($next) : '#' }}">
                                        <div class="blog-arrow font-size-14 fw-normal mb-3">
                                            <span class="next fw-medium fst-italic">
                                                {{__('frontendform.next_post')}}</span>
                                            <i class="fas fa-arrow-right"></i>
                                        </div>
                                        <span
                                            class="fw-semibold text-white">{{__('frontendform.gillian_shares')}}</span>
                                    </a>
                                </div>
                            </div>
                            <form>
                                <h4 class="fw-500 mb-3">{{__('frontendform.leave_reply')}}</h4>
                                <p class="mb-4">{{__('frontendform.logged_jenny')}}<span class="text-primary">
                                        {{__('frontendform.edit_profile')}}</span>
                                    {{__('frontendblogs.fields_marked')}}
                                </p>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <textarea class="form-control" name="comment" cols="5" rows="8" required=""
                                                placeholder="Comment"></textarea>
                                        </div>
                                    </div>

                                    <div class="col-md-12">
                                        <div class="form-submit mt-4">
                                            <div class="iq-button">
                                                <button name="submit" type="submit" id="submit"
                                                    class="btn text-uppercase position-relative" value="Submit">
                                                    <span class="button-text">{{__('frontendform.post_comment')}}</span>
                                                    <i class="fa-solid fa-play"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-4 mt-5 mt-xl-0">
                @include('frontend::components.cards.blog-sidebar', [])

            </div>
        </div>
    </div>
</div>
