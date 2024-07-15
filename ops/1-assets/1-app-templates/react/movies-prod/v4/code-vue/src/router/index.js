import Vue from 'vue'
import VueRouter from 'vue-router'
/* Layouts */
const BackendLayout = () => import('../layouts/BackendLayout')
const FrontendLayout = () => import('../layouts/FrontendLayout')
const Default = () => import('../layouts/BlankLayout')
const AuthLayout = () => import('../layouts/AuthLayout')
/* Dashboards View */
const Dashboard = () => import('../views/BackendPages/Dashboard.vue')
const Rating = () => import('../views/BackendPages/Rating.vue')
const Comments = () => import('../views/BackendPages/Comment.vue')
const PricingPage = () => import('../views/BackendPages/Pricing.vue')

/* UIElements View */
const UiAlerts = () => import('../views/core/UiAlerts.vue')
const UiButtons = () => import('../views/core/UiButtons.vue')
const UiBadges = () => import('../views/core/UiBadges.vue')
const UiBreadcrumb = () => import('../views/core/UiBreadcrumb.vue')
const UiColors = () => import('../views/core/UiColors.vue')
const UiTypography = () => import('../views/core/UiTypography.vue')
const UiCards = () => import('../views/core/UiCards.vue')
const UiCarousel = () => import('../views/core/UiCarousel.vue')
const UiEmbedVideo = () => import('../views/core/UiEmbedVideo.vue')
const UiGrid = () => import('../views/core/UiGrid.vue')
const UiModal = () => import('../views/core/UiModal.vue')
const UiListGroup = () => import('../views/core/UiListGroup.vue')
const UiImages = () => import('../views/core/UiImages.vue')
const UiMediaObject = () => import('../views/core/UiMediaObject.vue')
const UiTooltips = () => import('../views/core/UiTooltips.vue')
const UiPopovers = () => import('../views/core/UiPopovers.vue')
const UiNotifications = () => import('../views/core/UiNotifications.vue')
const UiTabs = () => import('../views/core/UiTabs.vue')
const UiPagination = () => import('../views/core/UiPagination.vue')
const UiProgressBars = () => import('../views/core/UiProgressBars.vue')
/* Authentic View */
const SignIn1 = () => import('../views/AuthPages/Default/SignIn1')
const SignUp1 = () => import('../views/AuthPages/Default/SignUp1')
const RecoverPassword1 = () => import('../views/AuthPages/Default/RecoverPassword1')
const LockScreen1 = () => import('../views/AuthPages/Default/LockScreen1')
const ConfirmMail1 = () => import('../views/AuthPages/Default/ConfirmMail1')
/* Extra Pages */
const ErrorPage = () => import('../views/Pages/ErrorPage')
const ComingSoon = () => import('../views/Pages/ComingSoon')
const Maintenance = () => import('../views/Pages/Maintenance')
const TimeLine = () => import('../views/Pages/TimeLines')
const BlankPage = () => import('../views/Pages/BlankPage')
const FAQ = () => import('../views/Pages/FAQ')
const Invoice = () => import('../views/Pages/Invoice')

/* Icon Views */
const IconDripicons = () => import('../views/Icons/IconDripicons')
const IconFontawesome5 = () => import('../views/Icons/IconFontawesome5')
const IconLineAwesome = () => import('../views/Icons/IconLineAwesome')
const IconRemixicon = () => import('../views/Icons/IconRemixicon')
const IconUnicons = () => import('../views/Icons/IconUnicons')
/* Tables Views */
const TablesBasic = () => import('../views/Tables/TablesBasic')
const EditableTable = () => import('../views/Tables/EditableTable')
/* Form View */
const FormLayout = () => import('../views/Forms/FormLayout')
const FormValidates = () => import('../views/Forms/FormValidates')
const FormSwitches = () => import('../views/Forms/FormSwitches')
const FormRadios = () => import('../views/Forms/FormRadios')
const FormCheckboxes = () => import('../views/Forms/FormCheckboxes')
/* User View */
const UserList = () => import('../views/User/UserList')

