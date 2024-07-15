<?php

use Illuminate\Support\Facades\Route;
use Modules\Frontend\app\Http\Controllers\FrontendController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::group([], function () {
    //main pages
    Route::get('/', [FrontendController::class, 'ott'])->name('frontend.ott');
    Route::get('/home', [FrontendController::class, 'index'])->name('frontend.index');
    Route::get('/movie', [FrontendController::class, 'movie'])->name('frontend.movie');
    Route::get('/tv-show', [FrontendController::class, 'tv_show'])->name('frontend.tv-show');
    Route::get('/video', [FrontendController::class, 'video'])->name('frontend.video');
    Route::get('/merchandise', [FrontendController::class, 'merchandise'])->name('frontend.merchandise');

    //detail pages
    Route::get('/movie-detail', [FrontendController::class, 'movie_detail'])->name('frontend.movie_detail');
    Route::get('/resticted', [FrontendController::class, 'resticted'])->name('frontend.resticted');
    Route::get('/releted-merchandies', [FrontendController::class, 'releted_merchandies'])->name('frontend.releted_merchandies');
    Route::get('/tv-show-detail', [FrontendController::class, 'tvshow_detail'])->name('frontend.tvshow_detail');
    Route::get('/episode', [FrontendController::class, 'episode'])->name('frontend.episode');
    Route::get('/video-detail', [FrontendController::class, 'video_detail'])->name('frontend.video_detail');
    Route::get('/product-detail', [FrontendController::class, 'product_detail'])->name('frontend.product_detail');
    Route::get('/person-detail', [FrontendController::class, 'person_detail'])->name('frontend.person_detail');
    Route::get('/watchlist-detail', [FrontendController::class, 'watchlist_detail'])->name('frontend.watchlist_detail');
    Route::get('/view-all', [FrontendController::class, 'view_all'])->name('frontend.view_all');

    //Genres pages
    Route::get('/geners', [FrontendController::class, 'genres'])->name('frontend.genres');
    Route::get('/all-genres', [FrontendController::class, 'all_genres'])->name('frontend.all-genres');

    //cast pages
    Route::get('/cast-list', [FrontendController::class, 'cast_list'])->name('frontend.cast_list');
    Route::get('/cast-details', [FrontendController::class, 'cast_details'])->name('frontend.cast_details');
    Route::get('/all-personality', [FrontendController::class, 'all_personality'])->name('frontend.all_personality');

     //tag pages
    Route::get('/tag', [FrontendController::class, 'tag'])->name('frontend.tag');
    Route::get('/playlist', [FrontendController::class, 'play_list'])->name('frontend.play_list');

    // Extra Pages
    Route::get('/about-us', [FrontendController::class, 'about_us'])->name('frontend.about_us');
    Route::get('/contact-us', [FrontendController::class, 'contact_us'])->name('frontend.contact_us');
    Route::get('/faq_page', [FrontendController::class, 'faq_page'])->name('frontend.faq_page');
    Route::get('/privacy-policy', [FrontendController::class, 'privacy'])->name('frontend.privacy-policy');
    Route::get('/terms-and-policy', [FrontendController::class, 'terms_and_policy'])->name('frontend.terms-and-policy');
    Route::get('/comming-soon', [FrontendController::class, 'comming_soon_page'])->name('frontend.comming-soon');
    Route::get('/pricing-page', [FrontendController::class, 'pricing_page'])->name('frontend.pricing-page');
    Route::get('/error-page1', [FrontendController::class, 'error_page1'])->name('frontend.error_page1');
    Route::get('/error-page2', [FrontendController::class, 'error_page2'])->name('frontend.error_page2');

    // Blog Pages
    Route::get('/blog-list-page', [FrontendController::class, 'blog_list_page'])->name('frontend.list_page');
    Route::get('/blog-blog-filter', [FrontendController::class, 'blog_filter'])->name('frontend.blog_filter');
    Route::get('/blog-detail-page', [FrontendController::class, 'blog_detail_page'])->name('frontend.detail_page');
    Route::get('/blog-grid-list', [FrontendController::class, 'blog_grid_list'])->name('frontend.grid_list');
    Route::get('/blog-right-sidebar', [FrontendController::class, 'blog_right_sidebar'])->name('frontend.right_sidebar');
    Route::get('/blog_sidebar-list', [FrontendController::class, 'blog_sidebar_list_page'])->name('frontend.sidebar_list_page');
    Route::get('/blog-category', [FrontendController::class, 'blog_category'])->name('frontend.blog_category');
    Route::get('/blog-tag', [FrontendController::class, 'blog_tag'])->name('frontend.blog_tag');
    Route::get('/blog-date', [FrontendController::class, 'blog_date'])->name('frontend.blog_date');
    Route::get('/blog-author', [FrontendController::class, 'blog_author'])->name('frontend.blog_author');

    //Blog columns
    Route::get('/blog-grid/{grid}', [FrontendController::class, 'blog_column_grid'])->name('frontend.blog_column_grid');

    //Blog sidebar
    Route::get('/blog_left_sidebar', [FrontendController::class, 'blog_left_sidebar'])->name('frontend.left_sidebar');
    Route::get('/blog_right-sidebar', [FrontendController::class, 'blog_right_sidebar'])->name('frontend.right_sidebar');

    //Blog single
    Route::get('/blog-template', [FrontendController::class, 'blog_template'])->name('frontend.blog_template');
    Route::get('/detail-page', [FrontendController::class, 'detail_page'])->name('frontend.detail_page');
    Route::get('/blog-audio', [FrontendController::class, 'blog_audio'])->name('frontend.blog_audio');
    Route::get('/blog-video', [FrontendController::class, 'blog_video'])->name('frontend.blog_video');
    Route::get('/blog-link', [FrontendController::class, 'blog_link'])->name('frontend.blog_link');
    Route::get('/blog-quote', [FrontendController::class, 'blog_quote'])->name('frontend.blog_quote');
    Route::get('/blog-gallery', [FrontendController::class, 'blog_gallery'])->name('frontend.blog_gallery');

    Route::get('/shop', [FrontendController::class, 'shop'])->name('frontend.shop');
    Route::get('/all-products', [FrontendController::class, 'all_products'])->name('frontend.all-products');
    Route::get('/my-account', [FrontendController::class, 'my_account'])->name('frontend.my_account');
    Route::get('/cart', [FrontendController::class, 'cart'])->name('frontend.cart');
    Route::get('/wishlist', [FrontendController::class, 'wishlist'])->name('frontend.wishlist');
    Route::get('/chekout', [FrontendController::class, 'chekout'])->name('frontend.chekout');
    Route::get('/order-tracking', [FrontendController::class, 'order_tracking'])->name('frontend.order_tracking');


});
