export default {
  path: '/manage',
  name: 'user',
  icon: 'user',
  routes: [
    {
      path: '/manage/list',
      name: 'userList',
      component: './User/List.js',
    }
    // {
    //   path: '/shop/second',
    //   name: 'second',
    //   component:  './index.js',
    // }
  ]
};