/* Category Routes */
const AddCategory = () => import('../views/BackendPages/Category/AddCategory.vue')
const ListCategory = () => import('../views/BackendPages/Category/CategoryList.vue')

/* Movie Routes */
const AddMovie = () => import('../views/BackendPages/Movie/AddMovie.vue')
const ListMovie = () => import('../views/BackendPages/Movie/MovieList.vue')

/* Show Routes */
const AddShow = () => import('../views/BackendPages/Show/AddShow.vue')
const ListShow = () => import('../views/BackendPages/Show/ListShow.vue')
const AddEpisode = () => import('../views/BackendPages/Show/AddEpisode.vue')

const LandingPage = () => import('../views/FrontendPages/MainPage.vue')
const ShowCategory = () => import('../views/FrontendPages/ShowCategory.vue')
const CategoryDetail = () => import('../views/FrontendPages/ShowDetail.vue')
const MovieCatgeory = () => import('../views/FrontendPages/MovieCategory')
const MovieDetail = () => import('../views/FrontendPages/MovieDetail')
const SinglePage = () => import('../views/FrontendPages/SinglePage')
const About = () => import('../views/FrontendPages/About')
const Contact = () => import('../views/FrontendPages/Contact')
const Faq = () => import('../views/FrontendPages/Faq')
const WatchVideo = () => import('../views/FrontendPages/WatchVideo')
const PricingPlan1 = () => import('../views/FrontendPages/PricingPlan1')
const PricingPlan2 = () => import('../views/FrontendPages/PricingPlan2')
const PrivacyPolicy = () => import('../views/FrontendPages/PrivacyPolicy')
const VideoPage = () => import('../views/FrontendPages/Components/Trending/Video.vue')

const ManageProfile = () => import('../views/FrontendPages/UserProfile/ManageProfile.vue')
const Settings = () => import('../views/FrontendPages/UserProfile/Settings.vue')
const PricingPlanning = () => import('../views/FrontendPages/UserProfile/PricingPlan.vue')
const Blog = () => import('../views/FrontendPages/Blog.vue')
const Blogdetail = () => import('../views/FrontendPages/Blogdetail.vue')

const ProfileEdit = () => import('../views/BackendPages/User/ProfileEdit')
const AccountSetting = () => import('../views/BackendPages/User/AccountSetting')
const MyProfile = () => import('../views/BackendPages/User/Profile')
const Privacy = () => import('../views/BackendPages/User/Privacy')

Vue.use(VueRouter)

