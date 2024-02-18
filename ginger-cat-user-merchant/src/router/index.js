import Vue from 'vue';
import Router from 'vue-router';
import CustomerHome from '@/views/customer/main/home/CustomerHome.vue';
import CustomerOrder from '@/views/customer/main/order/CustomerOrder.vue';
import CustomerMember from '@/views/customer/main/member/CustomerMember.vue';
import CustomerWelfare from '@/views/customer/main/welfare/CustomerWelfare.vue';
import CustomerMine from '@/views/customer/main/mine/CustomerMine.vue';
import SearchVue from "@/views/customer/search/SearchVue.vue";
import CustomerWrapper from "@/views/customer/main/CustomerWrapper.vue";
import MerchantWrapper from "@/views/merchant/main/MerchantWrapper.vue";
import MerchantHome from "@/views/merchant/main/home/MerchantHome.vue";
import MerchantMine from "@/views/merchant/main/mine/MerchantMine.vue";
import MerchantOrder from "@/views/merchant/main/order/MerchantOrder.vue";
import MerchantPromotion from "@/views/merchant/main/promotion/MerchantPromotion.vue";
import MerchantPromotionInfo from "@/views/merchant/main/promotion/MerchantPromotionInfo.vue";
import ActivityDetail from "@/views/customer/detail/ActivityDetail.vue";

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
                    name: 'customer-home',
                    component: CustomerHome,
                },
                {
                    path: 'order',
                    name: 'customer-order',
                    component: CustomerOrder,
                },
                {
                    path: 'member',
                    name: 'customer-member',
                    component: CustomerMember,
                },
                {
                    path: 'welfare',
                    name: 'customer-welfare',
                    component: CustomerWelfare,
                },
                {
                    path: 'mine',
                    name: 'customer-mine',
                    component: CustomerMine,
                },
            ],
        },
        {
            path: '/customer/search',
            name: 'customer-search',
            component: SearchVue,
        },
        {
            path: '/customer/activity-detail',
            name: 'customer-activity-detail',
            component: ActivityDetail,
        },
        {
            path: '/merchant',
            component: MerchantWrapper,
            children:
                [
                    {
                        path: '',
                        name: 'merchant-home',
                        component: MerchantHome,
                    },
                    {
                        path: 'mine',
                        name: 'merchant-mine',
                        component: MerchantMine,
                    },
                    {
                        path: 'order',
                        name: 'merchant-order',
                        component: MerchantOrder,
                    },
                    {
                        path: 'promotion',
                        name: 'merchant-promotion',
                        component: MerchantPromotion,
                    },
                    {
                        path: 'promotion-info',
                        name: 'merchant-promotion-info',
                        component: MerchantPromotionInfo,
                    },
                ],
        },
    ],
})
;
