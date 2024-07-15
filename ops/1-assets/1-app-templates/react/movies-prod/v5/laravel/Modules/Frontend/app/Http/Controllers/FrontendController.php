<?php

namespace Modules\Frontend\app\Http\Controllers;

use App\Http\Controllers\Controller;

class FrontendController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    //main pages
    public function index()
    {
        return view('frontend::Pages.MainPages.index-page');
    }

    public function ott()
    {
        return view('frontend::Pages.MainPages.ott-page');
    }

    public function movie()
    {
        return view('frontend::Pages.MainPages.movies-page');
    }

    public function tv_show()
    {
        return view('frontend::Pages.MainPages.tv-shows-page');
    }

    public function video()
    {
        return view('frontend::Pages.MainPages.videos-Page');
    }

    public function merchandise()
    {
        return view('frontend::Pages.MainPages.merchandise-page');
    }

    //movies pages
    public function resticted()
    {
        return view('frontend::Pages.Movies.resticted-page');
    }

    public function releted_merchandies()
    {
        return view('frontend::Pages.Movies.releted-merchandies-page');
    }

    //deatil pages
    public function movie_detail()
    {
        return view('frontend::Pages.Movies.detail-page');
    }

    public function tvshow_detail()
    {
        return view('frontend::Pages.TvShows.detail-page');
    }

    public function episode()
    {
        return view('frontend::Pages.TvShows.episode-page');
    }

    public function video_detail()
    {
        return view('frontend::Pages.videos-detail');
    }

    public function product_detail()
    {
        return view('frontend::Pages.product-detail');
    }

    public function watchlist_detail()
    {
        return view('frontend::Pages.watchlist-detail');
    }

    public function view_all()
    {
        return view('frontend::Pages.view-all');
    }

    // Genres Pages Routes
    public function genres()
    {
        return view('frontend::Pages.geners-page');
    }

    public function all_genres()
    {
        return view('frontend::Pages.all-geners-page');
    }

    // tag Pages Routes
    public function tag()
    {
        return view('frontend::Pages.tags-page');
    }

    // cast Pages Routes
    public function cast_details()
    {
        return view('frontend::Pages.Cast.detail-page');
    }

    public function cast_list()
    {
        return view('frontend::Pages.Cast.list-page');
    }

    public function all_personality()
    {
        return view('frontend::Pages.Cast.all-personality');
    }

    // playlist Pages Routes
    public function play_list()
    {
        return view('frontend::Pages.playlist');
    }

    // Extra Pages
    public function about_us()
    {
        return view('frontend::Pages.ExtraPages.about-page');
    }

    public function contact_us()
    {
        return view('frontend::Pages.ExtraPages.contact-page');
    }

    public function faq_page()
    {
        return view('frontend::Pages.ExtraPages.faq-page');
    }

    public function privacy()
    {
        return view('frontend::Pages.ExtraPages.privacy-policy-page');
    }

    public function terms_and_policy()
    {
        return view('frontend::Pages.ExtraPages.terms-of-use-page');
    }

    public function comming_soon_page()
    {
        return view('frontend::Pages.ExtraPages.comming-soon-page');
    }

    public function pricing_page()
    {
        return view('frontend::Pages.pricing-page');
    }

    public function error_page1()
    {
        return view('frontend::Pages.ExtraPages.error-page1');
    }

    public function error_page2()
    {
        return view('frontend::Pages.ExtraPages.error-page2');
    }

    // Blog Pages
    public function blog_list_page()
    {
        return view('frontend::Pages.Blog.list-page');
    }

    public function blog_filter()
    {
        return view('frontend::Pages.Blog.blog-filter');
    }

    public function blog_detail_page()
    {
        return view('frontend::Pages.Blog.detail-page');
    }

    public function blog_grid_list()
    {
        return view('frontend::Pages.Blog.grid-list');
    }

    public function blog_right_sidebar()
    {
        return view('frontend::Pages.Blog.right-sidebar');
    }

    public function blog_sidebar_list_page()
    {
        return view('frontend::Pages.Blog.sidebar-list-page');
    }

    public function blog_category()
    {
        return view('frontend::Pages.Blog.blog-category');
    }

    public function blog_tag()
    {
        return view('frontend::Pages.Blog.blog-tag');
    }

    public function blog_date()
    {
        return view('frontend::Pages.Blog.blog-date');
    }

    public function blog_author()
    {
        return view('frontend::Pages.Blog.blog-author');
    }

    // Blog column
    public function blog_column_grid($grid)
    {
        $gridClasses = '';
        $title = 'Blogs';
        switch ($grid) {
            case 'one-column':
                $gridClasses = 'row-cols-lg-1 row-cols-md-1';
                $title = __('frontendheader.1_column_blog');
                break;

            case 'two-column':
                $gridClasses = 'row-cols-lg-2 row-cols-md-2';
                $title =__('frontendheader.2_column_blog');
                break;

            case 'three-column':
                $gridClasses = 'row-cols-lg-3 row-cols-md-3';
                $title = __('frontendheader.3_column_blog');
                break;

            case 'four-column':
                $gridClasses = 'row row-cols-lg-4 row-cols-md-2 row-cols-1';
                $title = __('frontendheader.4_column_blog');
                break;

            default:
                // code...
                break;
        }

        return view('frontend::Pages.Blog.one-column', compact('gridClasses', 'title'));
    }

    //Blog sidebar
    public function blog_left_sidebar()
    {
        return view('frontend::Pages.Blog.left-sidebar');
    }

    public function blog_template()
    {
        return view('frontend::Pages.Blog.blog-template');
    }

    public function detail_page()
    {
        return view('frontend::Pages.Blog.detail-page');
    }

    public function blog_audio()
    {
        return view('frontend::Pages.Blog.blog-audio');
    }

    public function blog_video()
    {
        return view('frontend::Pages.Blog.blog-video');
    }

    public function blog_link()
    {
        return view('frontend::Pages.Blog.blog-link');
    }

    public function blog_quote()
    {
        return view('frontend::Pages.Blog.blog-quote');
    }

    public function blog_gallery()
    {
        return view('frontend::Pages.Blog.blog-gallery');
    }

    //shop pages
    public function all_products()
    {
        return view('frontend::Pages.MerchandiseShopPages.all-product-page');
    }

    public function shop()
    {
        return view('frontend::Pages.MerchandiseShopPages.shop-page');
    }

    public function my_account()
    {
        return view('frontend::Pages.MerchandiseShopPages.my-account-page');
    }

    public function cart()
    {
        return view('frontend::Pages.MerchandiseShopPages.cart-page');
    }

    public function wishlist()
    {
        return view('frontend::Pages.MerchandiseShopPages.wishlist-page');
    }

    public function chekout()
    {
        return view('frontend::Pages.MerchandiseShopPages.chekout-page');
    }

    public function order_tracking()
    {
        return view('frontend::Pages.MerchandiseShopPages.order-tracking');
    }
}
