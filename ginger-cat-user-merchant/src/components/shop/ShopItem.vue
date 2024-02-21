<template>
  <router-link to="/customer/activity-detail">
    <div class="order-row">
      <div class="orange small-thin" style="text-align: right; margin: 5px 0">{{ shop.status }}</div>
      <van-row type="flex" align="center">
        <van-col :span="6" class="image-col">
          <!-- 左侧内容 -->
          <!--          <img :src="shop.imageUrl" alt="shop Image" class="shop-image"/>-->
          <img :src="require('@/assets/001.jpg')" alt="shop Image" class="shop-image"/>
        </van-col>
        <van-col :span="18" class="info-col">
          <!-- 右侧内容 -->
          <h3 class="shop-name">{{ shop.shopName }}</h3>
          <div class="shop-extra-info">
            <span class="small-thin">手机号码</span>
            <span class="small-bold">{{ shop.mobile }}</span>
          </div>
          <div class="shop-extra-info">
            <span class="small-thin">店铺地址</span>
            <span class="small-bold">{{ shop.shopAddress }}</span>
          </div>
          <div class="shop-extra-info">
            <span class="small-thin">店铺类型</span>
            <span class="small-bold">{{ shop.shopType }}</span>
          </div>
        </van-col>
      </van-row>
      <div class="normal-thin my-button" style="text-align: right; margin-top: 20px">立即完善 ></div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    shop: {
      type: Object,
      required: true,
      default: () => ({
        id: '',
        shopName: '',
        imageUrl: require('@/assets/001.jpg'),
        mobile: '',
        shopAddress: '',
        shopType: '',
        status: ''
      }),
      // validator: (value) => {
      //   return (
      //       typeof value.id === 'string' &&
      //       typeof value.shopName === 'string' &&
      //       typeof value.imageUrl === 'string' &&
      //       typeof value.mobile === 'string' &&
      //       typeof value.shopAddress === 'string' &&
      //       typeof value.shopType === 'string'
      //   );
      // },
    },
  },
  data() {
    return {
      name: "ShopItem",
      progressWidth: '100%', // Set a default value
    };
  },
  watch: {
    item: {
      immediate: true,
      handler(newValue) {
        this.calculateProgressWidth(newValue);
      },
    },
  },
  methods: {
    calculateProgressWidth(item) {
      if (item && item.totalOrders > 0) {
        this.progressWidth = `${(item.remainingOrders / item.totalOrders) * 100}%`;
      } else {
        this.progressWidth = '0%';
      }
    },
    formatPrice(price) {
      return price !== undefined ? `$${price.toFixed(2)}` : '';
    },
  },
};
</script>

<style scoped>
.order-row {
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  background-color: #fff;
}

.image-col {
  max-width: 25%;
}

.shop-image {
  width: 100%;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  border-radius: 5px;
}

.info-col {
  padding: 0 10px;
}

.shop-name {
  font-size: 18px; /* 调整字体大小 */
  margin: 0;
  padding: 0;
  color: #222222;
}

.shop-extra-info {
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
  padding: 0;
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

.shop-progress-bar div {
  height: 100%;
  border-radius: 10px;
  background-color: #fa8a19;
}
</style>
