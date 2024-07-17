import { createRouter, createWebHistory } from 'vue-router';

// layouts
import FrontendLayout from '../layouts/FrontendLayout.vue';
import FrontendMerchandiseLayout from '../layouts/FrontendMerchandiseLayout.vue';
import { LandingPageRoutes, MerchandiseRoutes, DefaultPages } from './landing-page';

const routes = [
  {
    path: '/',
    name: 'landing-page',
    component: FrontendLayout,
    meta: { header: 'header-mega' },
    children: LandingPageRoutes(),
  },
  {
    path: '/merchandise',
    name: 'landing-page.merchandise',
    component: FrontendMerchandiseLayout,
    meta: {},
    children: MerchandiseRoutes(),
  },
  ...DefaultPages,
];

const Router = createRouter({
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
Router.beforeEach((to, from, next) => {
  const grid = to.params.grid;
  const blogType = to.params.type;
  if (grid) {
    switch (grid) {
      case 'one-column':
        to.meta.pageName = 'header.1_column_blog';
        break;
      case 'two-column':
        to.meta.pageName = 'header.2_column_blog';
        break;
      case 'three-column':
        to.meta.pageName = 'header.3_column_blog';
        break;
      case 'four-column':
        to.meta.pageName = 'header.4_column_blog';
        break;
      default:
        break;
    }
  }
  if (blogType) {
    switch (blogType) {
      case 'blog-template':
        to.meta.pageName = 'Blog Template';
        break;
      case 'the-most-anticipated-movies':
        to.meta.pageName = 'The Most Anticipated Movies';
        break;
      case 'audio':
        to.meta.pageName = 'blogs.black_pearl';
        break;
      case 'video':
        to.meta.pageName = 'blogs.cookies_web';
        break;
      case 'link':
        to.meta.pageName = 'blogs.birds_of_prey';
        break;
      case 'quote':
        to.meta.pageName = 'blogs.saturday_night';
        break;
      case 'gallery':
        to.meta.pageName = 'blogs.gillian_shares';
        break;
      default:
        break;
    }
  }
  // Continue with the navigation
  next();
});

export default Router;
