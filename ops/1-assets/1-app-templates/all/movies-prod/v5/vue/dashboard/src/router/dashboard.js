export const DashboardRoutes = (prefix) => [
  {
    path: '/',
    name: prefix + '.home',
    meta: { auth: true, name: 'Home' },
    component: () => import('@/views/IndexPage.vue'),
  },
  {
    path: '/movie-list',
    name: prefix + '.movie-list',
    meta: { auth: true, name: 'Movie List', isBanner: true, title: 'Movie List' },
    component: () => import('../views/MovieListPage.vue'),
  },
  {
    path: '/show-list',
    name: 'tv-shows.show-list',
    meta: { auth: true, name: 'Show List', isBanner: true, title: 'Show Lists' },
    component: () => import('../views/ShowListPage.vue'),
  },
  {
    path: '/episodes',
    name: 'show-list.episodes',
    meta: { auth: true, name: 'Episodes', isBanner: true, title: 'Episodes' },
    component: () => import('../views/EpisodesPage.vue'),
  },

  {
    path: '/seasons',
    name: 'show-list.seasons',
    meta: { auth: true, name: 'Season', isBanner: true, title: 'Seasons' },
    component: () => import('../views/SeasonsPage.vue'),
  },
  {
    path: '/comments',
    name: prefix + '.comment',
    meta: { auth: true, name: 'Comment List', isBanner: false },
    component: () => import('@/views/CommentPage.vue'),
  },
  {
    path: '/blank-page',
    name: prefix + '.blank-page',
    meta: { auth: true, name: 'Blank Page', isBanner: true, title: 'Blank Page' },
    component: () => import('@/views/BlankPage.vue'),
  },
  {
    path: '/alerts',
    name: 'ui-elements.alerts',
    meta: { auth: true, name: 'Ui-Alert', isBanner: true, title: 'Alerts' },
    component: () => import('@/views/ui-elements/AlertsView.vue'),
  },
  {
    path: '/avatars',
    name: 'ui-elements.avatars',
    meta: { auth: true, name: 'Ui-Avatars', isBanner: true, title: 'Avatars' },
    component: () => import('@/views/ui-elements/AvatarsView.vue'),
  },
  {
    path: '/badge',
    name: 'ui-elements.badge',
    meta: { auth: true, name: 'Ui-Badge', isBanner: true, title: 'Badge' },
    component: () => import('@/views/ui-elements/BadgeView.vue'),
  },
  {
    path: '/breadcrumb',
    name: 'ui-elements.breadcrumb',
    meta: { auth: true, name: 'Ui-Breadcrumb', isBanner: true, title: 'Breadcrumb' },
    component: () => import('@/views/ui-elements/BreadCrumb.vue'),
  },
  {
    path: '/buttons',
    name: 'ui-elements.buttons',
    meta: { auth: true, name: 'Ui-Button', isBanner: true, title: 'Buttons' },
    component: () => import('@/views/ui-elements/ButtonsView.vue'),
  },
  {
    path: '/buttonsgroup',
    name: 'ui-elements.buttonsgroup',
    meta: { auth: true, name: 'Ui-Button-Group', isBanner: true, title: 'Buttons Group' },
    component: () => import('@/views/ui-elements/ButtonsGroup.vue'),
  },
  {
    path: '/offcanvas',
    name: 'ui-elements.offcanvas',
    meta: { auth: true, name: 'Ui-Offcanvas', isBanner: true, title: 'Off-Canvas' },
    component: () => import('@/views/ui-elements/OffCanvas.vue'),
  },
  {
    path: '/cards',
    name: 'ui-elements.cards',
    meta: { auth: true, name: 'Ui-Card', isBanner: true, title: 'Cards' },
    component: () => import('@/views/ui-elements/CardsView.vue'),
  },
  {
    path: '/carousel',
    name: 'ui-elements.carousel',
    meta: { auth: true, name: 'Ui-Carousel', isBanner: true, title: 'Carousel' },
    component: () => import('@/views/ui-elements/CarouselView.vue'),
  },
  {
    path: '/grid',
    name: 'ui-elements.grid',
    meta: { auth: true, name: 'Ui-Grid', isBanner: true, title: 'Grid' },
    component: () => import('@/views/ui-elements/GridView.vue'),
  },
  {
    path: '/images',
    name: 'ui-elements.images',
    meta: { auth: true, name: 'Ui-Images', isBanner: true, title: 'Images' },
    component: () => import('@/views/ui-elements/ImagesView.vue'),
  },
  {
    path: '/listgroup',
    name: 'ui-elements.listgroup',
    meta: { auth: true, name: 'Ui-Listgroup', isBanner: true, title: 'List Group' },
    component: () => import('@/views/ui-elements/ListGroup.vue'),
  },
  {
    path: '/modal',
    name: 'ui-elements.modal',
    meta: { auth: true, name: 'Ui-Modal', isBanner: true, title: 'Modal' },
    component: () => import('@/views/ui-elements/ModalView.vue'),
  },
  {
    path: '/notifications',
    name: 'ui-elements.notifications',
    meta: { auth: true, name: 'Ui-Notifications', isBanner: true, title: 'Notification' },
    component: () => import('@/views/ui-elements/NotificationsView.vue'),
  },
  {
    path: '/pagination',
    name: 'ui-elements.pagination',
    meta: { auth: true, name: 'Ui-Pagination', isBanner: true, title: 'Pagination' },
    component: () => import('@/views/ui-elements/PaginationView.vue'),
  },
  {
    path: '/popovers',
    name: 'ui-elements.popovers',
    meta: { auth: true, name: 'Ui-Popovers', isBanner: true, title: 'Popovers' },
    component: () => import('@/views/ui-elements/PopoversView.vue'),
  },
  {
    path: '/typography',
    name: 'ui-elements.typography',
    meta: { auth: true, name: 'Ui-Typography', isBanner: true, title: 'Typography' },
    component: () => import('@/views/ui-elements/TypographyView.vue'),
  },
  {
    path: '/tooltips',
    name: 'ui-elements.tooltips',
    meta: { auth: true, name: 'Ui-Tooltip', isBanner: true, title: 'Tooltips' },
    component: () => import('@/views/ui-elements/TooltipsView.vue'),
  },
  {
    path: '/tabs',
    name: 'ui-elements.tabs',
    meta: { auth: true, name: 'Ui-Tab', isBanner: true, title: 'Tabs' },
    component: () => import('@/views/ui-elements/TabsView.vue'),
  },
  {
    path: '/video',
    name: 'ui-elements.video',
    meta: { auth: true, name: 'Ui-Embedvideo', isBanner: true, title: 'Video' },
    component: () => import('@/views/ui-elements/VideoView.vue'),
  },

  // Spacial Pages
  {
    path: '/category-list',
    name: 'special-pages.billing',
    meta: { auth: true, name: 'Category List', isBanner: true, title: 'Category List' },
    component: () => import('../views/CatregoryListPage.vue'),
  },

  {
    path: '/pricing',
    name: 'special-pages.pricing',
    meta: { auth: true, name: 'Pricing', isBanner: true, title: 'Pricing' },
    component: () => import('@/views/spacial-pages/PricingPage.vue'),
  },

  {
    path: '/user-list',
    name: 'user.user-list',
    meta: { auth: true, name: 'User List', isBanner: true, title: 'User List' },
    component: () => import('@/views/user/ListPage.vue'),
  },
  {
    path: '/user-add',
    name: 'user.user-add',
    meta: { auth: true, name: 'User Add', isBanner: true, title: 'User Add' },
    component: () => import('@/views/user/AddPage.vue'),
  },
  {
    path: '/user-profile',
    name: 'user.user-profile',
    meta: { auth: true, name: 'User Add', isBanner: true, title: 'User Profile' },
    component: () => import('@/views/user/ProfilePage.vue'),
  },
  {
    path: '/privacy-setting',
    name: 'user.user-privacy-setting',
    meta: { auth: true, name: 'Privacy Setting', isBanner: true, title: 'Privacy Setting' },
    component: () => import('@/views/user/PrivacySetting.vue'),
  },

  // Widgets Pages
  {
    path: '/widget-basic',
    name: 'widget.widget-basic',
    meta: { auth: true, name: 'Basic Widget', isBanner: true, title: 'Widget Basic' },
    component: () => import('@/views/widgets/WidgetBasic.vue'),
  },
  {
    path: '/widget-chart',
    name: 'widget.widget-chart',
    meta: { auth: true, name: 'Widget Chart', isBanner: true, title: 'Widget Chart' },
    component: () => import('@/views/widgets/WidgetChart.vue'),
  },
  {
    path: '/widget-card',
    name: 'widget.widget-card',
    meta: { auth: true, name: 'Widget Card', isBanner: true, title: 'Widget Card' },
    component: () => import('@/views/widgets/WidgetCard.vue'),
  },
  // Form Pages
  {
    path: '/elements',
    name: 'form.elements',
    meta: { auth: true, name: 'Form Elements', isBanner: true, title: 'Form Elements' },
    component: () => import('@/views/forms/ElementsPage.vue'),
  },
  {
    path: '/validation',
    name: 'form.validation',
    meta: { auth: true, name: 'Form Validation', isBanner: true, title: 'Form Validation' },
    component: () => import('@/views/forms/ValidationPage.vue'),
  },
  {
    path: '/wizard',
    name: 'form.wizard',
    meta: { auth: true, name: 'Form Wizard', isBanner: true, title: 'Form Wizard' },
    component: () => import('@/views/forms/WizardPage.vue'),
  },
  // Table Pages
  {
    path: '/bootstrap-table',
    name: 'table.bootstrap-table',
    meta: { auth: true, name: 'Bootstrap Table', isBanner: true, title: 'Bootstrap Table' },
    component: () => import('@/views/tables/BootstrapTable.vue'),
  },
  {
    path: '/border-table',
    name: 'table.border-table',
    meta: { auth: true, name: 'Border Table', isBanner: true, title: 'Border Table' },
    component: () => import('@/views/tables/BorderTable.vue'),
  },
  {
    path: '/data-table',
    name: 'table.data-table',
    meta: { auth: true, name: 'Table Data', isBanner: true, title: 'Data Table' },
    component: () => import('@/views/tables/DataTable.vue'),
  },
  {
    path: '/fancy-table',
    name: 'table.fancy-table',
    meta: { auth: true, name: 'Fancy Table', isBanner: true, title: 'Fancy Table' },
    component: () => import('@/views/tables/FancyTable.vue'),
  },
  {
    path: '/fixed-table',
    name: 'table.fixed-table',
    meta: { auth: true, name: 'Fixed Table', isBanner: true, title: 'Fixed Table' },
    component: () => import('@/views/tables/FixedTable.vue'),
  },
  // Icons Pages
  {
    path: '/font-awesome',
    name: 'icons.font-awesome',
    meta: { auth: true, name: 'Font Awesome', isBanner: true, title: 'FontAwesome Icons' },
    component: () => import('../views/icons/FontAwesome.vue'),
  },
  {
    path: '/access-control',
    name: 'icons.access-control',
    meta: { auth: true, name: 'Access Control', isBanner: true, title: 'Access Control Icons' },
    component: () => import('../views/icons/AccessControl.vue'),
  },
  {
    path: '/ui-color',
    name: prefix + '.ui-color',
    meta: { auth: true, name: 'Ui-Color', isBanner: true, title: 'Colors' },
    component: () => import('@/views/extra/UiColorPage.vue'),
  },
  {
    path: '/privacy-policy',
    name: prefix + '.privacy-policy',
    meta: { auth: true, name: 'Privacy Policy', isBanner: true, title: 'Privacy Policy' },
    component: () => import('@/views/extra/PrivacyPolicy.vue'),
  },
  {
    path: '/terms-and-conditions',
    name: prefix + '.terms-and-conditions',
    meta: { auth: true, name: 'Terms of Use', isBanner: true, title: 'Terms of Use' },
    component: () => import('@/views/extra/TermsAndConditions.vue'),
  },
  {
    path: '/rating',
    name: prefix + '.rating',
    meta: { auth: true, name: 'Rating' },
    component: () => import('../components/rating/RatingPage.vue'),
  },
];

