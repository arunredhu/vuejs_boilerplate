import Vue from 'vue';
import Router from 'vue-router';

import { AppPageNotFound } from './shared/components';

Vue.use(Router);

const appRoutes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '*',
    name: 'page-not-found',
    component: AppPageNotFound
  }
];

const routes = [...appRoutes];

export default new Router({
  mode: 'history',
  routes
});
