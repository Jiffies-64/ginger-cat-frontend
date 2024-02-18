import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/home/Home.vue';
import Order from '@/views/order/Order.vue';
import Member from '@/views/member/Member.vue';
import Welfare from '@/views/welfare/Welfare.vue';
import Mine from '@/views/mine/Mine.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/order',
      name: 'order',
      component: Order,
    },
    {
      path: '/member',
      name: 'member',
      component: Member,
    },
    {
      path: '/welfare',
      name: 'welfare',
      component: Welfare,
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine,
    },
  ],
});
