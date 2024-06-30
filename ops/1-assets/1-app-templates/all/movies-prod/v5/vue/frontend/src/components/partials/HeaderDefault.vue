<template>
  <header class="header-center-home header-default header-sticky">
    <nav class="nav navbar navbar-expand-xl navbar-light iq-navbar header-hover-menu py-xl-0">
      <div class="container-fluid navbar-inner">
        <div class="d-flex align-items-center justify-content-between w-100 landing-header">
          <div class="d-flex gap-3 gap-xl-0 align-items-center">
            <div>
              <button type="button" data-bs-toggle="offcanvas" data-bs-target="#navbar_main" aria-controls="navbar_main" class="d-xl-none btn btn-primary rounded-pill p-1 pt-0 toggle-rounded-btn">
                <svg width="20px" class="icon-20" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path>
                </svg>
              </button>
            </div>
            <router-link :to="{ name: 'landing-page.ott' }">
              <BrandLogo />
            </router-link>
          </div>
          <nav id="navbar_main" :class="`offcanvas mobile-offcanvas nav navbar navbar-expand-xl hover-nav horizontal-nav py-xl-0 ${IS_MEGA ? 'mega-menu-content' : ''}`">
            <div class="container-fluid p-lg-0">
              <div class="offcanvas-header px-0">
                <div class="navbar-brand ms-3">
                  <router-link class="navbar-brand" :to="{ name: 'landing-page.ott' }">
                    <BrandLogo />
                  </router-link>
                </div>
                <button type="button" class="btn-close float-end px-3" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <ul id="header-menu" class="navbar-nav iq-nav-menu list-unstyled">
                <li class="nav-item">
                  <a class="nav-link" data-bs-toggle="collapse" href="#homePages" role="button" aria-expanded="false" aria-controls="homePages" :class="route.name === 'landing-page.home' || route.name === 'landing-page.ott' || route.name === 'landing-page.movies' || route.name === 'landing-page.tv-shows' || route.name === 'landing.videos' || route.name === 'landing-page.merchandise' ? 'active' : ''">
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
                  <ul id="homePages" :class="`sub-nav collapse justify-content-center list-unstyled ${IS_MEGA ? 'mega-menu-item' : ''}`">
                    <li class="nav-item">
                      <router-link :class="`nav-link ${IS_MEGA ? 'p-0' : ''}`" :to="{ name: 'landing-page.ott' }">
                        <img v-if="IS_MEGA" src="/assets/images/mega-menu/new-home.webp" alt="img" class="img-fluid d-xl-block d-none" loading="lazy" />
                        <span class="d-inline-block">{{ $t('header.ott_home') }}</span>
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
                  <a class="nav-link" data-bs-toggle="collapse" href="#features" role="button" aria-expanded="false" aria-controls="homePages" :class="route.name === 'landing-page.movies.skull-island' || route.name === 'landing-page.movies.related' || route.name === 'landing-page.play-list' || route.name === 'landing-page.geners' || route.name === 'landing-page.cast' || route.name === 'landing-page.tags' ? 'active' : ''">
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
                      <router-link class="nav-link" :to="{ name: 'landing-page.movies.skull-island' }"> {{ $t('header.restricted_content') }} </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link" :to="{ name: 'landing-page.movies.related' }"> {{ $t('header.related_merchandise') }}</router-link>
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
                  <a class="nav-link" data-bs-toggle="collapse" href="#pages" role="button" aria-expanded="false" aria-controls="homePages" :class="route.name === 'landing-page.about-us' || route.name === 'landing-page.contact-us' || route.name === 'landing-page.faq' || route.name === 'landing-page.privacy-policy' || route.name === 'landing-page.pricing-plan' || route.name === '' ? 'active' : ''">
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
                  <a class="nav-link" data-bs-toggle="collapse" href="#blog" role="button" aria-expanded="false" aria-controls="blog" :class="route.name === 'landing-page.blogs' || route.name === 'langing-page.blogs-grid' || route.name === 'landing-page.blogs-sidebar' || route.name === 'landing-page.blogs.template' ? 'active' : ''">
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
                          <router-link class="nav-link" :to="{ name: 'landing-page.blogs.detail', params: { slug: 'the-most-anticipated-movies' } }"> {{ $t('header.standard') }} </router-link>
                        </li>
                        <li class="nav-item">
                          <router-link class="nav-link" :to="{ name: 'landing-page.blogs.single', params: { type: 'audio' } }"> {{ $t('header.audio') }} </router-link>
                        </li>
                        <li class="nav-item">
                          <router-link class="nav-link" :to="{ name: 'landing-page.blogs.single', params: { type: 'video' } }"> {{ $t('header.video') }} </router-link>
                        </li>
                        <li class="nav-item">
                          <router-link class="nav-link" :to="{ name: 'landing-page.blogs.single', params: { type: 'link' } }"> {{ $t('header.link') }} </router-link>
                        </li>
                        <li class="nav-item">
                          <router-link class="nav-link" :to="{ name: 'landing-page.blogs.single', params: { type: 'quote' } }"> {{ $t('header.quote') }} </router-link>
                        </li>
                        <li class="nav-item">
                          <router-link class="nav-link" :to="{ name: 'landing-page.blogs.single', params: { type: 'gallery' } }"> {{ $t('header.gallery') }} </router-link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-bs-toggle="collapse" href="#shop" role="button" aria-expanded="false" aria-controls="shop" :class="route.name === 'landing-page.account' || route.name === 'landing-page.cart' || route.name === 'landing-page.wishlist' || route.name === 'landing-page.checkout' || route.name === 'landing-page.track-order' || route.name === 'landing-page.product-detail' ? 'active' : ''">
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
            <!-- container-fluid.// -->
          </nav>
          <div class="right-panel">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-btn">
                <span class="navbar-toggler-icon"></span>
              </span>
            </button>
            <div id="navbarSupportedContent" class="collapse navbar-collapse">
              <ul class="navbar-nav align-items-center ms-auto mb-2 mb-xl-0 gap-3">
                <li class="nav-item dropdown iq-responsive-menu">
                  <div class="search-box">
                    <router-link id="search-drop" to="#" class="nav-link p-0" data-bs-toggle="dropdown">
                      <div class="btn-icon btn-sm rounded-pill btn-action">
                        <span class="btn-inner">
                          <svg class="icon-20" width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="11.7669" cy="11.7666" r="8.98856" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></circle>
                            <path d="M18.0186 18.4851L21.5426 22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </span>
                      </div>
                    </router-link>
                    <ul class="dropdown-menu p-0 dropdown-search m-0 iq-search-bar" style="width: 20rem">
                      <li class="p-0">
                        <div class="form-group input-group mb-0">
                          <input type="text" class="form-control border-0" :placeholder="$t('header.search_dot')" />
                          <button type="submit" class="search-submit">
                            <svg class="icon-15" width="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="11.7669" cy="11.7666" r="8.98856" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></circle>
                              <path d="M18.0186 18.4851L21.5426 22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                          </button>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li id="itemdropdown1" class="nav-item dropdown">
                  <select v-model="$i18n.locale" class="form-select py-1">
                    <option v-for="locale in $i18n.availableLocales" :key="locale">
                      <a href="#" class="dropdown-item">{{ locale }}</a>
                    </option>
                  </select>
                </li>
                <li id="itemdropdown1" class="nav-item dropdown">
                  <router-link id="navbarDropdown" class="nav-link d-flex align-items-center px-0" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                  </router-link>

                  <ul class="dropdown-menu dropdown-menu-end dropdown-user border-0 p-0 m-0" aria-labelledby="navbarDropdown">
                    <li class="user-info d-flex align-items-center gap-3 mb-3">
                      <img src="/assets/images/user/user1.webp" class="img-fluid" alt="" loading="lazy" />
                      <span class="font-size-14 fw-500 text-capitalize text-white">{{ $t('header.jenny') }}</span>
                    </li>
                    <li>
                      <router-link :to="{ name: 'landing-page.play-list' }" class="iq-sub-card d-flex align-items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 22" fill="none">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M7.84455 20.6621C4.15273 20.6621 1 20.0876 1 17.7868C1 15.486 4.13273 13.3621 7.84455 13.3621C11.5364 13.3621 14.6891 15.4654 14.6891 17.7662C14.6891 20.066 11.5564 20.6621 7.84455 20.6621Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M7.83725 10.1738C10.26 10.1738 12.2236 8.21015 12.2236 5.78742C12.2236 3.36469 10.26 1.40015 7.83725 1.40015C5.41452 1.40015 3.44998 3.36469 3.44998 5.78742C3.4418 8.20196 5.3918 10.1656 7.80634 10.1738C7.81725 10.1738 7.82725 10.1738 7.83725 10.1738Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                        <h6 class="mb-0 font-size-14 fw-normal">{{ $t('header.my_account') }}</h6>
                      </router-link>
                    </li>
                    <li>
                      <router-link :to="{ name: 'landing-page.play-list' }" class="iq-sub-card d-flex align-items-center gap-3">
                        <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="m0 0h24v24h-24z" fill="#fff" opacity="0" transform="matrix(-1 0 0 -1 24 24)"></path>
                          <path d="m19 11h-6v-6a1 1 0 0 0 -2 0v6h-6a1 1 0 0 0 0 2h6v6a1 1 0 0 0 2 0v-6h6a1 1 0 0 0 0-2z" fill="currentColor"></path>
                        </svg>
                        <h6 class="mb-0 font-size-14 fw-normal">{{ $t('header.watchlist') }}</h6>
                      </router-link>
                    </li>
                    <li>
                      <router-link :to="{ name: 'landing-page.pricing-plan' }" class="iq-sub-card d-flex align-items-center gap-3">
                        <svg width="16" height="16" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8.58737 8.23597L11.1849 3.00376C11.5183 2.33208 12.4817 2.33208 12.8151 3.00376L15.4126 8.23597L21.2215 9.08017C21.9668 9.18848 22.2638 10.0994 21.7243 10.6219L17.5217 14.6918L18.5135 20.4414C18.6409 21.1798 17.8614 21.7428 17.1945 21.3941L12 18.678L6.80547 21.3941C6.1386 21.7428 5.35909 21.1798 5.48645 20.4414L6.47825 14.6918L2.27575 10.6219C1.73617 10.0994 2.03322 9.18848 2.77852 9.08017L8.58737 8.23597Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                        <h6 class="mb-0 font-size-14 fw-normal">{{ $t('header.subscription') }}</h6>
                      </router-link>
                    </li>
                    <li>
                      <router-link :to="{ name: 'landing-page.login-page' }" class="iq-sub-card iq-logout-2 mt-1 d-flex justify-content-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M1.82209 15.9999C1.46654 15.9999 1.16283 15.874 0.910981 15.6221C0.659129 15.3703 0.533203 15.0666 0.533203 14.711V1.73322C0.533203 1.37767 0.659129 1.07397 0.910981 0.822114C1.16283 0.570262 1.46654 0.444336 1.82209 0.444336H7.95543V1.44434H1.82209C1.74802 1.44434 1.68135 1.47397 1.62209 1.53322C1.56283 1.59248 1.5332 1.65915 1.5332 1.73322V14.711C1.5332 14.7851 1.56283 14.8517 1.62209 14.911C1.68135 14.9703 1.74802 14.9999 1.82209 14.9999H7.95543V15.9999H1.82209ZM12.0888 11.5999L11.3554 10.8888L13.5332 8.73322H5.68876V7.711H13.511L11.3332 5.55545L12.0665 4.82211L15.4665 8.24434L12.0888 11.5999Z" fill="currentColor"></path>
                        </svg>
                        <h6 class="mb-0 font-size-14 fw-normal">{{ $t('header.logout') }}</h6>
                      </router-link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue';
import BrandLogo from '../brand/BrandLogo.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const IS_MEGA = ref(route.name == 'landing-page.ott' ? true : false);
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
