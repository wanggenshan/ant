export default {
  path: '/shop',
  name: 'shop',
  icon: 'book',
  routes: [
    {
      path: '/shop/list',
      name: 'bookrack',
      component: './Shop/shopList.js',
    },
    // {
    //   path: '/shop/second',
    //   name: 'second',
    //   component:  './index.js',
    // }
  ],
};
