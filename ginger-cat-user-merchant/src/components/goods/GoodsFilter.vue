<template>
  <div class="goods-filter">
<!--    &lt;!&ndash; First row: Multiple-choice buttons &ndash;&gt;-->
<!--    <van-tabs v-model="activeName">-->
<!--      <van-tab name="all" title="全城霸王餐"/>-->
<!--      <van-tab name="elm" title="饿了么专版"/>-->
<!--      <van-tab name="brand" title="大牌专享"/>-->
<!--      <van-tab name="rebate" title="返利餐"/>-->
<!--    </van-tabs>-->

    <van-dropdown-menu>
      <van-dropdown-item v-model="order" :options="orderOptions"/>
      <van-dropdown-item v-model="time" :options="timeOptions"/>
      <van-dropdown-item v-model="type" :options="typeOptions"/>
      <van-dropdown-item v-model="platform" :options="platformOptions"/>
    </van-dropdown-menu>

    <div class="checkbox-row">
      <van-checkbox v-model="highRebate">高返利</van-checkbox>
      <van-checkbox v-model="noReview">无需评价</van-checkbox>
      <van-checkbox v-model="canGrab">只看可抢</van-checkbox>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // activeName: 'all',
      highRebate: false,
      noReview: false,
      canGrab: false,

      order: 'default',
      orderOptions: [
        {value: 'default', text: '默认排序'},
        {value: 'distance', text: '距离排序'},
      ],

      time: '0',
      timeOptions: [
        {value: '0', text: '全部时段'},
        {value: '1', text: '早餐'},
        {value: '2', text: '中餐'},
        {value: '3', text: '晚餐'},
      ],

      type: '0',
      typeOptions: [
        {value: '0', text: '全部类型'},
        {value: '1', text: '夜宵'},
        {value: '2', text: '零售'},
        {value: '3', text: '甜品奶茶'},
      ],

      platform: '0',
      platformOptions: [
        {value: '0', text: '全部平台'},
        {value: '1', text: '美团'},
        {value: '2', text: '饿了么'}
      ],
    };
  },
};
</script>

<style scoped>
.checkbox-row {
  padding: 10px;
  background-color: #fff;
  border-radius: 0 0 10px 10px;
  margin-bottom: 10px;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
}
</style>
