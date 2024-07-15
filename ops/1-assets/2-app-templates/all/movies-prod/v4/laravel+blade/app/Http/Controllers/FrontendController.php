<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FrontendController extends Controller
{
    //
    public function index(Request $request)
    {
        return view('frontend.home');
    }
    public function movie(Request $request)
    {
        return view('frontend.movie');
    }
    public function show(Request $request)
    {
        return view('frontend.show');
    }
    public function about(Request $request)
    {
        return view('frontend.about');
    }
    public function contact(Request $request)
    {
        return view('frontend.contact');
    }
    public function faq(Request $request)
    {
        return view('frontend.faq');
    }
    public function privacyPolicy(Request $request)
    {
        return view('frontend.privacypolicy');
    }
    public function pricingPlan1(Request $request)
    {
        return view('frontend.pricingplan1');
    }
    public function pricingPlan2(Request $request)
    {
        return view('frontend.pricingplan2');
    }
    public function manageProfile(Request $request)
    {
        return view('frontend.manageprofile');
    }
    public function settings(Request $request)
    {
        return view('frontend.settings'); 
    }
    public function login(Request $request)
    {
        return view('auth.login'); 
    }
    public function signin(Request $request)
    {
        return view('auth.register'); 
    }
    public function forgotpassword(Request $request)
    {
        return view('frontend.forgotpassword'); 
    }
    public function moviedetails(Request $request)
    {
        return view('frontend.moviedetails'); 
    }
    public function showdetails(Request $request)
    {
        return view('frontend.showdetails'); 
    }
    public function showsingle(Request $request)
    {
        return view('frontend.showsingle'); 
    }
    public function watchvideo(Request $request)
    {
        return view('frontend.watchvideo'); 
    }
    public function blog(Request $request)
    {
        return view('frontend.blog'); 
    }
    public function blogdetails(Request $request)
    {
        return view('frontend.blogdetails'); 
    }
    
    
    

    
    
    
    
    
    
}
