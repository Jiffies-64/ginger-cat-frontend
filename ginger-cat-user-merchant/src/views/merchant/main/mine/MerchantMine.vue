<template>
  <div class="user-page">
    <!-- Header -->
    <div class="header">
      <router-link to="/customer">
        <span class="merchant-join">
          <van-icon name="shop-o" @click="goToMerchantEntry" class="icon" color="#fff" size="14px"></van-icon>
          <span class="merchant-join-text">前往顾客端</span>
        </span>
      </router-link>
    </div>

    <!-- User Information -->
    <div class="user-info">
      <img :src="require('@/assets/logo.png')" alt="User Avatar" class="avatar">
      <div class="user-details">
        <div class="user-name">John Doe</div>
        <div class="user-id">User ID: 123456</div>
        <van-row type="flex" justify="space-around" style="margin-top: 20px">
          <van-col :span="12">
            <div class="small-thin">今日双平台订单数</div>
            <div class="large-large-large-bold">0</div>
          </van-col>
          <van-col :span="12">
            <div class="small-thin">今日总消费额</div>
            <div class="large-large-large-bold">0</div>
          </van-col>
        </van-row>
      </div>
    </div>

    <!-- My Earnings -->
    <van-card>
      <template #title>
        <van-row type="flex" justify="space-between" style="margin-top: 5px">
          <van-col class="large-bold">我的钱包</van-col>
          <van-col class="normal-thin">></van-col>
        </van-row>
      </template>
      <template #desc>
        <van-row type="flex" justify="space-between" style="margin-top: 20px;">
          <van-col :span="10" class="small-thin">
            <div>余额</div>
            <div class="large-large-large-bold">100.00</div>
          </van-col>
          <van-col :span="10" class="small-thin">
            <div>冻结</div>
            <div class="large-large-large-bold">50.00</div>
          </van-col>
        </van-row>
        <div class="normal-bold orange recharge">账户充值</div>
      </template>
    </van-card>

    <van-card>
      <template #title>
        <router-link to="/merchant/my-shop">
          <van-row type="flex" justify="space-between" style="margin-top: 5px">
            <van-col class="large-bold">我的店铺({{ shops.length }})</van-col>
            <van-col class="normal-thin">></van-col>
          </van-row>
        </router-link>
      </template>
      <template #desc>
        <div>
          <van-row v-for="shop in shops" :key="shop.id" type="flex" justify="space-between" align="center" style="margin-top: 20px;">
            <van-col :span="2" class="normal-bold">
              <img :src="require('@/assets/merchant/shop/shop.png')" alt="" class="shop-image"/>
            </van-col>
            <van-col :span="13" class="normal-bold">
              <span class="overflow-ellipsis" style="margin-left: 10px">{{ shop.shopName }}</span>
            </van-col>
            <van-col :span="6" class="small-thin" style="text-align: right">
              <div> ></div>
            </van-col>
          </van-row>
        </div>
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
              <van-icon name="bill-o" class="service-icon"></van-icon>
            </div>
            <div class="service-description">我的账单</div>
          </van-col>
          <van-col>
            <div style="width: 28px; margin: 0 auto">
              <van-icon name="friends-o" class="service-icon"></van-icon>
            </div>
            <div class="service-description">邀请商家</div>
          </van-col>
          <van-col>
            <div style="width: 28px; margin: 0 auto">
              <van-icon name="user-o" class="service-icon"></van-icon>
            </div>
            <div class="service-description">联系客服</div>
          </van-col>
          <router-link to="/merchant">
            <van-col>
              <div style="width: 28px; margin: 0 auto">
                <van-icon name="setting-o" class="service-icon"></van-icon>
              </div>
              <div class="service-description">设置</div>
            </van-col>
          </router-link>
        </van-row>
      </template>
    </van-card>
  </div>
</template>

<script>
import {getShopBaseBriefInfo} from "@/api/content";

export default {
  name: "MerchantMine",
  data() {
    return {
      active: 0,
      shops: []
    };
  },
  methods: {
    goToMerchantEntry() {
      // Handle navigation to Merchant Entry
    },
    goToSettings() {
      // Handle navigation to Settings
    },
  },
  async created() {
    try {
      const response = await getShopBaseBriefInfo();
      console.log(response);
      this.shops = response.result;
    } catch (error) {
      console.error(error);
    }
  },
};
</script>

<style scoped>
.overflow-ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}


.user-page {
  padding: 30px 14px 14px 14px;
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
  align-items: flex-start;

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

.recharge {
  border-top: #eee 1px solid;
  padding: 5px;
  margin: 5px 0 0 0;
  text-align: center;
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

.shop-image {
  width: 100%;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  border-radius: 5px;
}
</style>
