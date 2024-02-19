<template>
  <div>
    <!-- Other components or elements -->

    <!-- Page content specific to each route -->
    <router-view></router-view>

    <!-- Bottom Navigation Bar -->
    <van-tabbar v-model="active" active-color="#FF4500">
      <van-tabbar-item to="/customer" icon="home-o">主页</van-tabbar-item>
      <van-tabbar-item to="/customer/order" icon="orders-o">订单</van-tabbar-item>
      <van-tabbar-item to="/customer/member" icon="friends-o">会员</van-tabbar-item>
      <van-tabbar-item to="/customer/welfare" icon="gift-o">福利</van-tabbar-item>
      <van-tabbar-item to="/customer/mine" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'CustomerWrapper',
  data() {
    return {
      active: 0
    };
  }
};
</script>

<style>
/* Your global styles here */
</style>
