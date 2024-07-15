<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DashboardController extends Controller
{
    // Main Page
    public function index(Request $request) { return view('dashboard.dashboard'); }

    public function rating(Request $request) { return view('dashboard.rating');  }

    public function comment(Request $request) { return view('dashboard.comment'); }

    public function user(Request $request) { return view('dashboard.user'); }

    public function addCategory(Request $request) { return view('dashboard.category.addCategory'); }
    
    public function categoryList(Request $request) { return view('dashboard.category.categoryList'); }

    public function addMovie(Request $request) { return view('dashboard.movie.addMovie'); }
    
    public function movieList(Request $request) { return view('dashboard.movie.movieList'); }

    public function addShow(Request $request) { return view('dashboard.show.addShow'); }
    
    public function showList(Request $request) { return view('dashboard.show.showList'); }

    public function pricing(Request $request) { return view('dashboard.pricing'); }

    public function privacyPolicy(Request $request) { return view('dashboard.app.privacy-policy'); }

    public function termsOfService(Request $request) { return view('dashboard.app.terms-of-service'); }

    public function pageConfirmMail(Request $request) { return view('auth.verify-email'); }
    
    /*
    * app Page routes
    */

    public function userProfile(Request $request) { return view('dashboard.app.user.profile'); }

    public function userProfileEdit(Request $request) { return view('dashboard.app.user.profileEdit'); }

    public function userAccountSetting(Request $request) { return view('dashboard.app.user.accountSetting'); }

    public function userPrivacySetting(Request $request) { return view('dashboard.app.user.privacySetting'); }

    /*
    *UI Element
    */

    /*
     * UI Page Routes
     */

    public function UiGrid() { return view('dashboard.ui-element.ui.grid'); }

    public function UiTabs() { return view('dashboard.ui-element.ui.tabs'); }

    public function UiCards() { return view('dashboard.ui-element.ui.cards'); }

    public function UiModal() { return view('dashboard.ui-element.ui.modal'); }

    public function UiAlerts() { return view('dashboard.ui-element.ui.alerts'); }

    public function UiBadges() { return view('dashboard.ui-element.ui.badges');  }

    public function UiColors() { return view('dashboard.ui-element.ui.colors'); }

    public function UiImages() { return view('dashboard.ui-element.ui.images'); }

    public function UiButtons() { return view('dashboard.ui-element.ui.buttons'); }

    public function UiCarousel() { return view('dashboard.ui-element.ui.carousel'); }

    public function UiPopovers() { return view('dashboard.ui-element.ui.popovers'); }

    public function UiTooltips() { return view('dashboard.ui-element.ui.tooltips'); }

    public function UiBreadcrumb() { return view('dashboard.ui-element.ui.breadcrumb'); }

    public function UiListgroup() { return view('dashboard.ui-element.ui.listgroup'); }

    public function UiPagination() { return view('dashboard.ui-element.ui.pagination'); }

    public function UiTypography() { return view('dashboard.ui-element.ui.typography'); }

    public function UiMedia() { return view('dashboard.ui-element.ui.media'); }

    public function UiProgressbars() { return view('dashboard.ui-element.ui.progressbars'); }
    
    public function UiNotification() { return view('dashboard.ui-element.ui.notification');}

    public function UiVideo() { return view('dashboard.ui-element.ui.video'); }

    /*
    * forms Page Routes
    */

    public function formCheckbox() { return view('dashboard.ui-element.forms.formCheckbox'); }

    public function formElements() { return view('dashboard.ui-element.forms.formElements'); }

    public function formRadio() { return view('dashboard.ui-element.forms.formRadio'); }

    public function formSwitch() { return view('dashboard.ui-element.forms.formSwitch'); }

    public function formValidation() { return view('dashboard.ui-element.forms.formValidation'); }

    public function login() { return view('dashboard.forms.login'); }

    

    /*
    * forms wizard Page Routes
    */

    public function formSimpleWizard() { return view('dashboard.ui-element.forms-wizard.simpleWizard'); }

    public function formValidateWizard() { return view('dashboard.ui-element.forms-wizard.validateWizard'); }

    public function formVerticalWizard() { return view('dashboard.ui-element.forms-wizard.verticalWizard'); }

    /*
    * tables Page Routes
    */

    public function basicTable() { return view('dashboard.ui-element.table.basicTable'); }

    public function dataTable() { return view('dashboard.ui-element.table.dataTable'); }

    public function editTable() { return view('dashboard.ui-element.table.editableTable'); }

    /*
    * icons Page Routes
    */

    public function dripicons() { return view('dashboard.ui-element.icons.dripicons'); }

    public function fontAwesome() { return view('dashboard.ui-element.icons.fontAwesome'); }

    public function lineAwesome() { return view('dashboard.ui-element.icons.lineAwesome'); }

    public function remixicon() { return view('dashboard.ui-element.icons.remixicon'); }

    public function unicons() { return view('dashboard.ui-element.icons.unicons'); }

    /*
    * ExtraPages Page Routes
    */

    public function timeline() { return view('dashboard.extraPages.timeline'); }

    public function invoice() { return view('dashboard.extraPages.invoice'); }

    public function blankPage() { return view('dashboard.extraPages.blankPage'); }

    public function error404() { return view('dashboard.extraPages.error404'); }

    public function error500() { return view('dashboard.extraPages.error500'); }

    public function maintenance() { return view('dashboard.extraPages.maintenance'); }

    public function commingSoon() { return view('dashboard.extraPages.commingsoon'); }

    public function faq() { return view('dashboard.extraPages.faq'); }


}
