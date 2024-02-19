<template>
  <div class="header">
    <van-row type="flex" justify="space-between" align="bottom">
      <van-col>
        <img class="logo-img" src="@/assets/logo.png" alt="Logo">
      </van-col>
      <van-col>
        <div class="location">
          <span class="location-text">比奇堡</span>
          <van-icon name="location"/>
        </div>
      </van-col>
    </van-row>
    <router-link to="/customer/search">
      <div style="display: flex; align-items: center;" class="search-box-simulation">
        <van-icon class="search-icon" name="search"/>
        <van-swipe vertical :autoplay="3000" :height="20" :show-indicators="false"
                   :touchable="false" class="search-text">
          <van-swipe-item default="1">输入橘猫邀请编号，搜索惊喜</van-swipe-item>
          <van-swipe-item default="2">找寻好店，享好餐~</van-swipe-item>
        </van-swipe>
      </div>
    </router-link>
  </div>
</template>

<script>

</script>

<style scoped>
/* Your component styles here */
.header {
  margin-top: 20px;
  margin-bottom: 10px;
}

.logo-img {
  max-height: 44px;
}

.location {
  margin-bottom: 3px;
}

.location-text {
  font-size: 14px;
  font-weight: 500;
  margin-right: 5px;
}

.search-icon {
  margin-right: 10px;
  margin-left: 10px;
}

.search-text {
  height: 20px;
  flex: 1;
  font-size: 12px;
  line-height: 20px;
  color: #888888;
}

.search-box-simulation {
  background-color: #fff;
  height: 30px;
  border-radius: 15px;
}
</style>
