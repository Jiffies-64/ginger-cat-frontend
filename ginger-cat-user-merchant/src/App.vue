<template>
  <div>
    <!-- Other components or elements -->

    <!-- Page content specific to each route -->
    <router-view></router-view>

    <!-- Bottom Navigation Bar -->
    <van-tabbar>
      <van-tabbar-item to="/" icon="home-o">Home</van-tabbar-item>
      <van-tabbar-item to="/order" icon="orders-o">Order</van-tabbar-item>
      <van-tabbar-item to="/member" icon="friends-o">Member</van-tabbar-item>
      <van-tabbar-item to="/welfare" icon="gift-o">Welfare</van-tabbar-item>
      <van-tabbar-item to="/mine" icon="user-o">Mine</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
/* Your global styles here */
</style>
