<template>
  <div class="goods">
    <GoodsFilter />
    <GoodsList />
  </div>
</template>

<script>
import GoodsFilter from '@/components/goods/GoodsFilter.vue';
import GoodsList from '@/components/goods/GoodsList.vue';

export default {
  components: {
    GoodsFilter,
    GoodsList,
  },
};
</script>

<style scoped>
/* Your goods page styles here */
.goods {
  padding: 0;
}
</style>
