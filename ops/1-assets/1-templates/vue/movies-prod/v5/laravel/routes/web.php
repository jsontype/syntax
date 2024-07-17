<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\PermissionController;
use App\Http\Controllers\RolePermission;
use App\Http\Controllers\LanguageController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/app', [DashboardController::class, 'index'])->middleware(['auth'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Dashboard Routes
Route::group(['as' => 'dashboard.'], function () {
    // Route::get('static-app', [DashboardController::class, 'index'])->name('home');
    Route::get('rating', [DashboardController::class, 'rating'])->name('rating');
    Route::get('comment', [DashboardController::class, 'comment'])->name('comment');
    Route::get('user-list', [DashboardController::class, 'user'])->name('user-list');
    Route::get('movie-list', [DashboardController::class, 'movieList'])->name('movie-list');
    Route::get('show-list', [DashboardController::class, 'showList'])->name('show-list');
    Route::get('seasons', [DashboardController::class, 'seasons'])->name('seasons');
    Route::get('episodes', [DashboardController::class, 'episodes'])->name('episodes');
    Route::get('pricing', [DashboardController::class, 'pricing'])->name('pricing');

    Route::group(['prefix' => 'auth'], function () {
        Route::get('login', [DashboardController::class, 'login'])->name('login');
        Route::get('register', [DashboardController::class, 'register'])->name('register');
        Route::get('reset-password', [DashboardController::class, 'reset_password'])->name('reset-password');
        Route::get('verify-email', [DashboardController::class, 'verify_email'])->name('verify-email');
        Route::get('lock-screen', [DashboardController::class, 'lock_screen'])->name('lock-screen');
        Route::get('TwoFactor', [DashboardController::class, 'TwoFactor'])->name('TwoFactor');
        Route::get('AccountDeactivated', [DashboardController::class, 'AccountDeactivated'])->name('AccountDeactivated');
    });

    Route::get('error-404', [DashboardController::class, 'error404'])->name('error-404');
    Route::get('error-500', [DashboardController::class, 'error500'])->name('error-500');
    Route::get('maintenance', [DashboardController::class, 'maintenance'])->name('maintenance');
    Route::get('coming-soon', [DashboardController::class, 'coming'])->name('coming-soon');

    Route::get('blank-page', [DashboardController::class, 'blank'])->name('blank-page');
    Route::get('terms-of-use', [DashboardController::class, 'termsOfUse'])->name('terms-of-use');
    Route::get('dashboard/privacy-policy', [DashboardController::class, 'dashboardPrivacy'])->name('privacy-policy');

    Route::get('alerts', [DashboardController::class, 'alert'])->name('alerts');
    Route::get('avatars', [DashboardController::class, 'avatar'])->name('avatars');
    Route::get('badge', [DashboardController::class, 'badge'])->name('badge');
    Route::get('breadcrumb', [DashboardController::class, 'breadcrumb'])->name('breadcrumb');
    Route::get('buttons', [DashboardController::class, 'buttons'])->name('buttons');
    Route::get('buttonsgroup', [DashboardController::class, 'buttonsGroup'])->name('buttonsgroup');
    Route::get('offcanvas', [DashboardController::class, 'offcanvas'])->name('offcanvas');
    Route::get('colors', [DashboardController::class, 'colors'])->name('colors');
    Route::get('cards', [DashboardController::class, 'cards'])->name('cards');
    Route::get('carousel', [DashboardController::class, 'carousel'])->name('carousel');
    Route::get('grid', [DashboardController::class, 'grid'])->name('grid');
    Route::get('images', [DashboardController::class, 'images'])->name('images');
    Route::get('listgroup', [DashboardController::class, 'listgroup'])->name('listgroup');
    Route::get('modal', [DashboardController::class, 'modal'])->name('modal');
    Route::get('notifications', [DashboardController::class, 'notifications'])->name('notifications');
    Route::get('pagination', [DashboardController::class, 'pagination'])->name('pagination');
    Route::get('popovers', [DashboardController::class, 'popovers'])->name('popovers');
    Route::get('typography', [DashboardController::class, 'typography'])->name('typography');
    Route::get('tooltips', [DashboardController::class, 'tooltips'])->name('tooltips');
    Route::get('tabs', [DashboardController::class, 'tabs'])->name('tabs');
    Route::get('VideoView', [DashboardController::class, 'VideoView'])->name('VideoView');

    Route::get('widget-basic', [DashboardController::class, 'widgetBasic'])->name('widget-basic');
    Route::get('widget-chart', [DashboardController::class, 'widgetChart'])->name('widget-chart');
    Route::get('widget-card', [DashboardController::class, 'widgetCard'])->name('widget-card');

    Route::get('elements', [DashboardController::class, 'elements'])->name('elements');
    Route::get('wizard', [DashboardController::class, 'wizard'])->name('wizard');
    Route::get('validation', [DashboardController::class, 'validation'])->name('validation');

    Route::get('bootstrap', [DashboardController::class, 'bootstrap'])->name('bootstrap');
    Route::get('border', [DashboardController::class, 'border'])->name('border');
    Route::get('fixed-table', [DashboardController::class, 'fancy'])->name('fixed-table');
    Route::get('table-data', [DashboardController::class, 'fixed'])->name('table-data');

    Route::get('font-awesome', [DashboardController::class, 'icons'])->name('font-awesome');

    Route::get('profile', [DashboardController::class, 'profile'])->name('profile');
    Route::get('privacy', [DashboardController::class, 'privacy'])->name('privacy');
});
Route::group(['as' => 'backend.', 'middleware' => ['auth']], function () {
    Route::get('permission-role', [RolePermission::class, 'index'])->name('permission-role')->middleware('password.confirm');
    Route::post('/permission-role/store/{role_id}', [RolePermission::class, 'store'])->name('permission-role.store');
    Route::get('/permission-role/reset/{role_id}', [RolePermission::class, 'reset_permission'])->name('permission-role.reset');
    // Role & Permissions Crud
    Route::resource('permission', PermissionController::class);
    Route::resource('role', RoleController::class);
});
// Language Switch
Route::get('language/{language}', [LanguageController::class, 'switch'])->name('language.switch');


require __DIR__ . '/auth.php';