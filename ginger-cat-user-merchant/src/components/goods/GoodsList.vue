<template>
  <div class="goods-list">
    <GoodsItem v-for="item in goodsItems" :key="item.id" :item="item"/>
  </div>
</template>

<script>
import GoodsItem from '@/components/goods/GoodsItem.vue';

export default {
  components: {
    GoodsItem,
  },
  data() {
    return {
      goodsItems: [
        {
          id: 1,
          name: '美味汉堡',
          price: 15.0,
          imageUrl: require('@/assets/001.jpg'),
          platform: 'Meituan',
          distance: 2.5,
          promotion: '满20减10',
          orderTime: '18:00 - 21:00',
          remainingOrders: 15,
          totalOrders: 20,
        },
        {
          id: 2,
          name: '香脆薯条',
          price: 8.0,
          imageUrl: require('@/assets/002.jpg'),
          platform: 'Eleme',
          distance: 1.8,
          promotion: '满15减5',
          orderTime: '12:00 - 20:00',
          remainingOrders: 3,
          totalOrders: 10,
        },
        {
          id: 3,
          name: '甜蜜冰淇淋',
          price: 12.0,
          imageUrl: require('@/assets/003.jpeg'),
          platform: 'Meituan',
          distance: 3.2,
          promotion: '满30减15',
          orderTime: '15:00 - 22:00',
          remainingOrders: 10,
          totalOrders: 10,
        },
        // Add more items as needed
      ],
    };
  },
};
</script>

<style scoped>
/* Your goods list styles here */
.goods-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
  margin-bottom: 40px;
}

/* Add more styles as needed */
</style>
