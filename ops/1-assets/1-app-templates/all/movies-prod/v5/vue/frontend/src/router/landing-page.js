// TVshow Pages
const TVshowPages = [
  {
    path: '/tv-shows',
    name: 'landing-page.tv-shows',
    component: () => import('../views/MainPages/TvShowsPage.vue'),
  },
  {
    path: '/tv-show-detail',
    name: 'landing-page.tv-show-detail',
    component: () => import('../views/TvShows/DetailPage.vue'),
  },
  {
    path: '/episode',
    name: 'landing-page.episode',
    component: () => import('../views/TvShows/EpisodePage.vue'),
  },
];

// Movies Pages
const MoviesPages = [
  {
    path: '/movies/skull-island',
    name: 'landing-page.movies.skull-island',
    meta: { header: 'header-default', footer: 'footer-dual' },
    component: () => import('../views/Movies/RestictedPage.vue'),
  },
  {
    path: '/movies/related',
    name: 'landing-page.movies.related',
    meta: { header: 'header-default', footer: 'footer-dual' },
    component: () => import('../views/Movies/ReletedMerchandiesPage.vue'),
  },
  {
    path: '/movies',
    name: 'landing-page.movies',
    component: () => import('../views/MainPages/MoviesPage.vue'),
  },
  {
    path: '/movies-detail',
    name: 'landing-page.movies.detail',
    component: () => import('../views/Movies/DetailPage.vue'),
  },
  {
    path: '/person-detail',
    name: 'landing-page.person-detail',
    component: () => import('../views/Movies/DetailPage.vue'),
  },
];

// Videos Pages
const VideosPages = [
  {
    path: '/videos',
    name: 'landing.videos',
    component: () => import('../views/MainPages/VideosPage.vue'),
  },
  {
    path: '/video-detail',
    name: 'landing.video-detail',
    component: () => import('../views/videos/DetailPage.vue'),
  },
];

// Genres Pages
const GenresPages = [
  {
    path: '/geners',
    name: 'landing-page.geners',
    meta: { pageName: 'header.geners', beforeWrapper: 'breadcrumb-widget' },
    component: () => import('../views/GenersPage.vue'),
  },
  {
    path: '/all-geners',
    name: 'landing-page.all-geners',
    meta: { pageName: 'ott_home.view_all', beforeWrapper: 'breadcrumb-widget' },
    component: () => import('../views/AllGeners.vue'),
  },
];
// Tags Pages
const TagsPages = [
  {
    path: '/tags',
    name: 'landing-page.tags',
    meta: { pageName: 'header.tags', beforeWrapper: 'breadcrumb-widget' },
    component: () => import('../views/TagsPage.vue'),
  },
];
// Cast Pages
const CastPages = [
  {
    path: '/all-personality',
    name: 'landing-page.personality',
    meta: { pageName: 'ott_home.view_all', beforeWrapper: 'breadcrumb-widget' },
    component: () => import('../views/Cast/AllPersonality.vue'),
  },
  {
    path: '/cast',
    name: 'landing-page.cast',
    meta: { pageName: 'header.cast', beforeWrapper: 'breadcrumb-widget' },
    component: () => import('../views/Cast/ListPage.vue'),
  },
  {
    path: '/cast-detail',
    name: 'landing-page.cast-detail',
    component: () => import('../views/Cast/DetailPage.vue'),
  },
];

