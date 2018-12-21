export default {
  path: '/shop',
  name: 'shop',
  icon: 'book',
  routes: [
    {
      path: '/shop/add',
      name: 'add',
      component: './Shop/Add.js',
    },
    {
      path: '/shop/list',
      name: 'list',
      component: './Shop/List.js',
    },
  ],
};
