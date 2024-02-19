<template>
  <div class="order">
    <div class="order-list-header">
      <van-tabs v-model="activeName">
        <van-tab name="a" title="全部"/>
        <van-tab name="b" title="待上传"/>
        <van-tab name="c" title="审核中"/>
        <van-tab name="d" title="已完成"/>
        <van-tab name="e" title="已驳回"/>
      </van-tabs>
    </div>

    <div class="order-list-wrapper">
      <OrderList/>
    </div>
  </div>
</template>

<script>
// Import necessary components
import OrderList from "@/components/order/OrderList.vue";

export default {
  name: "CustomerOrder",
  components: {
    OrderList
  },
  data() {
    return {
      activeName: 'a'
    };
  }
};
</script>

<style scoped>
.order-list-wrapper {
  padding: 60px 10px 10px 10px;
  height: 100vh;
  background-color: #f0f0f0;
}

.order-list-header {
  padding-top: 20px;
  position: fixed;
  width: 100%;
  background-color: #fff;
}

.order {
  margin-bottom: 40px;
}
</style>
