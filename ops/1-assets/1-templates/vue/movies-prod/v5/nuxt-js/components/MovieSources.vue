<template>
  <!-- Movie Source Start -->
  <div class="content-details trending-info">
    <ul
      class="iq-custom-tab tab-bg-gredient-center d-flex nav nav-pills align-items-center text-center mb-5 justify-content-center list-inline"
      role="tablist"
    >
      <li class="nav-item" role="presentation">
        <a
          class="nav-link active show"
          data-bs-toggle="pill"
          href="#description-01"
          role="tab"
          aria-selected="true"
        >
          {{ $t("detail_page.description") }}</a
        >
      </li>
      <li class="nav-item" role="presentation">
        <a
          class="nav-link"
          data-bs-toggle="pill"
          href="#review-01"
          role="tab"
          aria-selected="false"
          tabindex="-1"
        >
          {{ $t("detail_page.rate") }} &amp; {{ $t("detail_page.review") }}
        </a>
      </li>
      <li class="nav-item" role="presentation">
        <a
          class="nav-link"
          data-bs-toggle="pill"
          href="#source-01"
          role="tab"
          aria-selected="false"
          tabindex="-1"
        >
          {{ $t("detail_page.sources") }}
        </a>
      </li>
    </ul>
    <div class="tab-content">
      <div
        id="description-01"
        class="tab-pane animated fadeInUp active show"
        role="tabpanel"
      >
        <div class="description-content">
          <p>
            {{ $t("detail_page.movie_desc") }}
          </p>
        </div>
      </div>
      <div id="review-01" class="tab-pane animated fadeInUp" role="tabpanel">
        <div class="streamit-reviews">
          <div id="comments" class="comments-area validate-form">
            <p class="masvideos-noreviews mt-3">
              {{ $t("detail_page.reviews_yet") }}
            </p>
          </div>
          <div class="review_form">
            <div class="comment-respond">
              <h3 class="fw-500 my-2">
                {{ $t("detail_page.first_review") }}
              </h3>
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label class="mb-2">
                      {{ $t("detail_page.your_review") }}
                      <span class="required"> * </span>
                    </label>
                    <textarea
                      class="form-control"
                      name="comment"
                      cols="5"
                      rows="8"
                      required
                    ></textarea>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label class="mb-2">
                      {{ $t("detail_page.name") }}
                      <span class="required"> * </span>
                    </label>
                    <input
                      class="form-control"
                      name="author"
                      type="text"
                      size="30"
                      required
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label class="mb-2">
                      {{ $t("detail_page.email") }} &nbsp;
                      <span class="required"> * </span>
                    </label>
                    <input
                      class="form-control"
                      name="email"
                      type="email"
                      size="30"
                      required
                    />
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="mt-3 mt-3 d-flex gap-2 align-items-center">
                    <input
                      id="check1"
                      class="form-check-input mt-0"
                      type="checkbox"
                      checked
                    />
                    <label class="form-check-label" for="check1">
                      {{ $t("detail_page.save_name") }}
                    </label>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-submit mt-4">
                    <div class="iq-button">
                      <button
                        id="submit"
                        name="submit"
                        type="submit"
                        class="btn text-uppercase position-relative"
                        value="Submit"
                      >
                        <span class="button-text">{{
                          $t("detail_page.submit")
                        }}</span>
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
                <th>{{ $t("detail_page.links") }}</th>
                <th>{{ $t("detail_page.quality") }}</th>
                <th>{{ $t("detail_page.language") }}</th>
                <th>{{ $t("detail_page.player") }}</th>
                <th>{{ $t("detail_page.date_added") }}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div class="iq-button">
                    <nuxt-link
                      :to="{ name: 'movies-detail' }"
                      class="btn text-uppercase position-relative"
                    >
                      <span class="button-text">
                        {{ $t("detail_page.play_now") }}</span
                      >
                      <i class="fa-solid fa-play"></i>
                    </nuxt-link>
                  </div>
                </td>
                <td>1080p</td>
                <td>{{ $t("detail_page.eng") }}</td>
                <td>{{ $t("detail_page.musicbee") }}</td>
                <td>2021-11-28</td>
              </tr>
              <tr>
                <td>
                  <div class="iq-button">
                    <nuxt-link
                      :to="{ name: 'movies-detail' }"
                      class="btn text-uppercase position-relative"
                    >
                      <span class="button-text">{{
                        $t("detail_page.play_now")
                      }}</span>
                      <i class="fa-solid fa-play"></i>
                    </nuxt-link>
                  </div>
                </td>
                <td>800p</td>
                <td>{{ $t("detail_page.eng") }}</td>
                <td>5{{ $t("detail_page.k_player") }}</td>
                <td>2021-11-25</td>
              </tr>
              <tr>
                <td>
                  <div class="iq-button">
                    <nuxt-link
                      :to="{ name: 'movies-detail' }"
                      class="btn text-uppercase position-relative"
                    >
                      <span class="button-text">
                        {{ $t("detail_page.play_now") }}</span
                      >
                      <i class="fa-solid fa-play"></i>
                    </nuxt-link>
                  </div>
                </td>
                <td>720p</td>
                <td>{{ $t("detail_page.eng") }}</td>
                <td>{{ $t("detail_page.mediamonkey") }}</td>
                <td>2021-11-20</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <!-- Movie Source End -->
</template>
