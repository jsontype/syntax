<div class="content-details trending-info">
    <ul class="iq-custom-tab tab-bg-gredient-center d-flex nav nav-pills align-items-center text-center mb-5 justify-content-center list-inline"
        role="tablist">
        <li class="nav-item">
            <a class="nav-link active show" data-bs-toggle="pill" href="#description-01" role="tab"
                aria-selected="true">
                {{__('frontenddetail_page.description')}}
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" data-bs-toggle="pill" href="#review-01" role="tab" aria-selected="false">
                {{__('frontenddetail_page.rate')}} &amp; {{__('frontenddetail_page.review')}}
            </a>
        </li>

        <li class="nav-item">
            <a class="nav-link" data-bs-toggle="pill" href="#source-01" role="tab" aria-selected="false">
                {{__('frontendepisode_page.sources')}}
            </a>
        </li>

    </ul>
    <div class="tab-content">
        <div id="description-01" class="tab-pane animated fadeInUp active show" role="tabpanel">
            <div class="description-content">
                <p>
                    {{__('frontendepisode_page.episod_desc')}}
                </p>
            </div>
        </div>
        <div id="review-01" class="tab-pane animated fadeInUp" role="tabpanel">
            <div class="streamit-reviews">
                <div id="comments" class="comments-area validate-form">
                    <p class="masvideos-noreviews mt-3">
                        {{__('frontendepisode_page.no_reviews')}}
                    </p>
                </div>
                <div class="review_form">
                    <div class="comment-respond">
                        <h3 class="fw-500 my-2">
                            {{__('frontendepisode_page.first_review')}}
                        </h3>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label class="mb-2">
                                        {{__('frontendepisode_page.your_review')}}
                                        <span class="required">
                                            *
                                        </span>
                                    </label>
                                    <textarea class="form-control" name="comment" cols="5" rows="8"
                                        required=""></textarea>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="mb-2">
                                        {{__('frontendepisode_page.name')}}
                                        <span class="required">
                                            *
                                        </span>
                                    </label>
                                    <input class="form-control" name="author" type="text" value="" size="30"
                                        required="" />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="mb-2">
                                        {{__('frontendepisode_page.email')}}&nbsp;
                                        <span class="required">
                                            *
                                        </span>
                                    </label>
                                    <input class="form-control" name="email" type="email" value="" size="30"
                                        required="" />
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="mt-3 mt-3 d-flex gap-2 align-items-center">
                                    <input class="form-check-input mt-0" type="checkbox" value="" id="check1" checked />
                                    <label class="form-check-label" for="check1">
                                        {{__('frontendepisode_page.save_name')}}
                                    </label>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-submit mt-4">
                                    <div class="iq-button">
                                        <button name="submit" type="submit" id="submit"
                                            class="btn text-uppercase position-relative" value="Submit">
                                            <span class="button-text">{{__('frontendepisode_page.submit')}}</span>
                                            <i class="fa-solid fa-play"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="source-01" class="tab-pane animated fadeInUp" role="tabpanel">
            <div class="source-list-content table-responsive">
                <table class="table custom-table">
                    <thead>
                        <tr>
                            <th>
                                {{__('frontenddetail_page.links')}}
                            </th>
                            <th>
                                {{__('frontenddetail_page.quality')}}
                            </th>
                            <th>
                                {{__('frontenddetail_page.language')}}
                            </th>
                            <th>
                                {{__('frontenddetail_page.player')}}
                            </th>
                            <th>
                                {{__('frontenddetail_page.date_added')}}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div class="iq-button">
                                    <a href="movie-detail" class="btn text-uppercase position-relative">
                                        <span class="button-text"> {{__('otthome.play_now')}}</span>
                                        <i class="fa-solid fa-play"></i>
                                    </a>
                                </div>
                            </td>
                            <td>
                                1080p
                            </td>
                            <td>
                                {{__('frontenddetail_page.eng')}}
                            </td>
                            <td>
                                {{__('frontenddetail_page.musicbee')}}
                            </td>
                            <td>
                                2021-11-28
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="iq-button">
                                    <a href="movie-detail" class="btn text-uppercase position-relative">
                                        <span class="button-text"> {{__('otthome.play_now')}} </span>
                                        <i class="fa-solid fa-play"></i>
                                    </a>
                                </div>
                            </td>
                            <td>
                                800p
                            </td>
                            <td>
                                {{__('frontenddetail_page.eng')}}
                            </td>
                            <td>
                                5{{__('frontenddetail_page.k_player')}}
                            </td>
                            <td>
                                2021-11-25
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="iq-button">
                                    <a href="movie-detail" class="btn text-uppercase position-relative">
                                        <span class="button-text"> {{__('otthome.play_now')}}</span>
                                        <i class="fa-solid fa-play"></i>
                                    </a>
                                </div>
                            </td>
                            <td>
                                720p
                            </td>
                            <td>
                                {{__('frontenddetail_page.eng')}}
                            </td>
                            <td>
                                {{__('frontenddetail_page.mediamonkey')}}
                            </td>
                            <td>
                                2021-11-20
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    </div>
</div>