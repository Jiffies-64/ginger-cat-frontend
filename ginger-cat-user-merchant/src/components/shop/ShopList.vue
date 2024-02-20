<template>
  <div class="shop-list">
    <ShopItem v-for="item in shopItems" :key="item.id" :item="item"/>
  </div>
</template>

<script>
import ShopItem from '@/components/shop/ShopItem.vue';

export default {
  components: {
    ShopItem,
  },
  data() {
    return {
      name: "ShopList",
      shopItems: [
        {
          id: 1,
          name: '美味汉堡',
          image_url: require('@/assets/001.jpg'),
          phone: '18812348765',
          shop_addr: '万达国际中心B座',
          shop_type: '品牌连锁'
        },
        {
          id: 2,
          name: '美味炸鸡',
          image_url: require('@/assets/002.jpg'),
          phone: '18812348765',
          shop_addr: '万达国际中心A座',
          shop_type: '品牌连锁'
        }
      ],
    };
  },
};
</script>

<style scoped>
/* Your shop list styles here */
.shop-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
  margin-bottom: 40px;
}

/* Add more styles as needed */
</style>
