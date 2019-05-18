import Vue from 'vue';
import Router from 'vue-router';

import { userRoutes } from './users';

import { AppPageNotFound } from './shared/components';

Vue.use(Router);

const appRoutes = [
  {
    path: '/',
    redirect: '/users'
  },
  {
    path: '*',
    name: 'page-not-found',
    component: AppPageNotFound
  }
];

const routes = [...userRoutes, ...appRoutes];

export default new Router({
  mode: 'history',
  routes
});
