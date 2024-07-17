<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index(Request $request)
    {
        $title = 'Home';
        return view('DashboardPages.IndexPage', compact('title'));
    }

    public function rating(Request $request)
    {
        $title = 'Rating';
        return view('DashboardPages.rating.RatingPage', compact('title'));
    }

    public function comment(Request $request)
    {
        $title = 'Comment List';
        return view('DashboardPages.CommentPage', compact('title'));
    }

    public function user(Request $request)
    {
        $title = 'Users List';
        return view('DashboardPages.user.ListPage', compact('title'));
    }

    public function movieList(Request $request)
    {
        $title = 'Movie List';
        return view('DashboardPages.MovieListPage', compact('title'));
    }

    public function showList(Request $request)
    {
        $title = 'Show List';
        return view('DashboardPages.ShowListPage', compact('title'));
    }

    public function seasons(Request $request)
    {
        $title = 'Season';
        return view('DashboardPages.SeasonsPage', compact('title'));
    }

    public function episodes(Request $request)
    {
        $title = 'Episodes';
        return view('DashboardPages.EpisodesPage', compact('title'));
    }

    public function pricing(Request $request)
    {
        $title = 'Pricing';
        return view('DashboardPages.spacial-pages.PricingPage', compact('title'));
    }

    public function login(Request $request)
    {
        $title = 'Login';
        return view('DashboardPages.auth.default.SignIn', compact('title'));
    }

    public function register(Request $request)
    {
        $title = 'Register';
        return view('DashboardPages.auth.default.SignUp', compact('title'));
    }

    public function reset_password(Request $request)
    {
        $title = 'Reset Password';
        return view('DashboardPages.auth.default.ResetPassword', compact('title'));
    }

    public function verify_email(Request $request)
    {
        $title = 'Verify Mail';
        return view('DashboardPages.auth.default.VarifyEmail', compact('title'));
    }

    public function lock_screen(Request $request)
    {
        $title = 'Lock Screen';
        return view('DashboardPages.auth.default.LockScreen', compact('title'));
    }

    public function TwoFactor(Request $request)
    {
        $title = 'Two Factor';
        return view('DashboardPages.auth.default.TwoFactor', compact('title'));
    }

    public function AccountDeactivated(Request $request)
    {
        $title = 'Account Deactivated';
        return view('DashboardPages.auth.default.AccountDeactivated', compact('title'));
    }

    public function error404(Request $request)
    {
        $title = 'Error 404';
        return view('DashboardPages.errors.Error404Page', compact('title'));
    }

    public function error500(Request $request)
    {
        $title = 'Error 500';
        return view('DashboardPages.errors.Error500Page', compact('title'));
    }

    public function maintenance(Request $request)
    {
        $title = 'Maintenance';
        return view('DashboardPages.errors.MaintenancePage', compact('title'));
    }

    public function coming(Request $request)
    {
        $title = 'Comming Soon';
        return view('DashboardPages.errors.ComingSoon', compact('title'));
    }

    public function blank(Request $request)
    {
        $title = 'Blank';
        return view('DashboardPages.BlankPage', compact('title'));
    }
    public function termsOfUse(Request $request)
    {
        $title = 'Terms of Use';
        return view('DashboardPages.extra.TermsAndConditions', compact('title'));
    }
    public function dashboardPrivacy(Request $request)
    {
        $title = 'Privacy Policy';
        return view('DashboardPages.extra.PrivacyPolicy', compact('title'));
    }

    public function profile(Request $request)
    {
        $title = 'User Profile';
        return view('DashboardPages.user-profile', compact('title'));
    }
    public function privacy(Request $request)
    {
        $title = 'Privacy Setting';
        return view('DashboardPages.user-privacy-setting', compact('title'));
    }
    public function termsAndConditions(Request $request)
    {
        $title = 'TermsAndConditions';
        return view('DashboardPages.ui-elements.terms-and-condition', compact('title'));
    }

    // UI Elements

    public function alert(Request $request)
    {
        $title = 'ui-alert';
        return view('DashboardPages.ui-elements.AlertsView', compact('title'));
    }

    public function avatar(Request $request)
    {
        $title = 'ui-avatars';
        return view('DashboardPages.ui-elements.AvatarsView', compact('title'));
    }

    public function badge(Request $request)
    {
        $title = 'ui-badge';
        return view('DashboardPages.ui-elements.BadgeView', compact('title'));
    }

    public function breadcrumb(Request $request)
    {
        $title = 'ui-breadcrumb';
        return view('DashboardPages.ui-elements.BreadCrumb', compact('title'));
    }

    public function buttonsGroup(Request $request)
    {
        $title = 'ui-button-group';
        return view('DashboardPages.ui-elements.ButtonsGroup', compact('title'));
    }

    public function buttons(Request $request)
    {
        $title = 'ui-button';
        return view('DashboardPages.ui-elements.ButtonsView', compact('title'));
    }

    public function cards(Request $request)
    {
        $title = 'ui-card';
        return view('DashboardPages.ui-elements.CardsView', compact('title'));
    }

    public function carousel(Request $request)
    {
        $title = 'ui-carousel';
        return view('DashboardPages.ui-elements.CarouselView', compact('title'));
    }

    public function colors(Request $request)
    {
        $title = 'ui-color';
        return view('DashboardPages.ui-elements.ColorsView', compact('title'));
    }

    public function grid(Request $request)
    {
        $title = 'ui-grid';
        return view('DashboardPages.ui-elements.GridView', compact('title'));
    }

    public function images(Request $request)
    {
        $title = 'ui-images';
        return view('DashboardPages.ui-elements.ImagesView', compact('title'));
    }

    public function listgroup(Request $request)
    {
        $title = 'ui-listgroup';
        return view('DashboardPages.ui-elements.ListGroup', compact('title'));
    }

    public function modal(Request $request)
    {
        $title = 'ui-modal';
        return view('DashboardPages.ui-elements.ModalView', compact('title'));
    }

    public function notifications(Request $request)
    {
        $title = 'ui-notifications';
        return view('DashboardPages.ui-elements.NotificationsView', compact('title'));
    }

    public function offcanvas(Request $request)
    {
        $title = 'ui-offcanvas';
        return view('DashboardPages.ui-elements.OffCanvas', compact('title'));
    }

    public function pagination(Request $request)
    {
        $title = 'ui-pagination';
        return view('DashboardPages.ui-elements.PaginationView', compact('title'));
    }

    public function popovers(Request $request)
    {
        $title = 'ui-popovers';
        return view('DashboardPages.ui-elements.PopoversView', compact('title'));
    }

    public function tabs(Request $request)
    {
        $title = 'ui-tab';
        return view('DashboardPages.ui-elements.TabsView', compact('title'));
    }

    public function tooltips(Request $request)
    {
        $title = 'ui-tooltip';
        return view('DashboardPages.ui-elements.TooltipsView', compact('title'));
    }

    public function typography(Request $request)
    {
        $title = 'ui-typography';
        return view('DashboardPages.ui-elements.TypographyView', compact('title'));
    }

    public function VideoView(Request $request)
    {
        $title = 'Ui-Embedvideo';
        return view('DashboardPages.ui-elements.VideoView', compact('title'));
    }

    // Widgets

    public function widgetBasic(Request $request)
    {
        $title = 'Basic Widget';
        return view('DashboardPages.widgets.WidgetBasic', compact('title'));
    }

    public function widgetChart(Request $request)
    {
        $title = 'Widget Chart';
        return view('DashboardPages.widgets.WidgetChart', compact('title'));
    }

    public function widgetCard(Request $request)
    {
        $title = 'Widget Card';
        return view('DashboardPages.widgets.WidgetCard', compact('title'));
    }

    // Forms

    public function elements(Request $request)
    {
        $title = 'Form Elements';
        return view('DashboardPages.forms.ElementsPage', compact('title'));
    }

    public function wizard(Request $request)
    {
        $title = 'Form Wizard';
        return view('DashboardPages.forms.WizardPage', compact('title'));
    }

    public function validation(Request $request)
    {
        $title = 'Form Validation';
        return view('DashboardPages.forms.ValidationPage', compact('title'));
    }

    // Table

    public function bootstrap(Request $request)
    {
        $title = 'Bootstrap Table';
        return view('DashboardPages.tables.BootstrapTable', compact('title'));
    }

    public function border(Request $request)
    {
        $title = 'Border Table';
        return view('DashboardPages.tables.BorderTable', compact('title'));
    }

    public function fancy(Request $request)
    {
        $title = 'Fixed Table';
        return view('DashboardPages.tables.fixedTable', compact('title'));
    }

    public function fixed(Request $request)
    {
        $title = 'Table Data';
        return view('DashboardPages.tables.tableData', compact('title'));
    }

    public function icons(Request $request)
    {
        $title = 'font awesome';
        return view('DashboardPages.icons.FontAwesome', compact('title'));
    }

    public function premission(Request $request)
    {
        $title = 'premission';
        return view('DashboardPages.premission.Access-Control', compact('title'));
    }

    public function manager(Request $request)
    {
        $title = 'Managers List';
        return view('DashboardPages.manager.ListPage', compact('title'));
    }
}