export const AuthChildRoutes = (prefix) => [
  {
    path: '/auth/login',
    name: prefix + '.login',
    meta: { auth: false, name: 'Login' },
    component: () => import('../views/auth/default/SignIn.vue'),
  },
  {
    path: '/auth/register',
    name: prefix + '.register',
    meta: { auth: false, name: 'Register' },
    component: () => import('../views/auth/default/SignUp.vue'),
  },
  {
    path: '/auth/reset-password',
    name: prefix + '.reset-password',
    meta: { auth: false, name: 'Reset Password' },
    component: () => import('../views/auth/default/ResetPassword.vue'),
  },
  {
    path: '/auth/verify-email',
    name: prefix + '.varify-email',
    meta: { auth: false, name: 'Varify Email' },
    component: () => import('../views/auth/default/VarifyEmail.vue'),
  },
  {
    path: '/auth/two-factor',
    name: prefix + '.two-factor',
    meta: { auth: false, name: 'TwoFactor' },
    component: () => import('../views/auth/default/TwoFactor.vue'),
  },
  {
    path: '/auth/account-deactivated',
    name: prefix + '.account-deactivated',
    meta: { auth: false, name: 'AccountDeactivated' },
    component: () => import('../views/auth/default/AccountDeactivated.vue'),
  },
  {
    path: '/auth/lock-screen',
    name: prefix + '.lock-screen',
    meta: { auth: false, name: 'Lock Screen' },
    component: () => import('../views/auth/default/LockScreen.vue'),
  },
];
//error routes
export const AuthErrorRoutes = () => [
  {
    path: '/error-500',
    name: 'error.500',
    meta: { auth: true, name: '.500' },
    component: () => import('../views/errors/Error500Page.vue'),
  },
  {
    path: '/error-404',
    name: 'error.404',
    meta: { auth: true, name: '.error' },
    component: () => import('../views/errors/Error404Page.vue'),
  },
  {
    path: '/maintenance',
    name: 'error.maintenance',
    meta: { auth: true, name: '.maintenance' },
    component: () => import('../views/errors/MaintenancePage.vue'),
  },
  {
    path: '/coming-soon',
    name: 'error.coming-soon',
    meta: { auth: true, name: '.coming-soon' },
    component: () => import('../views/errors/coming-soon.vue'),
  },
];
