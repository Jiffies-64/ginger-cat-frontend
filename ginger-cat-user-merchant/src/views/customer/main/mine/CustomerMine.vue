<template>
  <div class="user-page">
    <!-- Header -->
    <div class="header">
      <router-link to="/merchant">
        <span class="merchant-join">
          <van-icon name="shop-o" @click="goToMerchantEntry" class="icon" color="#fff" size="14px"></van-icon>
          <span class="merchant-join-text">商家入驻</span>
        </span>
      </router-link>
      <van-icon name="setting-o" @click="goToSettings" class="icon"></van-icon>
    </div>

    <!-- User Information -->
    <div class="user-info">
      <img :src="require('@/assets/logo.png')" alt="User Avatar" class="avatar">
      <div class="user-details">
        <div class="user-name">John Doe</div>
        <div class="user-id">User ID: 123456</div>
        <div class="user-phone">Phone: 123-456-7890</div>
      </div>
    </div>

    <!-- My Coupons and Red Packets -->
    <van-tabs v-model="active" line-height="0">
      <van-tab title="我的卡券(5)"/>
      <van-tab title="我的红包(3)"/>
    </van-tabs>

    <!-- My Earnings -->
    <van-card>
      <template #title>
        <van-row type="flex" justify="space-between">
          <van-col class="large-bold">我的收益</van-col>
          <van-col class="normal-thin">明细 ></van-col>
        </van-row>
      </template>
      <template #desc>
        <van-row type="flex" justify="space-between" style="margin-top: 20px;">
          <van-col :span="10" class="small-thin">
            <div>可提现蚕豆</div>
            <van-row type="flex" justify="space-between">
              <van-col class="large-large-large-bold orange">0</van-col>
              <van-col class="normal-thin">
                <div class="my-button">提现</div>
              </van-col>
            </van-row>
          </van-col>
          <van-col :span="10" class="small-thin">
            <div>累计获得/预估全年获得</div>
            <div class="large-large-bold">1520.21<span class="small-thin">/4080</span></div>
          </van-col>
        </van-row>
        <van-row type="flex" justify="space-between" style="margin-top: 20px;">
          <van-col :span="7">
            <div class="small-thin">累计团长收益</div>
            <div class="large-large-bold">13<span class="small-bold">.44</span></div>
          </van-col>
          <van-col :span="7">
            <div class="small-thin">累计团员</div>
            <div class="large-large-bold">3</div>
          </van-col>
          <van-col :span="7">
            <div class="small-thin">有效团员</div>
            <div class="large-large-bold">1</div>
          </van-col>
        </van-row>
      </template>
    </van-card>

    <!-- My Services -->
    <van-card>
      <template #title>
        <div class="large-bold" style="margin-bottom: 15px">我的服务</div>
      </template>
      <template #desc>
        <van-row class="service-row" type="flex" justify="space-between" align="middle">
          <van-col>
            <div style="width: 28px; margin: 0 auto">
              <van-icon name="friends-o" class="service-icon"></van-icon>
            </div>
            <div class="service-description">我的团员</div>
          </van-col>
          <van-col>
            <div style="width: 28px; margin: 0 auto">
              <van-icon name="newspaper-o" class="service-icon"></van-icon>
            </div>
            <div class="service-description">我的海报</div>
          </van-col>
          <van-col>
            <div style="width: 28px; margin: 0 auto">
              <van-icon name="bill-o" class="service-icon"></van-icon>
            </div>
            <div class="service-description">收益账单</div>
          </van-col>
          <router-link to="/merchant">
            <van-col>
              <div style="width: 28px; margin: 0 auto">
                <van-icon name="shop-o" class="service-icon"></van-icon>
              </div>
              <div class="service-description">商家入驻</div>
            </van-col>
          </router-link>
        </van-row>
      </template>
    </van-card>
  </div>
</template>

<script>
export default {
  name: "CustomerMine",
  data() {
    return {
      active: 0
    };
  },
  methods: {
    goToMerchantEntry() {
      // Handle navigation to Merchant Entry
    },
    goToSettings() {
      // Handle navigation to Settings
    },
  }
};
</script>

<style scoped>
.user-page {
  padding: 20px 14px 14px 14px;
  height: 100vh;
  background-color: #f0f0f0;
}

.merchant-join {
  height: 20px;
  border-radius: 4px;
  background-color: #ff4d00;
}

.merchant-join-text {
  font-weight: 800;
  color: #ffffff;
  font-size: 12px;
  line-height: 20px;
  margin-right: 10px;
}

.header {
  display: flex;
  justify-content: flex-end;
  padding: 10px;
}

.icon {
  font-size: 20px;
  margin-left: 10px;
  cursor: pointer;
}

.user-info {
  display: flex;
  align-items: center;
  margin: 20px 0;
}

.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
}

.user-details {
  flex: 1;
}

.user-name {
  font-size: 16px;
  font-weight: bold;
}

.user-id,
.user-phone {
  font-size: 14px;
  color: #888;
}

.service-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.service-icon {
  font-size: 28px;
  margin-bottom: 10px;
}

.service-description {
  font-size: 12px;
  font-weight: 300;
  text-align: center;
}

.large-large-large-bold {
  margin-right: 10px;
  font-weight: 600;
  font-size: 24px;
  color: #333333;
}

.large-large-bold {
  margin-right: 10px;
  font-weight: 600;
  font-size: 20px;
  color: #333333;
}

.large-bold {
  margin-right: 10px;
  font-weight: 600;
  font-size: 16px;
  color: #333333;
}

.normal-bold {
  margin-right: 10px;
  font-weight: 600;
  font-size: 14px;
  color: #333333;
}

.small-bold {
  margin-right: 10px;
  font-weight: 600;
  font-size: 12px;
  color: #333333;
}

.large-thin {
  margin-right: 10px;
  font-weight: 300;
  font-size: 16px;
  color: #888888;
}

.normal-thin {
  margin-right: 10px;
  font-weight: 300;
  font-size: 14px;
  color: #888888;
}

.small-thin {
  margin-right: 10px;
  font-weight: 300;
  font-size: 12px;
  color: #888888;
}

.orange {
  color: orange;
}

.my-button {
  border: 1px orange solid;
  color: orange;
  font-size: 12px;
  line-height: 20px;
  border-radius: 10px;
  padding: 0 5px;
}
</style>
