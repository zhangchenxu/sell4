import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '@/components/HelloWorld'
import seller from '@/components/seller/seller';
import goods from '@/components/goods/goods';
import ratings from '@/components/ratings/ratings';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/seller',
      component: seller
    },
    {
      path: '/goods',
      component: goods
    },
    {
      path: '/ratings',
      component: ratings
    }
  ]
});
