import AppUsers from './users.vue';

import AppUserList from './user-list/user-list.vue';

const userRoutes = [
  {
    path: '/users',
    component: AppUsers,
    children: [
      {
        path: 'user-list',
        name: 'user-list',
        component: AppUserList
      },
      {
        path: '',
        redirect: { name: 'user-list' }
      }
    ]
  }
];

export default userRoutes;
