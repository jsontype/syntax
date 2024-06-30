import React from "react";

// layout
import DashboardLayout from "../layouts/dashboard-layout";
import BlankLayout from "../layouts/blank-layout";

// pages
import Dashboard from "../views/dashboard/dashboard.jsx";
import RatingPaage from "../views/dashboard/rating-page.jsx";
import CommentList from "../views/dashboard/comment-list";
import Pricing from "../views/dashboard/special-pages/pricing";
import SignIn from "../views/dashboard/auth/signin";
import SignUp from "../views/dashboard/auth/signup";
import ConfirmMail from "../views/dashboard/auth/confirmmail";
import LockScreen from "../views/dashboard/auth/lockscreen";
import Recoverpw from "../views/dashboard/auth/recoverpassword";
import TwoFactor from "../views/dashboard/auth/two-factor";
import AccountDeactive from "../views/dashboard/auth/account-deactivate";
import UserAdd from "../views/dashboard/app/user-add";
import UserList from "../views/dashboard/app/user-list";
import UserProfile from "../views/dashboard/app/user-profile";
import UserProfileEdit from "../views/dashboard/app/user-privacy-setting";
import Error404 from "../views/dashboard/errors/error404";
import Error500 from "../views/dashboard/errors/error500";
import Maintenance from "../views/dashboard/errors/maintainance";
import Avatars from "../views/uikit/avatars";
import Alerts from "../views/uikit/alert";
import Badges from "../views/uikit/badge";
import Breadcrumb from "../views/uikit/breadcrumb";
import Buttons from "../views/uikit/button";
import ButtonGroups from "../views/uikit/buttons-group";
import OffCanvass from "../views/uikit/off-canvas";
import Cards from "../views/uikit/card";
import Carousels from "../views/uikit/carousel";
import Grids from "../views/uikit/grid";
import Images from "../views/uikit/image";
import ListGroups from "../views/uikit/list-group";
import Modals from "../views/uikit/modal";
import Notifications from "../views/uikit/notification";
import Paginations from "../views/uikit/pagination";
import Popovers from "../views/uikit/popovers";
import Progressbars from "../views/uikit/progress";
import Typographys from "../views/uikit/typography";
import UiTabs from "../views/uikit/tabs";
import Tooltips from "../views/uikit/tooltip";
import EmbedVideos from "../views/uikit/embed-video";
import Colors from "../views/uikit/colors";
import FormElement from "../views/dashboard/form/form-element";
import FormValidation from "../views/dashboard/form/form-validation";
import FormWizard from "../views/dashboard/form/form-wizard";
import BootstrapTable from "../views/dashboard/table/bootstrap-table";
import Borderedtable from "../views/dashboard/table/border-table";
import Datatable from "../views/dashboard/table/Data-table";
import Episodes from "../views/dashboard/tv-shows/episodes";
import Seasons from "../views/dashboard/tv-shows/seasons";
import ShowList from "../views/dashboard/tv-shows/showlist";
import MovieList from "../views/dashboard/tv-shows/movielist";
import Widgetbasic from "../views/dashboard/widget/widgetbasic";
import Widgetcard from "../views/dashboard/widget/widgetcard";
import Widgetchart from "../views/dashboard/widget/widgetchart";
import ComingSoon from "../views/dashboard/errors/coming-soon";
import BasicTable from "../views/dashboard/table/fixed-table";
import BlankPage from "../views/dashboard/extra/blankpages";
import FontAwesome from "../views/dashboard/icons/font-awesome";
import Accesscontrol from "../views/dashboard/Accesscontrol";
import PrivacyPolicy from "../views/dashboard/extra/privacy-policy";
import TermsofService from "../views/dashboard/extra/terms-of-service";

