import Vue from 'vue';
import Router from 'vue-router';
import CustomerHome from '@/views/customer/home/CustomerHome.vue';
import CustomerOrder from '@/views/customer/order/CustomerOrder.vue';
import CustomerMember from '@/views/customer/member/CustomerMember.vue';
import CustomerWelfare from '@/views/customer/welfare/CustomerWelfare.vue';
import CustomerMine from '@/views/customer/mine/CustomerMine.vue';
import SearchVue from "@/views/common/search/SearchVue.vue";
import CustomerWrapper from "@/views/customer/CustomerWrapper.vue";
import MerchantWrapper from "@/views/merchant/MerchantWrapper.vue";
import MerchantHome from "@/views/merchant/home/MerchantHome.vue";
import MerchantMine from "@/views/merchant/mine/MerchantMine.vue";
import MerchantOrder from "@/views/merchant/order/MerchantOrder.vue";
import MerchantPromotion from "@/views/merchant/promotion/MerchantPromotion.vue";
import MerchantPromotionInfo from "@/views/merchant/promotion/MerchantPromotionInfo.vue";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/customer', // Set a global redirect
        },
        {
            path: '/customer',
            component: CustomerWrapper,
            children: [
                {
                    path: '',
                    name: 'home',
                    component: CustomerHome,
                },
                {
                    path: 'order',
                    name: 'order',
                    component: CustomerOrder,
                },
                {
                    path: 'member',
                    name: 'member',
                    component: CustomerMember,
                },
                {
                    path: 'welfare',
                    name: 'welfare',
                    component: CustomerWelfare,
                },
                {
                    path: 'mine',
                    name: 'mine',
                    component: CustomerMine,
                },
            ],
        },
        {
            path: '/merchant',
            component: MerchantWrapper,
            children:
                [
                    {
                        path: '',
                        name: 'home',
                        component: MerchantHome,
                    },
                    {
                        path: 'mine',
                        name: 'mine',
                        component: MerchantMine,
                    },
                    {
                        path: 'order',
                        name: 'order',
                        component: MerchantOrder,
                    },
                    {
                        path: 'promotion',
                        name: 'promotion',
                        component: MerchantPromotion,
                    },
                    {
                        path: 'promotion-info',
                        name: 'promotion-info',
                        component: MerchantPromotionInfo,
                    },
                ],
        },
        {
            path: 'search',
            name: 'search',
            component: SearchVue,
        }
        ,
    ],
})
;