// Blog Pages
const BlogPages = [
  {
    path: '/blogs',
    name: 'landing-page.blogs',
    meta: { pageName: 'blogs.blog_listing', beforeWrapper: 'breadcrumb-widget' },
    component: () => import('../views/BlogPages/ListPage.vue'),
  },
  {
    path: '/blogs-date',
    name: 'landing-page.blogs-date',
    meta: { pageName: 'Day: September 23, 2022', beforeWrapper: 'breadcrumb-widget' },
    component: () => import('../views/BlogPages/ListPage.vue'),
  },
  {
    path: '/blogs-author',
    name: 'landing-page.blogs-author',
    meta: { pageName: 'Author: Goldenmace', beforeWrapper: 'breadcrumb-widget' },
    component: () => import('../views/BlogPages/ListPage.vue'),
  },
  {
    path: '/blogs/:grid',
    name: 'landing-page.blogs-grid',
    meta: { pageName: 'Blog Grid', beforeWrapper: 'breadcrumb-widget' },
    component: () => import('../views/BlogPages/GridList.vue'),
  },
  {
    path: '/blogs-sidebar/left',
    name: 'landing-page.blogs-sidebar',
    meta: { pageName: 'header.left_sidebar', beforeWrapper: 'breadcrumb-widget' },
    component: () => import('../views/BlogPages/SidebarListPage.vue'),
  },
  {
    path: '/blogs-sidebar/right',
    name: 'landing-page.blogs-sidebar.right',
    meta: { pageName: 'header.right_sidebar', beforeWrapper: 'breadcrumb-widget' },
    component: () => import('../views/BlogPages/RightSidebar.vue'),
  },
  {
    path: '/blogs-detail/:slug',
    name: 'landing-page.blogs.detail',
    meta: { pageName: 'blogs.anticipated_movies', beforeWrapper: 'breadcrumb-widget' },
    component: () => import('../views/BlogPages/DetailPage.vue'),
  },
  {
    path: '/blogs-category',
    name: 'landing-page.blogs.category',
    meta: { pageName: 'blogs.drama', beforeWrapper: 'breadcrumb-widget' },
    component: () => import('../views/BlogPages/ListPage.vue'),
  },
  {
    path: '/blogs-tag',
    name: 'landing-page.blogs.tag',
    meta: { pageName: 'blogs.comedy', beforeWrapper: 'breadcrumb-widget' },
    component: () => import('../views/BlogPages/ListPage.vue'),
  },
  {
    path: '/blogs-date',
    name: 'landing-page.blogs.date',
    meta: { pageName: 'Day: September 23, 2022', beforeWrapper: 'breadcrumb-widget' },
    component: () => import('../views/BlogPages/ListPage.vue'),
  },
  {
    path: '/blogs-author',
    name: 'landing-page.blogs.author',
    meta: { pageName: 'Author: Goldenmace', beforeWrapper: 'breadcrumb-widget' },
    component: () => import('../views/BlogPages/ListPage.vue'),
  },
  {
    path: '/blogs-template',
    name: 'landing-page.blogs.template',
    meta: { pageName: 'blogs.scarlett_backlash', beforeWrapper: 'breadcrumb-widget' },
    component: () => import('../views/BlogPages/BlogTemplate.vue'),
  },
  {
    path: '/blogs-single/:type',
    name: 'landing-page.blogs.single',
    meta: { pageName: 'My Streaming Black Pearl', beforeWrapper: 'breadcrumb-widget' },
    component: () => import('../views/BlogPages/BlogSingle.vue'),
  },
];

//  Shop Pages
const ShopPages = [
    {
      path: 'cart',
      name: 'landing-page.cart',
      meta: { pageName: 'shop.cart', header: 'header-merchandise', beforeWrapper: 'breadcrumb-widget' },
      component: () => import('../views/MerchandisePages/CartPage.vue'),
    },
    {
      path: 'checkout',
      name: 'landing-page.checkout',
      meta: { header: 'header-merchandise', pageName: 'shop.checkout', beforeWrapper: 'breadcrumb-widget' },
      component: () => import('../views/MerchandisePages/CheckoutPage.vue'),
    },
    {
      path: 'wishlist',
      name: 'landing-page.wishlist',
      meta: { pageName: 'header.wishlist', beforeWrapper: 'breadcrumb-widget' },
      component: () => import('../views/MerchandisePages/WishlistPage.vue'),
    },
    {
      path: 'track-order',
      name: 'landing-page.track-order',
      meta: { pageName: 'header.order_tracking', beforeWrapper: 'breadcrumb-widget' },
      component: () => import('../views/MerchandisePages/TrackOrder.vue'),
    },
    {
      path: 'shop-cart-summary',
      name: 'landing-page.shop-cart-summary',
      meta: { pageName: 'Cart Summary', beforeWrapper: 'breadcrumb-widget' },
      component: () => import('../views/MerchandisePages/ShopCartSummary.vue'),
    },
    {
      path: 'auth',
      name: 'landing-page.auth',
      component: () => import('../views/MerchandisePages/AuthPage.vue'),
    },
    {
      path: 'my-account',
      name: 'landing-page.account',
      meta: { pageName: 'header.my_account', beforeWrapper: 'breadcrumb-widget' },
      component: () => import('../views/MerchandisePages/Account/MyAccount.vue'),
    },
    {
      path: 'account-orders',
      name: 'landing-page.orders',
      meta: { pageName: 'header.my_account', beforeWrapper: 'breadcrumb-widget' },
      component: () => import('../views/MerchandisePages/Account/OrdersPage.vue'),
    },
    {
      path: 'account-download',
      name: 'landing-page.account.download',
      meta: { pageName: 'header.my_account', beforeWrapper: 'breadcrumb-widget' },
      component: () => import('../views/MerchandisePages/Account/DownloadsPage.vue'),
    },
    {
      path: 'account-address',
      name: 'landing-page.account.address',
      meta: { pageName: 'header.my_account', beforeWrapper: 'breadcrumb-widget' },
      component: () => import('../views/MerchandisePages/Account/AddressPage.vue'),
    },
    {
      path: 'account-detail',
      name: 'landing-page.account.detail',
      meta: { pageName: 'header.my_account', beforeWrapper: 'breadcrumb-widget' },
      component: () => import('../views/MerchandisePages/Account/AccountDetailPage.vue'),
    },
    {
      path: 'account-logout',
      name: 'landing-page.account.logout',
      meta: { pageName: 'header.my_account', beforeWrapper: 'breadcrumb-widget' },
      component: () => import('../views/MerchandisePages/Account/YourAccount.vue'),
    },
  ];

