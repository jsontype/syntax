import { createRouter, createWebHistory } from 'vue-router';

import DashboardLayout from '../layouts/DashboardLayout.vue';
import AuthLayout from '../layouts/AuthLayout.vue';
import { DashboardRoutes, AuthChildRoutes, AuthErrorRoutes } from './dashboard';

const routes = [
  {
    path: '/admin',
    name: 'dashboard',
    component: DashboardLayout,
    meta: {},
    children: DashboardRoutes('dashboard'),
  },
  {
    path: '/auth',
    name: 'auth',
    component: AuthLayout,
    meta: {},
    children: AuthChildRoutes('auth'),
  },
  {
    path: '/error',
    name: 'error',
    component: AuthLayout,
    meta: {},
    children: AuthErrorRoutes(),
  },
];

const Router = createRouter({
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default Router;
