<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\FrontendController;
use App\Http\Controllers\Security\RolePermission;
use App\Http\Controllers\Security\RoleController;
use App\Http\Controllers\Security\PermissionController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;


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

require __DIR__.'/auth.php';

Route::group(['middleware' => 'auth'], function () {
  // Permission Module
  Route::get('/permission-role',[RolePermission::class, 'index'])->name('permission-role.list');
  Route::post('/permission-role/store',[RolePermission::class, 'store'])->name('permission-role.store');
  Route::resource('permission',PermissionController::class);
  Route::resource('role', RoleController::class);

  
  // Users Module
  Route::resource('users', UserController::class);
});

// Frontent Rounts
Route::group(['prefix' => ''], function() {
  Route::get('/', [FrontendController::class, 'index'])->name('frontend.home');
  Route::get('/movie', [FrontendController::class, 'movie'])->name('frontend.movie');
  Route::get('/show', [FrontendController::class, 'show'])->name('frontend.show');
  Route::get('/about', [FrontendController::class, 'about'])->name('frontend.about');
  Route::get('/contact', [FrontendController::class, 'contact'])->name('frontend.contact');
  Route::get('/faq', [FrontendController::class, 'faq'])->name('frontend.faq');
  Route::get('/privacypolicy', [FrontendController::class, 'privacyPolicy'])->name('frontend.privacypolicy');
  Route::get('/pricingplan1', [FrontendController::class, 'pricingPlan1'])->name('frontend.pricingplan1');
  Route::get('/pricingplan2', [FrontendController::class, 'pricingPlan2'])->name('frontend.pricingplan2');
  Route::get('/manageprofile', [FrontendController::class, 'manageProfile'])->name('frontend.manageprofile');
  Route::get('/settings', [FrontendController::class, 'settings'])->name('frontend.settings');
  Route::get('/forgotpassword', [FrontendController::class, 'forgotpassword'])->name('frontend.forgotpassword');
  Route::get('/moviedetails', [FrontendController::class, 'moviedetails'])->name('frontend.moviedetails');
  Route::get('/showdetails', [FrontendController::class, 'showdetails'])->name('frontend.showdetails');
  Route::get('/showsingle', [FrontendController::class, 'showsingle'])->name('frontend.showsingle');
  Route::get('/watchvideo', [FrontendController::class, 'watchvideo'])->name('frontend.watchvideo');
  Route::get('/blog', [FrontendController::class, 'blog'])->name('frontend.blog');
  Route::get('/blogdetails', [FrontendController::class, 'blogdetails'])->name('frontend.blogdetails');
  
});