// Pricing Pages
const PricingPages = [
  {
    path: '/pricing-plan',
    name: 'landing-page.pricing-plan',
    meta: { pageName: 'header.pricing_plan', beforeWrapper: 'breadcrumb-widget' },
    component: () => import('../views/PricingPlan.vue'),
  },
];

// Extra Pages
const ExtraPages = [
  {
    path: '/about-us',
    name: 'landing-page.about-us',
    meta: { pageName: 'header.about_us', beforeWrapper: 'breadcrumb-widget' },
    component: () => import('../views/ExtraPages/AboutPage.vue'),
  },
  {
    path: '/contact-us',
    name: 'landing-page.contact-us',
    meta: { pageName: 'header.contact_us', beforeWrapper: 'breadcrumb-widget' },
    component: () => import('../views/ExtraPages/ContactPage.vue'),
  },
  {
    path: '/privacy-policy',
    name: 'landing-page.privacy-policy',
    meta: { pageName: 'header.privacy_policy', beforeWrapper: 'breadcrumb-widget' },
    component: () => import('../views/ExtraPages/PrivacyPolicy.vue'),
  },
  {
    path: '/terms-of-use',
    name: 'landing-page.terms-of-use',
    meta: { pageName: 'footer.terms_of_use', beforeWrapper: 'breadcrumb-widget' },
    component: () => import('../views/ExtraPages/TermsofUse.vue'),
  },
  {
    path: '/faq',
    name: 'landing-page.faq',
    meta: { pageName: 'header.faq', beforeWrapper: 'breadcrumb-widget' },
    component: () => import('../views/ExtraPages/FAQPage.vue'),
  },
  {
    path: 'product-detail',
    name: 'landing-page.merchandise.shop.detail',
    meta: { pageName: 'Shop Detail' },
    component: () => import('../views/MerchandisePages/ProductDetailPage.vue'),
  },
  {
    path: 'all-product',
    name: 'landing-page.merchandise.shop.all-product',
    meta: { pageName: 'merchandise.all_products', beforeWrapper: 'breadcrumb-widget' },
    component: () => import('../views/MerchandisePages/AllProductPage.vue'),
  },
];

