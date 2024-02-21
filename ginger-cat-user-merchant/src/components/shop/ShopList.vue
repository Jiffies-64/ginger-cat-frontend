<template>
  <div class="shop-list">
    <!-- 使用 v-for 循环 shops 属性 -->
    <ShopItem v-for="shop in shops" :key="shop.id" :shop="shop"/>
  </div>
</template>

<script>
import ShopItem from '@/components/shop/ShopItem.vue';

export default {
  components: {
    ShopItem,
  },
  props: {
    shops: {
      type: Array, // 应该是数组类型
      default: () => []
    },
  },
  data() {
    return {
      name: "ShopList",
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