const childRoutes = (prop) => [
  {
    path: 'home-1',
    name: prop + '.home-1',
    meta: { auth: true, name: 'Home 1' },
    component: Dashboard
  },
  {
    path: 'rating',
    name: prop + '.rating',
    meta: { auth: true, name: 'Rating' },
    component: Rating
  },
  {
    path: 'comment',
    name: prop + '.comment',
    meta: { auth: true, name: 'Comment' },
    component: Comments
  },
  {
    path: 'pricing',
    name: prop + '.pricing',
    meta: { auth: true, name: 'Pricing' },
    component: PricingPage
  }
]
const categoryRoute = (prop) => [
  {
    path: 'add-category',
    name: prop + '.add-category',
    meta: { auth: true, name: 'Add Category' },
    component: AddCategory
  },
  {
    path: '/category/edit/:id', // the URL accepts an accountId parameter
    name: prop + '.update-category',
    meta: { auth: true, name: 'Update Category' },
    component: AddCategory
  },
  {
    path: 'category-list',
    name: prop + '.category-list',
    meta: { auth: true, name: 'Category List' },
    component: ListCategory
  }
]
const movieRoute = (prop) => [
  {
    path: 'add-movie',
    name: prop + '.add-movie',
    meta: { auth: true, name: 'Add Movie' },
    component: AddMovie
  },
  {
    path: '/movie/edit/:id', // the URL accepts an accountId parameter
    name: prop + '.update-movie',
    meta: { auth: true, name: 'Update Movie' },
    component: AddMovie
  },
  {
    path: 'movie-list',
    name: prop + '.movie-list',
    meta: { auth: true, name: 'Movie List' },
    component: ListMovie
  }
]
const showsRoute = (prop) => [
  {
    path: 'add-show',
    name: prop + '.add-show',
    meta: { auth: true, name: 'Add Show' },
    component: AddShow
  },
  {
    path: '/show/edit/:id', // the URL accepts an accountId parameter
    name: prop + '.update-show',
    meta: { auth: true, name: 'Show Category' },
    component: AddShow
  },
  {
    path: '/show/episode/:id',
    name: prop + '.add-sesson',
    meta: { auth: true, name: 'Sesson Add' },
    component: AddEpisode
  },
  {
    path: '/show/episode-edit/:eid',
    name: prop + '.edit-episode',
    meta: { auth: true, name: 'Edit Episode' },
    component: AddEpisode
  },
  {
    path: 'show-list',
    name: prop + '.show-list',
    meta: { auth: true, name: 'Show List' },
    component: ListShow
  }
]
const coreChildRoute = (prop) => [
  {
    path: 'ui-colors',
    name: prop + '.color',
    meta: { auth: true, name: 'Colors' },
    component: UiColors
  },
  {
    path: 'ui-typography',
    name: prop + '.typography',
    meta: { auth: true, name: 'Typography' },
    component: UiTypography
  },
  {
    path: 'ui-alerts',
    name: prop + '.alert',
    meta: { auth: true, name: 'Alert' },
    component: UiAlerts
  },
  {
    path: 'ui-buttons',
    name: prop + '.button',
    meta: { auth: true, name: 'Button' },
    component: UiButtons
  },
  {
    path: 'ui-breadcrumb',
    name: prop + '.breadcrumb',
    meta: { auth: true, name: 'Breadcrumb' },
    component: UiBreadcrumb
  },
  {
    path: 'ui-badges',
    name: prop + '.badges',
    meta: { auth: true, name: 'Badges' },
    component: UiBadges
  },
  {
    path: 'ui-cards',
    name: prop + '.cards',
    meta: { auth: true, name: 'Card' },
    component: UiCards
  },
  {
    path: 'ui-carousel',
    name: prop + '.carousel',
    meta: { auth: true, name: 'Carousel' },
    component: UiCarousel
  },
  {
    path: 'ui-grid',
    name: prop + '.grid',
    meta: { auth: true, name: 'Grid' },
    component: UiGrid
  },
  {
    path: 'ui-embed-video',
    name: prop + '.embed-video',
    meta: { auth: true, name: 'Embed Video' },
    component: UiEmbedVideo
  },
  {
    path: 'ui-modal',
    name: prop + '.modal',
    meta: { auth: true, name: 'Model' },
    component: UiModal
  },
  {
    path: 'ui-listgroup',
    name: prop + '.listgroup',
    meta: { auth: true, name: 'List Group' },
    component: UiListGroup
  },
  {
    path: 'ui-images',
    name: prop + '.images',
    meta: { auth: true, name: 'Image' },
    component: UiImages
  },
  {
    path: 'ui-media-object',
    name: prop + '.media-object',
    meta: { auth: true, name: 'Media Object' },
    component: UiMediaObject
  },
  {
    path: 'ui-pagination',
    name: prop + '.pagination',
    meta: { auth: true, name: 'Paginations' },
    component: UiPagination
  },
  {
    path: 'ui-progressbars',
    name: prop + '.progressbars',
    meta: { auth: true, name: 'Progressbar' },
    component: UiProgressBars
  },
  {
    path: 'ui-tooltips',
    name: prop + '.tooltips',
    meta: { auth: true, name: 'Tooltip' },
    component: UiTooltips
  },
  {
    path: 'ui-popovers',
    name: prop + '.popovers',
    meta: { auth: true, name: 'Popover' },
    component: UiPopovers
  },
  {
    path: 'ui-notifications',
    name: prop + '.notifications',
    meta: { auth: true, name: 'Notification' },
    component: UiNotifications
  },
  {
    path: 'ui-tabs',
    name: prop + '.tabs',
    meta: { auth: true, name: 'Tabs' },
    component: UiTabs
  }
]
const formChildRoute = (prop) => [
  {
    path: 'form-layout',
    name: prop + '.layout',
    meta: { auth: true, name: 'Layout' },
    component: FormLayout
  },
  {
    path: 'form-validate',
    name: prop + '.validate',
    meta: { auth: true, name: 'Validate' },
    component: FormValidates
  },
  {
    path: 'form-switches',
    name: prop + '.switch',
    meta: { auth: true, name: 'Switch' },
    component: FormSwitches
  },
  {
    path: 'form-radios',
    name: prop + '.radio',
    meta: { auth: true, name: 'Radio' },
    component: FormRadios
  },
  {
    path: 'form-checkboxes',
    name: prop + '.checkbox',
    meta: { auth: true, name: 'Checkbox' },
    component: FormCheckboxes
  }
]

