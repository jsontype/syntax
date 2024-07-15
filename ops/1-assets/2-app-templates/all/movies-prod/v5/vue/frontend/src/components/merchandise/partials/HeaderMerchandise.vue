<template>
  <!-- Header -->
  <header class="header-center-home header-merchandise">
    <div class="header-top d-xl-block d-none">
      <div class="container-fluid">
        <b-row class="row align-items-center">
          <b-col md="3">
            <router-link class="navbar-brand" :to="{ name: 'landing-page.ott' }">
              <BrandLogo />
            </router-link>
          </b-col>
          <b-col md="9">
            <ul class="d-flex align-items-center justify-content-end gap-3 list-inline mb-0">
              <li>
                <div class="search-box-2">
                  <form>
                    <input type="text" class="form-control" :placeholder="$t('header.search_dot')" />
                    <button type="submit" class="search-btn">
                      <svg width="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="11.7669" cy="11.7666" r="8.98856" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></circle>
                        <path d="M18.0186 18.4851L21.5426 22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>
                    </button>
                  </form>
                </div>
              </li>
              <li id="itemdropdown1" class="nav-item dropdown">
                <select v-model="$i18n.locale" class="form-select py-1">
                  <option v-for="locale in $i18n.availableLocales" :key="locale">
                    <a href="#" class="dropdown-item">{{ locale }}</a>
                  </option>
                </select>
              </li>
              <li>
                <a href="#offcanvasCart" class="text-white" data-bs-toggle="offcanvas">
                  <span class="btn-icon rounded-pill user-icons">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0096 14.3334H4.44435C2.40011 14.3334 0.831841 13.595 1.2773 10.6232L1.79599 6.59575C2.07059 5.11292 3.01643 4.54541 3.84633 4.54541H10.632C11.4741 4.54541 12.365 5.15563 12.6823 6.59575L13.201 10.6232C13.5794 13.2594 12.0538 14.3334 10.0096 14.3334Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M10.1008 4.39882C10.1008 2.80811 8.81129 1.51858 7.22057 1.51858V1.51858C6.45457 1.51533 5.71883 1.81735 5.17604 2.35786C4.63325 2.89836 4.32812 3.63282 4.32813 4.39882H4.32812" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M9.1983 7.4013H9.16779" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M5.3106 7.4013H5.28009" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                  </span>
                </a>
              </li>
              <li id="itemdropdown1" class="dropdown">
                <a id="navbarDropdown" class="text-white d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <div class="btn-icon rounded-pill user-icons">
                    <span class="btn-inner">
                      <svg class="icon-18" width="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.87651 15.2063C6.03251 15.2063 2.74951 15.7873 2.74951 18.1153C2.74951 20.4433 6.01251 21.0453 9.87651 21.0453C13.7215 21.0453 17.0035 20.4633 17.0035 18.1363C17.0035 15.8093 13.7415 15.2063 9.87651 15.2063Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.8766 11.886C12.3996 11.886 14.4446 9.841 14.4446 7.318C14.4446 4.795 12.3996 2.75 9.8766 2.75C7.3546 2.75 5.3096 4.795 5.3096 7.318C5.3006 9.832 7.3306 11.877 9.8456 11.886H9.8766Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M19.2036 8.66919V12.6792" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M21.2497 10.6741H17.1597" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>
                    </span>
                  </div>
                </a>
                <ul class="dropdown-menu dropdown-menu-end dropdown-user border-0 p-0 m-0" aria-labelledby="navbarDropdown">
                  <li class="user-info d-flex align-items-center gap-3 mb-3">
                    <img src="/assets/images/user/user1.webp" class="img-fluid" alt="" loading="lazy" />
                    <span class="font-size-14 fw-500 text-capitalize text-white">{{ $t('header.jenny') }}</span>
                  </li>
                  <li>
                    <a href="#" class="iq-sub-card d-flex align-items-center gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 22" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.84455 20.6621C4.15273 20.6621 1 20.0876 1 17.7868C1 15.486 4.13273 13.3621 7.84455 13.3621C11.5364 13.3621 14.6891 15.4654 14.6891 17.7662C14.6891 20.066 11.5564 20.6621 7.84455 20.6621Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.83725 10.1738C10.26 10.1738 12.2236 8.21015 12.2236 5.78742C12.2236 3.36469 10.26 1.40015 7.83725 1.40015C5.41452 1.40015 3.44998 3.36469 3.44998 5.78742C3.4418 8.20196 5.3918 10.1656 7.80634 10.1738C7.81725 10.1738 7.82725 10.1738 7.83725 10.1738Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <h6 class="mb-0 font-size-14 fw-normal">{{ $t('header.my_account') }}</h6>
                    </a>
                  </li>
                  <li>
                    <a href="" class="iq-sub-card d-flex align-items-center gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M6.425 13.75V7.575H0.25V6.425H6.425V0.25H7.575V6.425H13.75V7.575H7.575V13.75H6.425Z" fill="white"></path>
                      </svg>
                      <h6 class="mb-0 font-size-14 fw-normal">{{ $t('header.watchlist') }}</h6>
                    </a>
                  </li>
                  <li>
                    <a href="" class="iq-sub-card d-flex align-items-center gap-3">
                      <i class="fa-regular fa-star"></i>
                      <h6 class="mb-0 font-size-14 fw-normal">{{ $t('header.subscription') }}</h6>
                    </a>
                  </li>
                  <li>
                    <router-link to="/login" class="iq-sub-card iq-logout-2 mt-1 d-flex justify-content-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M1.82209 15.9999C1.46654 15.9999 1.16283 15.874 0.910981 15.6221C0.659129 15.3703 0.533203 15.0666 0.533203 14.711V1.73322C0.533203 1.37767 0.659129 1.07397 0.910981 0.822114C1.16283 0.570262 1.46654 0.444336 1.82209 0.444336H7.95543V1.44434H1.82209C1.74802 1.44434 1.68135 1.47397 1.62209 1.53322C1.56283 1.59248 1.5332 1.65915 1.5332 1.73322V14.711C1.5332 14.7851 1.56283 14.8517 1.62209 14.911C1.68135 14.9703 1.74802 14.9999 1.82209 14.9999H7.95543V15.9999H1.82209ZM12.0888 11.5999L11.3554 10.8888L13.5332 8.73322H5.68876V7.711H13.511L11.3332 5.55545L12.0665 4.82211L15.4665 8.24434L12.0888 11.5999Z" fill="currentColor"></path>
                      </svg>
                      <h6 class="mb-0 font-size-14 fw-normal">{{ $t('header.logout') }}</h6>
                    </router-link>
                  </li>
                </ul>
              </li>
            </ul>
          </b-col>
        </b-row>
      </div>
    </div>
    <div class="header-bottom header-sticky">
      <nav class="nav navbar navbar-expand-xl navbar-light iq-navbar header-hover-menu py-xl-0">
        <div class="container-fluid navbar-inner">
          <div class="d-flex align-items-center justify-content-between w-100 landing-header">
            <div class="d-xl-none d-flex gap-3 gap-xl-0 align-items-center">
              <div>
                <button type="button" data-bs-toggle="offcanvas" data-bs-target="#navbar_main" aria-controls="navbar_main" class="d-xl-none btn btn-primary rounded-pill p-1 pt-0 toggle-rounded-btn">
                  <svg width="20px" class="icon-20" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path>
                  </svg>
                </button>
              </div>
              <!--Logo -->
              <BrandLogo />
            </div>
            <nav id="navbar_main" class="offcanvas mobile-offcanvas nav navbar navbar-expand-xl hover-nav horizontal-nav py-xl-0">
              <div class="container-fluid p-lg-0">
                <div class="offcanvas-header px-0">
                  <div class="navbar-brand ms-3">
                    <!--Logo -->
                    <BrandLogo />
                  </div>
                  <button type="button" class="btn-close float-end px-3" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <ul id="header-menu" class="navbar-nav iq-nav-menu list-unstyled">
                  <li class="nav-item">
                    <a class="nav-link active" data-bs-toggle="collapse" href="#homePages" role="button" aria-expanded="false" aria-controls="homePages">
                      <span class="item-name">{{ $t('header.home') }}</span
                      >{{ ' ' }}
                      <span class="menu-icon">
                        <i class="fa fa-caret-down toggledrop-desktop right-icon" aria-hidden="true"></i>
                        <span class="toggle-menu">
                          <i class="fa fa-plus arrow-active text-white" aria-hidden="true"></i>
                          <i class="fa fa-minus arrow-hover text-white" aria-hidden="true"></i>
                        </span>
                      </span>
                    </a>
                    <ul id="homePages" class="sub-nav collapse list-unstyled">
                      <li class="nav-item">
                        <router-link :class="`nav-link ${IS_MEGA ? 'p-0' : ''}`" :to="{ name: 'landing-page.ott' }">
                          <img v-if="IS_MEGA" src="/assets/images/mega-menu/new-home.webp" alt="img" class="img-fluid d-xl-block d-none" loading="lazy" />
                          <span class="d-inline-block">{{ $t('header.ott_home') }} </span>
                        </router-link>
                      </li>
                      <li class="nav-item">
                        <router-link :class="`nav-link ${IS_MEGA ? 'p-0' : ''}`" :to="{ name: 'landing-page.home' }">
                          <img v-if="IS_MEGA" src="/assets/images/mega-menu/home.webp" alt="img" class="img-fluid d-xl-block d-none" loading="lazy" />
                          <span class="d-inline-block">{{ $t('header.home') }}</span>
                        </router-link>
                      </li>
                      <li class="nav-item">
                        <router-link :class="`nav-link ${IS_MEGA ? 'p-0' : ''}`" :to="{ name: 'landing-page.movies' }">
                          <img v-if="IS_MEGA" src="/assets/images/mega-menu/movie.webp" alt="img" class="img-fluid d-xl-block d-none" loading="lazy" />
                          <span class="d-inline-block">{{ $t('header.movie') }}</span>
                        </router-link>
                      </li>
                      <li class="nav-item">
                        <router-link :class="`nav-link ${IS_MEGA ? 'p-0' : ''}`" :to="{ name: 'landing-page.tv-shows' }">
                          <img v-if="IS_MEGA" src="/assets/images/mega-menu/tv-show.webp" alt="img" class="img-fluid d-xl-block d-none" loading="lazy" />
                          <span class="d-inline-block">{{ $t('header.tv_show') }}</span>
                        </router-link>
                      </li>
                      <li class="nav-item">
                        <router-link :class="`nav-link ${IS_MEGA ? 'p-0' : ''}`" :to="{ name: 'landing.videos' }">
                          <img v-if="IS_MEGA" src="/assets/images/mega-menu/video.webp" alt="img" class="img-fluid d-xl-block d-none" loading="lazy" />
                          <span class="d-inline-block">{{ $t('header.video') }}</span>
                        </router-link>
                      </li>
                      <li class="nav-item">
                        <router-link :class="`nav-link ${IS_MEGA ? 'p-0' : ''}`" :to="{ name: 'landing-page.merchandise.home' }">
                          <img v-if="IS_MEGA" src="/assets/images/mega-menu/shop-home.webp" alt="img" class="img-fluid d-xl-block d-none" loading="lazy" />
                          <span class="d-inline-block">{{ $t('header.merchandise_store') }}</span>
                        </router-link>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="collapse" href="#features" role="button" aria-expanded="false" aria-controls="homePages">
                      <span class="item-name">{{ $t('header.features') }}</span
                      >{{ ' ' }}
                      <span class="menu-icon">
                        <i class="fa fa-caret-down toggledrop-desktop right-icon" aria-hidden="true"></i>
                        <span class="toggle-menu">
                          <i class="fa fa-plus arrow-active text-white" aria-hidden="true"></i>
                          <i class="fa fa-minus arrow-hover text-white" aria-hidden="true"></i>
                        </span>
                      </span>
                    </a>
                    <ul id="features" class="sub-nav collapse list-unstyled">
                      <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'landing-page.movies.skull-island' }"> {{ $t('header.restricted_content') }}</router-link>
                      </li>
                      <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'landing-page.movies.related' }"> {{ $t('header.related_merchandise') }} </router-link>
                      </li>
                      <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'landing-page.play-list' }"> {{ $t('header.playlist') }}</router-link>
                      </li>
                      <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'landing-page.geners' }"> {{ $t('header.geners') }} </router-link>
                      </li>
                      <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'landing-page.cast' }"> {{ $t('header.cast') }} </router-link>
                      </li>
                      <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'landing-page.tags' }"> {{ $t('header.tags') }} </router-link>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="collapse" href="#pages" role="button" aria-expanded="false" aria-controls="homePages">
                      <span class="item-name">{{ $t('header.pages') }}</span
                      >{{ ' ' }}
                      <span class="menu-icon">
                        <i class="fa fa-caret-down toggledrop-desktop right-icon" aria-hidden="true"></i>
                        <span class="toggle-menu">
                          <i class="fa fa-plus arrow-active text-white" aria-hidden="true"></i>
                          <i class="fa fa-minus arrow-hover text-white" aria-hidden="true"></i>
                        </span>
                      </span>
                    </a>
                    <ul id="pages" class="sub-nav collapse list-unstyled">
                      <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'landing-page.about-us' }"> {{ $t('header.about_us') }} </router-link>
                      </li>
                      <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'landing-page.contact-us' }"> {{ $t('header.contact_us') }} </router-link>
                      </li>
                      <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'landing-page.faq' }"> {{ $t('header.faq') }} </router-link>
                      </li>
                      <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'landing-page.privacy-policy' }"> {{ $t('header.privacy_policy') }} </router-link>
                      </li>
                      <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'landing-page.pricing-plan' }"> {{ $t('header.pricing_plan') }} </router-link>
                      </li>
                      <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'landing-page.comming-soon' }"> {{ $t('header.coming_soon') }} </router-link>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" data-bs-toggle="collapse" href="#error-page" role="button" aria-expanded="false" aria-controls="error-page">
                          <span class="item-name">{{ $t('header.error_page') }}</span>
                          <span class="menu-icon">
                            <i class="fa fa-caret-right toggledrop-desktop right-icon" aria-hidden="true"></i>
                            <span class="toggle-menu">
                              <i class="fa fa-plus arrow-active text-white" aria-hidden="true"></i>
                              <i class="fa fa-minus arrow-hover text-white" aria-hidden="true"></i>
                            </span>
                          </span>
                        </a>
                        <ul id="error-page" class="sub-nav collapse list-unstyled">
                          <li class="nav-item">
                            <router-link class="nav-link" :to="{ name: 'landing-page.error-page-one' }"> {{ $t('header.error_page') }} 1 </router-link>
                          </li>
                          <li class="nav-item">
                            <router-link class="nav-link" :to="{ name: 'landing-page.error-page-two' }"> {{ $t('header.error_page') }} 2 </router-link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="collapse" href="#blog" role="button" aria-expanded="false" aria-controls="blog">
                      <span class="item-name">{{ $t('header.blog') }}</span
                      >{{ ' ' }}
                      <span class="menu-icon">
                        <i class="fa fa-caret-down toggledrop-desktop right-icon" aria-hidden="true"></i>
                        <span class="toggle-menu">
                          <i class="fa fa-plus arrow-active text-white" aria-hidden="true"></i>
                          <i class="fa fa-minus arrow-hover text-white" aria-hidden="true"></i>
                        </span>
                      </span>
                    </a>
                    <ul id="blog" class="sub-nav collapse list-unstyled">
                      <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'landing-page.blogs' }"> {{ $t('header.listing') }} </router-link>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" data-bs-toggle="collapse" href="#blog-grid" role="button" aria-expanded="false" aria-controls="blog-grid">
                          <span class="item-name">{{ $t('header.blog_grid') }}</span>
                          <span class="menu-icon">
                            <i class="fa fa-caret-right toggledrop-desktop right-icon" aria-hidden="true"></i>
                            <span class="toggle-menu">
                              <i class="fa fa-plus arrow-active text-white" aria-hidden="true"></i>
                              <i class="fa fa-minus arrow-hover text-white" aria-hidden="true"></i>
                            </span>
                          </span>
                        </a>
                        <ul id="blog-grid" class="sub-nav collapse list-unstyled">
                          <li class="nav-item">
                            <router-link class="nav-link" :to="{ name: 'landing-page.blogs-grid', params: { grid: 'one-column' } }"> 1 {{ $t('header.column') }} </router-link>
                          </li>
                          <li class="nav-item">
                            <router-link class="nav-link" :to="{ name: 'landing-page.blogs-grid', params: { grid: 'two-column' } }"> 2 {{ $t('header.column') }} </router-link>
                          </li>
                          <li class="nav-item">
                            <router-link class="nav-link" :to="{ name: 'landing-page.blogs-grid', params: { grid: 'three-column' } }"> 3 {{ $t('header.column') }} </router-link>
                          </li>
                          <li class="nav-item">
                            <router-link class="nav-link" :to="{ name: 'landing-page.blogs-grid', params: { grid: 'four-column' } }"> 4 {{ $t('header.column') }} </router-link>
                          </li>
                        </ul>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" data-bs-toggle="collapse" href="#blog-sidebar" role="button" aria-expanded="false" aria-controls="blog-sidebar">
                          <span class="item-name">{{ $t('header.blog_sidebar') }}</span>
                          <span class="menu-icon">
                            <i class="fa fa-caret-right toggledrop-desktop right-icon" aria-hidden="true"></i>
                            <span class="toggle-menu">
                              <i class="fa fa-plus arrow-active text-white" aria-hidden="true"></i>
                              <i class="fa fa-minus arrow-hover text-white" aria-hidden="true"></i>
                            </span>
                          </span>
                        </a>
                        <ul id="blog-sidebar" class="sub-nav collapse list-unstyled">
                          <li class="nav-item">
                            <router-link class="nav-link" :to="{ name: 'landing-page.blogs-sidebar' }"> {{ $t('header.left_sidebar') }} </router-link>
                          </li>
                          <li class="nav-item">
                            <router-link class="nav-link" :to="{ name: 'landing-page.blogs-sidebar.right' }"> {{ $t('header.right_sidebar') }} </router-link>
                          </li>
                        </ul>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" data-bs-toggle="collapse" href="#blog-single" role="button" aria-expanded="false" aria-controls="blog-single">
                          <span class="item-name">{{ $t('header.blog_single') }}</span>
                          <span class="menu-icon">
                            <i class="fa fa-caret-right toggledrop-desktop right-icon" aria-hidden="true"></i>
                            <span class="toggle-menu">
                              <i class="fa fa-plus arrow-active text-white" aria-hidden="true"></i>
                              <i class="fa fa-minus arrow-hover text-white" aria-hidden="true"></i>
                            </span>
                          </span>
                        </a>
                        <ul id="blog-single" class="sub-nav collapse list-unstyled">
                          <li class="nav-item">
                            <router-link class="nav-link" :to="{ name: 'landing-page.blogs.template' }"> {{ $t('header.blog_template') }} </router-link>
                          </li>
                          <li class="nav-item">
                            <router-link class="nav-link" :to="{ name: 'landing-page.blogs.detail', params: { slug: 'island-2-is-still-in-deving-magic-confirms' } }"> {{ $t('header.standard') }} </router-link>
                          </li>
                          <li class="nav-item">
                            <router-link class="nav-link" :to="{ name: 'landing-page.blogs.single', params: { type: 'audio' } }"> {{ $t('header.audio') }} </router-link>
                          </li>
                          <li class="nav-item">
                            <router-link class="nav-link" :to="{ name: 'landing-page.blogs.detail', params: { slug: '10-teams-we-cant-wait-to-use-in-soccer-2022' } }"> {{ $t('header.video') }} </router-link>
                          </li>
                          <li class="nav-item">
                            <router-link class="nav-link" :to="{ name: 'landing-page.blogs.single', params: { type: 'link' } }"> {{ $t('header.link') }} </router-link>
                          </li>
                          <li class="nav-item">
                            <router-link class="nav-link" :to="{ name: 'landing-page.blogs.detail', params: { slug: '10-free-games-with-gold-of-July-2022-are-out' } }"> {{ $t('header.quote') }} </router-link>
                          </li>
                          <li class="nav-item">
                            <router-link class="nav-link" :to="{ name: 'landing-page.blogs.detail', params: { slug: 'a-free-pc-game-is-still-available-through-ae' } }"> {{ $t('header.gallery') }} </router-link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="collapse" href="#shop" role="button" aria-expanded="false" aria-controls="shop" :class="route.name === 'landing-page.merchandise.shop' ? 'active' : ''">
                      <span class="item-name">{{ $t('header.shop') }}</span
                      >{{ ' ' }}
                      <span class="menu-icon">
                        <i class="fa fa-caret-down toggledrop-desktop right-icon" aria-hidden="true"></i>
                        <span class="toggle-menu">
                          <i class="fa fa-plus arrow-active text-white" aria-hidden="true"></i>
                          <i class="fa fa-minus arrow-hover text-white" aria-hidden="true"></i>
                        </span>
                      </span>
                    </a>
                    <ul id="shop" class="sub-nav collapse list-unstyled">
                      <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'landing-page.merchandise.shop' }"> {{ $t('header.shop') }} </router-link>
                      </li>
                      <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'landing-page.account' }"> {{ $t('header.my_account_page') }} </router-link>
                      </li>
                      <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'landing-page.cart' }"> {{ $t('header.cart_page') }} </router-link>
                      </li>
                      <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'landing-page.wishlist' }"> {{ $t('header.wishlist_page') }} </router-link>
                      </li>
                      <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'landing-page.checkout' }"> {{ $t('header.checkout_page') }} </router-link>
                      </li>
                      <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'landing-page.track-order' }"> {{ $t('header.order_tracking') }} </router-link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </nav>
            <div class="right-panel">
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-btn">
                  <span class="navbar-toggler-icon"></span>
                </span>
              </button>
              <div id="navbarSupportedContent" class="collapse navbar-collapse p-3">
                <div class="iq-meta-menu-container d-xl-block d-none">
                  <ul class="d-flex align-items-center m-0 list-inline iq-meta-menu">
                    <li>
                      <router-link :to="{ name: 'landing-page.account' }">{{ $t('header.my_account') }}</router-link>
                    </li>
                    <li>
                      <a href="https://iqonic.desky.support/">{{ $t('header.customer_support') }}</a>
                    </li>
                    <li>
                      <router-link :to="{ name: 'landing-page.contact-us' }">{{ $t('header.help') }}</router-link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
  <!-- Header End -->
</template>
<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue';
import BrandLogo from '../../brand/BrandLogo.vue';
import { useRoute } from 'vue-router';

const IS_MEGA = ref(false);
const route = useRoute();
watch(
  () => route.name,
  () => {
    if (route.name == 'landing-page.ott') {
      IS_MEGA.value = true;
    } else {
      IS_MEGA.value = false;
    }
  }
);

console.log(route.name);

const handleScroll = () => {
  const headerSticky = document.querySelector('.header-sticky');
  if (headerSticky) {
    if (window.scrollY > 1) {
      headerSticky.classList.add('sticky');
    } else {
      headerSticky.classList.remove('sticky');
    }
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
