<template>
  <router-link to="/customer/activity-detail">
    <van-row type="flex" align="center" class="order-row">
      <van-col :span="6" class="image-col">
        <!-- 左侧内容 -->
        <img :src="item.imageUrl" alt="Goods Image" class="goods-image"/>
      </van-col>
      <van-col :span="18" class="info-col">
        <!-- 右侧内容 -->
        <h3 class="goods-name">{{ item.name }}</h3>
        <van-row type="flex" justify="space-between" class="goods-extra-info">
          <van-col class="goods-platform">{{ item.platform }}</van-col>
          <van-col class="goods-distance">距离 {{ item.distance }}km</van-col>
        </van-row>
        <div class="goods-promotion">{{ item.promotion }}</div>
        <van-row align="bottom" class="bottom-row">
          <van-col :span="16">
            <p class="goods-order-time">抢单时间：{{ item.orderTime }}</p>
            <van-row gutter="10" type="flex" align="center" justify="left" class="goods-remaining-info">
              <van-col :span="10">
                <div class="goods-progress-bar">
                  <div :style="{ width: progressWidth }"></div>
                </div>
              </van-col>
              <van-col :span="12">
                <p class="goods-remaining">剩余{{ item.remainingOrders }}份</p>
              </van-col>
            </van-row>
          </van-col>

          <van-col :span="8" class="add-to-cart-col">
            <button class="add-to-cart">去抢单</button>
          </van-col>
        </van-row>
      </van-col>
    </van-row>
  </router-link>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
      default: () => ({
        id: 0,
        name: '',
        price: 0,
        imageUrl: require('@/assets/001.jpg'),
        platform: '',
        distance: 0,
        promotion: '',
        orderTime: '',
        remainingOrders: 10,
        totalOrders: 10,
      }),
      validator: (value) => {
        return (
            typeof value.id === 'number' &&
            typeof value.name === 'string' &&
            typeof value.price === 'number' &&
            typeof value.imageUrl === 'string' &&
            typeof value.platform === 'string' &&
            typeof value.distance === 'number' &&
            typeof value.promotion === 'string' &&
            typeof value.orderTime === 'string' &&
            typeof value.remainingOrders === 'number'
        );
      },
    },
  },
  data() {
    return {
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

.goods-image {
  width: 100%;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  border-radius: 5px;
}

.info-col {
  padding: 0 10px;
}

.goods-name {
  font-size: 18px; /* 调整字体大小 */
  margin: 0;
  padding: 0;
  color: #222222;
}

.goods-extra-info {
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  font-size: 12px;
  color: #888888;
}

.goods-promotion {
  display: inline-block;
  margin: 0 0 10px;
  padding: 1px 5px;
  border-radius: 2px;
  background-color: #FF4500; /* 桔红色背景 */
  color: #fff;
  font-size: 11px; /* 调整字体大小 */
}

.bottom-row {
  font-size: 12px;
  color: #888888;
}

.add-to-cart-col {
  text-align: right;
}

.goods-progress-bar {
  width: 100%;
  height: 6px;
  border-radius: 10px;
  background-color: #ddd;
}

.goods-progress-bar div {
  height: 100%;
  border-radius: 10px;
  background-color: #fa8a19;
}

.goods-remaining-info {
}

.goods-remaining {
  padding: 0;
  margin: 0;
}

.goods-order-time {
  margin: 0;
  padding: 0;
}

.add-to-cart {
  background-color: #fa8a19;
  color: #fff;
  border: none;
  border-radius: 14px;
  padding: 6px 12px;
  font-size: 14px; /* 调整字体大小 */
  font-weight: 600;
  cursor: pointer;
}
</style>
