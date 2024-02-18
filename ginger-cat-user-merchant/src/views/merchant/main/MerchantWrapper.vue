<template>
  <div>
    <!-- Other components or elements -->

    <!-- Page content specific to each route -->
    <router-view></router-view>

    <!-- Bottom Navigation Bar -->
    <van-tabbar v-model="active">
      <van-tabbar-item to="/merchant" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/merchant/promotion-info" icon="info-o">推广</van-tabbar-item>
      <van-tabbar-item to="/merchant/promotion">
        <div class="recommend-button">
          <div class="recommend-text">
            一键<br>推广
          </div>
        </div>
      </van-tabbar-item>
      <van-tabbar-item to="/merchant/order" icon="orders-o">订单</van-tabbar-item>
      <van-tabbar-item to="/merchant/mine" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'MerchantWrapper',
  data() {
    return {
      active: 0
    };
  }
};
</script>

<style>
/* Your global styles here */
.recommend-button {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  width: 50px;
  height: 50px;
  border-radius: 100px;
  background-color: #fa8a19;
  border: 5px solid white;
}

.recommend-text {
  line-height: 1.2;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  text-align: center;
  padding: 10px; /* Add padding for better appearance */
}
</style>