const tableChildRoute = (prop) => [
  {
    path: 'tables-basic',
    name: prop + '.basic',
    meta: { auth: true, name: 'Basic' },
    component: TablesBasic
  },
  {
    path: 'editable',
    name: prop + '.editable',
    meta: { auth: true, name: 'Editable' },
    component: EditableTable
  }
]

const iconChildRoute = (prop) => [
  {
    path: 'dripicons',
    name: prop + '.dripicons',
    meta: { auth: true, name: 'Dripicons' },
    component: IconDripicons
  },
  {
    path: 'fontawesome-5',
    name: prop + '.fontawesome-5',
    meta: { auth: true, name: 'Font Awsome' },
    component: IconFontawesome5
  },
  {
    path: 'lineawesome',
    name: prop + '.lineawesome',
    meta: { auth: true, name: 'Line Awsome' },
    component: IconLineAwesome
  },
  {
    path: 'remixicon',
    name: prop + '.remixicon',
    meta: { auth: true, name: 'Remixicon' },
    component: IconRemixicon
  },
  {
    path: 'unicons',
    name: prop + '.unicons',
    meta: { auth: true, name: 'Unicon' },
    component: IconUnicons
  }
]

const authChildRoutes = (prop) => [
  {
    path: 'sign-in1',
    name: prop + '.sign-in1',
    meta: { auth: true },
    component: SignIn1
  },
  {
    path: 'sign-up1',
    name: prop + '.sign-up1',
    meta: { auth: true },
    component: SignUp1
  },
  {
    path: 'password-reset1',
    name: prop + '.password-reset1',
    meta: { auth: true, mainClass: '' },
    component: RecoverPassword1
  },
  {
    path: 'lock-screen1',
    name: prop + '.lock-screen1',
    meta: { auth: true },
    component: LockScreen1
  },
  {
    path: 'confirm-mail1',
    name: prop + '.confirm-mail1',
    meta: { auth: true },
    component: ConfirmMail1
  }
]

const defaultlayout = (prop) => [
  {
    path: 'timeline',
    name: prop + '.timeline',
    meta: { auth: true, name: 'Timeline' },
    component: TimeLine
  },
  {
    path: 'invoice',
    name: prop + '.invoice',
    meta: { auth: true, name: 'Invoice' },
    component: Invoice
  },
  {
    path: 'blank-page',
    name: prop + '.blank-page',
    meta: { auth: true, name: 'Blank Page' },
    component: BlankPage
  },
  {
    path: 'faq',
    name: prop + '.faq',
    meta: { auth: true, name: 'Faq' },
    component: FAQ
  }
]

