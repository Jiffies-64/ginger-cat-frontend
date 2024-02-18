<template>
  <div>
    <!-- Other components or elements -->

    <!-- Page content specific to each route -->
    <router-view></router-view>

    <!-- Bottom Navigation Bar -->
    <van-tabbar v-model="active">
      <van-tabbar-item to="/customer" icon="home-o">Home</van-tabbar-item>
      <van-tabbar-item to="/customer/order" icon="orders-o">Order</van-tabbar-item>
      <van-tabbar-item to="/customer/member" icon="friends-o">Member</van-tabbar-item>
      <van-tabbar-item to="/customer/welfare" icon="gift-o">Welfare</van-tabbar-item>
      <van-tabbar-item to="/customer/mine" icon="user-o">Mine</van-tabbar-item>
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