export const DashboardRouter = [
  {
    path: "",
    element: <DashboardLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
        name: 'home',
        Activelink: 'home'
      },

      {
        path: "/rating-page",
        element: <RatingPaage />,
        name: 'Rating'

      },
      {
        path: "/comment-list",
        element: <CommentList />,
        name: 'Comment List'

      },

      {
        path: "/special-pages/pricing",
        element: <Pricing />,
        name: 'Pricing'

      },
      {
        path: "/app/user-profile",
        element: <UserProfile />,
        name: 'User Profile'
      },
      {
        path: "/app/user-privacy-setting",
        element: <UserProfileEdit />,

      },
      {
        path: "/app/user-add",
        element: <UserAdd />,
      },
      {
        path: "/app/user-list",
        element: <UserList />,
        name: 'User List'
      },

      {
        path: "/ui-elements/avatars",
        element: <Avatars />,
        name: 'Ui-Avatars'
      },

      {
        path: "/ui-elements/alerts",
        element: <Alerts />,
        name: 'Ui-Alert'
      },
      {
        path: "/ui-elements/badges",
        element: <Badges />,
        name: 'Ui-Badge'

      },
      {
        path: "/ui-elements/breadcrumb",
        element: <Breadcrumb />,
        name: 'Ui-Breadcrumb'
      },
      {
        path: "/ui-elements/buttons",
        element: <Buttons />,
        name: 'Ui-Buttons'
      },
      {
        path: "/ui-elements/button-group",
        element: <ButtonGroups />,
        name: 'Ui-Button-Group'
      },
      {
        path: "/ui-elements/offcanvas",
        element: <OffCanvass />,
        name: 'Ui-Offcanvas'
      },
      {
        path: "/ui-elements/color",
        element: <Colors />,
        name: 'Ui-Color'
      },
      {
        path: "/ui-elements/cards",
        element: <Cards />,
        name: 'Ui-Card'

      },
      {
        path: "/ui-elements/carousel",
        element: <Carousels />,
        name: 'Ui-Carousel'
      },
      {
        path: "/ui-elements/grid",
        element: <Grids />,
        name: 'Ui-Grid'

      },
      {
        path: "/ui-elements/images",
        element: <Images />,
        name: 'Ui-Images'

      },
      {
        path: "/ui-elements/list-groups",
        element: <ListGroups />,
        name: 'Ui-Listgroup'

      },
      {
        path: "/ui-elements/modal",
        element: <Modals />,
        name: 'Ui-Modal'
      },
      {
        path: "/ui-elements/notifications",
        element: <Notifications />,
        name: 'Ui-Notifications'
      },
      {
        path: "/ui-elements/pagination",
        element: <Paginations />,
        name: 'Ui-Pagination'
      },
      {
        path: "/ui-elements/popovers",
        element: <Popovers />,
        name: 'Ui-Popovers'
      },
      {
        path: "/ui-elements/progressbars",
        element: <Progressbars />,
        name: ''
      },
      {
        path: "/ui-elements/typography",
        element: <Typographys />,
        name: 'Ui-Typography'
      },
      {
        path: "/ui-elements/tabs",
        element: <UiTabs />,
        name: 'Ui-Tab'

      },
      {
        path: "/ui-elements/tooltips",
        element: <Tooltips />,
        name: 'Ui-Tooltip'

      },

      {
        path: "/ui-elements/embed-video",
        element: <EmbedVideos />,
        name: 'Ui-Embedvideo'

      },
      {
        path: "/form/form-element",
        element: <FormElement />,
        name: 'Form Elements'
      },
      {
        path: "/form/form-wizard",
        element: <FormWizard />,
        name: 'Form Wizard'
      },
      {
        path: "/form/form-validation",
        element: <FormValidation />,
        name: 'Form Validation'
      },
      {
        path: "/table/bootstrap-table",
        element: <BootstrapTable />,
        name: 'Bootstrap Table'
      },
      {
        path: "/table/border-table",
        element: <Borderedtable />,
        name: 'Border Table'
      },
      {
        path: "/table/Datatable",
        element: <Datatable />,
        name: 'Table Data'
      },
      {
        path: "/widgetbasic",
        element: <Widgetbasic />,
        name: 'Basic Widget'
      },
      {
        path: "/widgetchart",
        element: <Widgetchart />,
        name: 'Widgets Chart'
      },
      {
        path: "/widgetcard",
        element: <Widgetcard />,
        name: 'Widget Card'
      },
      {
        path: "/table/fixed-table",
        element: <BasicTable />,
        name: 'Fixed Table'
      },
    ],
  },
  {
    path: "/",
    element: <DashboardLayout isBanner="true" />,
    children: [
      {
        path: "/tv-shows/episodes",
        element: <Episodes />,
        name: 'Episodes',
        Activelink: 'Tvshows'

      },
      {
        path: "/tv-shows/seasons",
        element: <Seasons />,
        name: 'Season',
        Activelink: 'Tvshows'


      },
      {
        path: "/tv-shows/showlist",
        element: <ShowList />,
        name: 'Show List',
        Activelink: 'Tvshows'


      },
      {
        path: "/tv-shows/movielist",
        element: <MovieList />,
        name: 'Movie List',
        Activelink: 'MovieList'

      },
      {
        path: "/extra/blank-page",
        element: <BlankPage />,
        name: 'Blank Page  '

      },
      {
        path: "/extra/privacy-policy",
        element: <PrivacyPolicy />,
        name: 'Privacy Policy  '

      },
      {
        path: "/extra/terms-of-use",
        element: <TermsofService />,
        name: 'Terms of Use '

      },
      {
        path: "/font-awesome",
        element: <FontAwesome />,
        name: 'Font Awesome'
      },
      {
        path: "/access-control",
        element: <Accesscontrol />,
        name: 'Access Control'
      }
    ],
  },
];

export const ErrorRoutes = [
  {
    path: "/errors",
    element: <BlankLayout />,
    children: [
      {
        path: "/errors/error-404",
        element: <Error404 />,
      },
      {
        path: "/errors/error-500",
        element: <Error500 />,
      },
      {
        path: "/errors/maintenance",
        element: <Maintenance />,
      },
      {
        path: "/errors/coming-soon",
        element: <ComingSoon />,
      },
    ],
  },
];
export const AuthRuter = [
  {
    path: "/auth",
    element: <BlankLayout />,
    children: [
      {
        path: "/auth/sign-in",
        element: <SignIn />,
      },
      {
        path: "/auth/sign-up",
        element: <SignUp />,
      },

      {
        path: "/auth/confirm-mail",
        element: <ConfirmMail />,
      },

      {
        path: "/auth/lock-screen",
        element: <LockScreen />,
      },

      {
        path: "/auth/recoverpw",
        element: <Recoverpw />,
      },
      {
        path: "/auth/two-factor",
        element: <TwoFactor />,
      },

      {
        path: "/auth/account-deactivate",
        element: <AccountDeactive />,
      },
    ],
  },
];