Route::group(['prefix' => 'dashboards','middleware' => 'auth'], function() {
  Route::get('/', [DashboardController::class, 'index'])->name('dashboard.home');
  Route::get('/rating', [DashboardController::class, 'rating'])->name('dashboard.rating');
  Route::get('/comment', [DashboardController::class, 'comment'])->name('dashboard.comment');
  Route::get('/user', [DashboardController::class, 'user'])->name('dashboard.user');

  Route::get('/add-category', [DashboardController::class, 'addCategory'])->name('dashboard.addCategory');
  Route::get('/category-list', [DashboardController::class, 'categoryList'])->name('dashboard.categoryList');

  Route::get('/add-movie', [DashboardController::class, 'addMovie'])->name('dashboard.addMovie');
  Route::get('/movie-list', [DashboardController::class, 'movieList'])->name('dashboard.movieList');
  
  Route::get('/add-show', [DashboardController::class, 'addShow'])->name('dashboard.addShow');
  Route::get('/show-list', [DashboardController::class, 'showList'])->name('dashboard.showList');

  Route::get('/page-pricing', [DashboardController::class, 'pricing'])->name('dashboard.pricing');

  Route::get('/privacy-policy', [DashboardController::class, 'privacyPolicy'])->name('dashboard.privacyPolicy');

  Route::get('/terms-of-service', [DashboardController::class, 'termsOfService'])->name('dashboard.termsOfService');
 
  Route::get('/pages-confirm-mail', [DashboardController::class, 'pageConfirmMail'])->name('dashboard.pageConfirmMail');
  
  //UI Pages Routes
  Route::group(['prefix' => 'ui'], function() {
    Route::get('alerts', [DashboardController::class, 'UiAlerts'])->name('ui.alerts');
    Route::get('badges', [DashboardController::class, 'UiBadges'])->name('ui.badges');
    Route::get('breadcrumb', [DashboardController::class, 'UiBreadcrumb'])->name('ui.breadcrumb');
    Route::get('buttons', [DashboardController::class, 'UiButtons'])->name('ui.buttons');
    Route::get('colors', [DashboardController::class, 'UiColors'])->name('ui.colors');
    Route::get('cards', [DashboardController::class, 'UiCards'])->name('ui.cards');
    Route::get('carousel', [DashboardController::class, 'UiCarousel'])->name('ui.carousel');
    Route::get('grid', [DashboardController::class, 'UiGrid'])->name('ui.grid');
    Route::get('images', [DashboardController::class, 'UiImages'])->name('ui.images');
    Route::get('listgroup', [DashboardController::class, 'UiListgroup'])->name('ui.listgroup');
    Route::get('media', [DashboardController::class, 'UiMedia'])->name('ui.media');
    Route::get('modal', [DashboardController::class, 'UiModal'])->name('ui.modal');
    Route::get('notification', [DashboardController::class, 'UiNotification'])->name('ui.notification');
    Route::get('pagination', [DashboardController::class, 'UiPagination'])->name('ui.pagination');
    Route::get('popovers', [DashboardController::class, 'UiPopovers'])->name('ui.popovers');
    Route::get('progressbars', [DashboardController::class, 'UiProgressbars'])->name('ui.progressbars');
    Route::get('typography', [DashboardController::class, 'UiTypography'])->name('ui.typography');
    Route::get('tabs', [DashboardController::class, 'UiTabs'])->name('ui.tabs');
    Route::get('tooltips', [DashboardController::class, 'UiTooltips'])->name('ui.tooltips');
    Route::get('video', [DashboardController::class, 'UiVideo'])->name('ui.video');
  });

  Route::group(['prefix' => 'forms'], function() {
    Route::get('form-checkbox', [DashboardController::class, 'formCheckbox'])->name('forms.checkbox');
    Route::get('form-elements', [DashboardController::class, 'formElements'])->name('forms.elements');
    Route::get('form-radio', [DashboardController::class, 'formRadio'])->name('forms.radio');
    Route::get('form-switch', [DashboardController::class, 'formSwitch'])->name('forms.switch');
    Route::get('form-validation', [DashboardController::class, 'formValidation'])->name('forms.validation');
    
  });

  Route::group(['prefix' => 'formsWizard'], function() {
    Route::get('form-wizard-simple', [DashboardController::class, 'formSimpleWizard'])->name('formsWizard.simpleWizard');
    Route::get('form-wizard-validate', [DashboardController::class, 'formValidateWizard'])->name('formsWizard.validateWizard');
    Route::get('form-wizard-vertical', [DashboardController::class, 'formVerticalWizard'])->name('formsWizard.verticalWizard');
  });

  Route::group(['prefix' => 'user'], function() {
    Route::get('profile', [DashboardController::class, 'userProfile'])->name('user.profile');
    Route::get('profile-edit', [DashboardController::class, 'userProfileEdit'])->name('user.profilEdit');
    Route::get('account-setting', [DashboardController::class, 'userAccountSetting'])->name('user.accountSetting');
    Route::get('privacy-setting', [DashboardController::class, 'userPrivacySetting'])->name('user.privacySetting');
  });

  Route::group(['prefix' => 'table'], function() {
    Route::get('basic-table', [DashboardController::class, 'basicTable'])->name('table.basicTable');
    Route::get('data-table', [DashboardController::class, 'dataTable'])->name('table.dataTable');
    Route::get('edit-table', [DashboardController::class, 'editTable'])->name('table.editTable');
  });

  Route::group(['prefix' => 'icons'], function() {
    Route::get('dripicons', [DashboardController::class, 'dripicons'])->name('icons.dripicons');
    Route::get('font-awesome', [DashboardController::class, 'fontAwesome'])->name('icons.fontAwesome');
    Route::get('line-awesome', [DashboardController::class, 'lineAwesome'])->name('icons.lineAwesome');
    Route::get('remixicon', [DashboardController::class, 'remixicon'])->name('icons.remixicon');
    Route::get('unicons', [DashboardController::class, 'unicons'])->name('icons.unicons');
  });

  Route::group(['prefix' => 'extraPage'], function() {
    Route::get('timeline', [DashboardController::class, 'timeline'])->name('extraPage.timeline');
    Route::get('invoice', [DashboardController::class, 'invoice'])->name('extraPage.invoice');
    Route::get('blank-pages', [DashboardController::class, 'blankPage'])->name('extraPage.blankPage');
    Route::get('error-404', [DashboardController::class, 'error404'])->name('extraPage.error404');
    Route::get('error-500', [DashboardController::class, 'error500'])->name('extraPage.error500');
    Route::get('maintenance', [DashboardController::class, 'maintenance'])->name('extraPage.maintenance');
    Route::get('comming-soon', [DashboardController::class, 'commingSoon'])->name('extraPage.commingSoon');
    Route::get('faq', [DashboardController::class, 'faq'])->name('extraPage.faq');
  });
 
  
});

