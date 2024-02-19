<template>
  <div class="order-list">
    <OrderItem v-for="item in orderItems" :key="item.order_id" :item="item"/>
  </div>
</template>

<script>
import OrderItem from '@/components/order/OrderItem.vue';

export default {
  components: {
    OrderItem,
  },
  data() {
    return {
      orderItems: [
        {
          order_id: "1278457815498678",
          image_url: require('@/assets/001.jpg'),
          order_time: '02/19 12:14',
          name: '美味汉堡',
          platform: 'Meituan',
          promotion: '满20减10',
        },
        {
          order_id: "1278457815598678",
          image_url: require('@/assets/002.jpg'),
          order_time: '02/18 19:08',
          name: '香脆薯条',
          platform: '美团',
          promotion: '满16减8',
        },
        {
          order_id: "1278454865498678",
          image_url: require('@/assets/003.jpeg'),
          order_time: '02/18 11:28',
          name: '甜蜜冰淇淋',
          platform: '饿了么',
          promotion: '满20减5',
        }
        // Add more items as needed
      ],
    };
  },
};
</script>

<style scoped>
/* Your goods list styles here */
.order-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
  margin-bottom: 40px;
}

/* Add more styles as needed */
</style>
