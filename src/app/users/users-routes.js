import AppUsers from './users.vue';

const userRoutes = [
  {
    path: '/users',
    component: AppUsers
    // children: [
    //   {
    //     path: 'login-form',
    //     name: 'login-form',
    //     component: LoginForm
    //   },
    //   {
    //     path: '',
    //     redirect: { name: 'login-form' }
    //   }
    // ]
  }
];

export default userRoutes;
