export default {
  path: '/shop',
  name: 'shop',
  icon: 'book',
  routes: [
    {
      path: '/shop/list',
      name: 'first',
      component: './Shop/List.js',
    }
    // {
    //   path: '/shop/second',
    //   name: 'second',
    //   component:  './index.js',
    // }
  ]
};