export const MerchandiseRoutes = () => {
  return [
    {
      path: '',
      name: 'landing-page.merchandise.home',
      component: () => import('../views/MerchandisePages/IndexPage.vue'),
    },
    {
      path: 'shop',
      name: 'landing-page.merchandise.shop',
      meta: { pageName: 'header.shop', beforeWrapper: 'breadcrumb-widget', footer:'default'},
      component: () => import('../views/MerchandisePages/ShopCategoryPage.vue'),
    },
    {
      path: 'cart',
      name: 'landing-page.merchandise.cart',
      meta: { pageName: 'header.cart_page', header: 'header-merchandise', beforeWrapper: 'breadcrumb-widget' },
      component: () => import('../views/MerchandisePages/CartPage.vue'),
    },
    {
      path: 'checkout',
      name: 'landing-page.merchandise.checkout',
      meta: { header: 'header-merchandise', pageName: 'header.checkout_page', beforeWrapper: 'breadcrumb-widget' },
      component: () => import('../views/MerchandisePages/CheckoutPage.vue'),
    },
    {
      path: 'wishlist',
      name: 'landing-page.merchandise.wishlist',
      meta: { pageName: 'header.wishlist_page', beforeWrapper: 'breadcrumb-widget' },
      component: () => import('../views/MerchandisePages/WishlistPage.vue'),
    },
    {
      path: 'track-order',
      name: 'landing-page.merchandise.track-order',
      meta: { pageName: 'header.order_tracking', beforeWrapper: 'breadcrumb-widget' },
      component: () => import('../views/MerchandisePages/TrackOrder.vue'),
    },
    {
      path: 'shop-cart-summary',
      name: 'landing-page.merchandise.shop-cart-summary',
      meta: { pageName: 'Cart Summary', beforeWrapper: 'breadcrumb-widget' },
      component: () => import('../views/MerchandisePages/ShopCartSummary.vue'),
    },
    {
      path: 'auth',
      name: 'landing-page.merchandise.auth',
      component: () => import('../views/MerchandisePages/AuthPage.vue'),
    },
    {
      path: 'my-account',
      name: 'landing-page.merchandise.account',
      meta: { pageName: 'header.my_account', beforeWrapper: 'breadcrumb-widget' },
      component: () => import('../views/MerchandisePages/Account/MyAccount.vue'),
    },
    {
      path: 'account-orders',
      name: 'landing-page.merchandise.orders',
      meta: { pageName: 'header.my_account', beforeWrapper: 'breadcrumb-widget' },
      component: () => import('../views/MerchandisePages/Account/OrdersPage.vue'),
    },
    {
      path: 'account-download',
      name: 'landing-page.merchandise.account.download',
      meta: { pageName: 'header.my_account', beforeWrapper: 'breadcrumb-widget' },
      component: () => import('../views/MerchandisePages/Account/DownloadsPage.vue'),
    },
    {
      path: 'account-address',
      name: 'landing-page.merchandise.account.address',
      meta: { pageName: 'header.my_account', beforeWrapper: 'breadcrumb-widget' },
      component: () => import('../views/MerchandisePages/Account/AddressPage.vue'),
    },
    {
      path: 'account-detail',
      name: 'landing-page.merchandise.account.detail',
      meta: { pageName: 'header.my_account', beforeWrapper: 'breadcrumb-widget' },
      component: () => import('../views/MerchandisePages/Account/AccountDetailPage.vue'),
    },
    {
      path: 'account-logout',
      name: 'landing-page.merchandise.account.logout',
      meta: { pageName: 'header.my_account', beforeWrapper: 'breadcrumb-widget' },
      component: () => import('../views/MerchandisePages/Account/YourAccount.vue'),
    },
  ];
};
export const DefaultPages = [
  {
    path: '/login',
    meta: { pageName: 'Login', pageWrapperClass: '' },
    name: 'landing-page.login-page',
    component: () => import('../views/AuthPages/LoginPage.vue'),
  },
  {
    path: '/signup',
    meta: { pageName: 'Sign Up', pageWrapperClass: '' },
    name: 'landing-page.sing-up-page',
    component: () => import('../views/AuthPages/SignUpPage.vue'),
  },
  {
    path: '/lostpassword',
    meta: { pageName: 'Lost Password', pageWrapperClass: '' },
    name: 'landing-page.lost-password',
    component: () => import('../views/AuthPages/LostPassword.vue'),
  },
  {
    path: '/error-page-one',
    name: 'landing-page.error-page-one',
    component: () => import('../views/ExtraPages/ErrorPage1.vue'),
  },
  {
    path: '/error-page-two',
    name: 'landing-page.error-page-two',
    component: () => import('../views/ExtraPages/ErrorPage2.vue'),
  },
  {
    path: '/comming-soon',
    name: 'landing-page.comming-soon',
    component: () => import('../views/ExtraPages/CommingSoonPage.vue'),
  },
];

// View All
const ViewAll = [
  {
    path: '/view-all',
    meta: { pageName: 'ott_home.view_all', beforeWrapper: 'breadcrumb-widget' },
    name: 'landing-page.view-all',
    component: () => import('../views/ViewAll.vue'),
  },
];

// Playist
const PlayList = [
  {
    path: '/playlist',
    name: 'landing-page.play-list',
    component: () => import('../views/PlayList.vue'),
  },
];

export const LandingPageRoutes = () => [
  // Main Pages
  {
    path: '',
    name: 'landing-page.ott',
    component: () => import('../views/MainPages/OTTPage.vue'),
  },
  {
    path: '/home',
    name: 'landing-page.home',
    component: () => import('../views/MainPages/IndexPage.vue'),
  },
  {
    path: '/watchlist-detail',
    name: 'landing-page.watchlist-detail',
    component: () => import('../views/WatchDetail.vue'),
  },
  ...TVshowPages,
  ...MoviesPages,
  ...VideosPages,
  ...GenresPages,
  ...TagsPages,
  ...CastPages,
  ...BlogPages,
  ...ShopPages,
  ...PricingPages,
  ...ExtraPages,
  ...ViewAll,
  ...PlayList,
];