const pagesChildRoutes = (prop) => [
  {
    path: 'error/:code',
    name: prop + '.error',
    meta: { auth: true },
    component: ErrorPage
  },
  {
    path: 'coming-soon',
    name: prop + '.coming-soon',
    meta: { auth: true },
    component: ComingSoon
  },
  {
    path: 'maintenance',
    name: prop + '.maintenance',
    meta: { auth: true },
    component: Maintenance
  }
]
const userChildRoute = (prop) => [
  {
    path: 'user-list',
    name: prop + '.user-list',
    meta: { auth: true, name: 'User List' },
    component: UserList
  },
  {
    path: 'user-edit',
    name: prop + '.user-edit',
    meta: { auth: true, name: 'Edit Profile' },
    component: ProfileEdit
  },
  {
    path: 'account-setting',
    name: prop + '.account-setting',
    meta: { auth: true, name: 'Account Settings' },
    component: AccountSetting
  },
  {
    path: 'user-profile',
    name: prop + '.user-profile',
    meta: { auth: true, name: 'My Profile' },
    component: MyProfile
  },
  {
    path: 'privacy',
    name: prop + '.privacy',
    meta: { auth: true, name: 'Privacy' },
    component: Privacy
  }
]
const landingPageRoutes = (prop) => [
  {
    path: '',
    name: prop + '.landing-page',
    meta: { auth: true, name: 'landing page 1', slider: 'true' },
    component: LandingPage
  },
  {
    path: '/show-category',
    name: prop + '.show-category',
    meta: { auth: true, name: 'Show Category', category: 'true' },
    component: ShowCategory
  },
  {
    path: '/category-detail',
    name: prop + '.category-detail',
    meta: { auth: true, name: 'Category Details' },
    component: CategoryDetail
  },
  {
    path: '/movie-category',
    name: prop + '.movie-category',
    meta: { auth: true, name: 'Movie Category', movieslider: 'true' },
    component: MovieCatgeory
  },
  {
    path: '/movie-detail',
    name: prop + '.movie-detail',
    meta: { auth: true, name: 'Movie Detail' },
    component: MovieDetail
  },
  {
    path: '/show-single',
    name: prop + '.show-single',
    meta: { auth: true, name: 'Show Single' },
    component: SinglePage
  },
  {
    path: '/about',
    name: prop + '.about',
    meta: { auth: true, name: 'About Us' },
    component: About
  },
  {
    path: '/contact',
    name: prop + '.contact',
    meta: { auth: true, name: 'Contact' },
    component: Contact
  },
  {
    path: '/faq',
    name: prop + '.faq',
    meta: { auth: true, name: 'FAQ' },
    component: Faq
  },
  {
    path: '/watchvideo',
    name: prop + '.watchvideo',
    component: WatchVideo
  },
  {
    path: '/privacy-policy',
    name: prop + '.privacypolicy',
    meta: { auth: true, name: 'Privacy Policy' },
    component: PrivacyPolicy
  },
  {
    path: '/pricing-plan1',
    name: prop + '.pricingplan1',
    meta: { auth: true, name: 'Pricing Plan 1' },
    component: PricingPlan1
  },
  {
    path: '/pricing-plan2',
    name: prop + '.pricingplan2',
    meta: { auth: true, name: 'Pricing Plan 2' },
    component: PricingPlan2
  },
  {
    path: '/blog',
    name: prop + '.blog',
    meta: { auth: true, name: 'Blog' },
    component: Blog
  },
  {
    path: '/blogdetail',
    name: prop + '.blogdetail',
    meta: { auth: true, name: 'The Most Anticipated Movies' },
    component: Blogdetail
  },
  {
    path: '/manage-profile',
    name: prop + '.manage-profile',
    meta: { auth: true, name: 'Manage Profile', mainClass: '' },
    component: ManageProfile
  },
  {
    path: '/profile-setting',
    name: prop + '.profile-setting',
    meta: { auth: true, name: 'Profile Setting', mainClass: '' },
    component: Settings
  },
  {
    path: '/pricing-planning',
    name: prop + '.pricing-planning',
    meta: { auth: true, name: 'Price Planning', mainClass: '' },
    component: PricingPlanning
  },
  {
    path: '/video-page',
    name: prop + '.video-page',
    meta: { auth: true, name: 'Watch Video' },
    component: VideoPage
  }
]
const routes = [
  {
    path: '/admin',
    name: 'dashboard',
    component: BackendLayout,
    meta: { auth: true },
    children: childRoutes('dashboard')
  },
  {
    path: '/',
    name: 'landing-page',
    component: FrontendLayout,
    meta: { auth: true },
    children: landingPageRoutes('landing-page')
  },
  {
    path: '/rating',
    name: 'rating',
    component: BackendLayout,
    meta: { auth: true },
    children: childRoutes('rating')
  },
  {
    path: '/comment',
    name: 'comment',
    component: BackendLayout,
    meta: { auth: true },
    children: childRoutes('comment')
  },
  {
    path: '/pricing',
    name: 'pricing',
    component: BackendLayout,
    meta: { auth: true },
    children: childRoutes('pricing')
  },
  {
    path: '/category',
    name: 'category',
    component: BackendLayout,
    meta: { auth: true },
    children: categoryRoute('category')
  },
  {
    path: '/movie',
    name: 'movie',
    component: BackendLayout,
    meta: { auth: true },
    children: movieRoute('movie')
  },
  {
    path: '/show',
    name: 'show',
    component: BackendLayout,
    meta: { auth: true },
    children: showsRoute('show')
  },
  {
    path: '/core',
    name: 'core',
    component: BackendLayout,
    meta: { auth: true },
    children: coreChildRoute('core')
  },
  {
    path: '/user',
    name: 'user',
    component: BackendLayout,
    meta: { auth: true },
    children: userChildRoute('user')
  },
  {
    path: '/table',
    name: 'table',
    component: BackendLayout,
    meta: { auth: true },
    children: tableChildRoute('table')
  },
  {
    path: '/icon',
    name: 'icon',
    component: BackendLayout,
    meta: { auth: true },
    children: iconChildRoute('icon')
  },
  {
    path: '/auth',
    name: 'auth1',
    component: AuthLayout,
    meta: { auth: true },
    children: authChildRoutes('auth1')
  },
  {
    path: '/pages',
    name: 'pages',
    component: Default,
    meta: { auth: true },
    children: pagesChildRoutes('default')
  },
  {
    path: '/extra-pages',
    name: 'extra-pages',
    component: BackendLayout,
    meta: { auth: true },
    children: defaultlayout('extra-pages')
  },
  {
    path: '/user',
    name: 'user',
    component: BackendLayout,
    meta: { auth: true },
    children: userChildRoute('user')
  },
  {
    path: '/form',
    name: 'form',
    component: BackendLayout,
    meta: { auth: true },
    children: formChildRoute('form')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.VUE_APP_BASE_URL,
  routes
})
// router.beforeEach((to, from, next) => {
//   const publicPages = ['/auth/sign-in1', '/auth/sign-up1', '/dark/auth/sign-in1', '/dark/auth/sign-up1']
//   if (publicPages.includes(to.path)) {
//     localStorage.removeItem('user')
//     localStorage.removeItem('access_token')
//   }
//   const authRequired = !publicPages.includes(to.path)
//   const loggedIn = localStorage.getItem('user')
//   if (to.meta.auth) {
//     if (authRequired && loggedIn === null) {
//       return next('/auth/sign-in1')
//     } else if (to.name === 'dashboard' || to.name === 'mini.dashboard') {
//       return next('/home-1')
//     }
//   }
//   next()
// })

export default router
