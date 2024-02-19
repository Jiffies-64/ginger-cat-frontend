<template>
  <div>
    <van-row type="flex" justify="space-between" class="order-title">
      <van-col>订单号：{{ item.order_id }}</van-col>
      <van-col>已完成</van-col>
    </van-row>
    <van-divider class="divider"/>
    <van-row type="flex" align="center" class="order-row">
      <van-col :span="6" class="image-col">
        <!-- 左侧内容 -->
        <img :src="item.image_url" alt="order Image" class="order-image"/>
      </van-col>
      <van-col :span="18" class="info-col">
        <!-- 右侧内容 -->
        <h3 class="order-name">{{ item.name }}</h3>
        <div class="order-promotion">{{ item.promotion }}</div>
        <van-row type="flex" justify="left" class="order-extra-info">
          <van-col class="order-distance">活动平台</van-col>
          <van-col class="order-platform">{{ item.platform }}</van-col>
        </van-row>
        <van-row type="flex" justify="left" class="order-extra-info">
          <van-col class="order-distance">参与时间</van-col>
          <van-col class="order-platform">{{ item.order_time }}</van-col>
        </van-row>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
      default: () => ({
        order_id: 0,
        name: '',
        image_url: require('@/assets/001.jpg'),
        platform: '',
        promotion: '',
        order_time: '',
      }),
      validator: (value) => {
        return (
            typeof value.order_id === 'string' &&
            typeof value.name === 'string' &&
            typeof value.image_url === 'string' &&
            typeof value.platform === 'string' &&
            typeof value.promotion === 'string' &&
            typeof value.order_time === 'string'
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
.order-title {
  padding: 10px 10px 0;
  background-color: #fff;
  border-radius: 10px 10px 0 0;
}

.order-row {
  padding: 5px 10px 10px;
  margin-bottom: 10px;
  border-radius: 0 0 10px 10px;
  background-color: #fff;
}

.image-col {
  max-width: 25%;
}

.order-image {
  width: 100%;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  border-radius: 5px;
}

.info-col {
  padding: 0 10px;
}

.order-name {
  font-size: 18px; /* 调整字体大小 */
  margin: 0;
  padding: 0;
}

.order-extra-info {
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  font-size: 12px;
  color: #888888;
}

.order-promotion {
  display: inline-block;
  margin: 0 0 10px;
  padding: 1px 5px;
  border-radius: 2px;
  background-color: #FF4500; /* 桔红色背景 */
  color: #fff;
  font-size: 11px; /* 调整字体大小 */
}

.order-progress-bar div {
  height: 100%;
  border-radius: 10px;
  background-color: #fa8a19;
}

.divider {
  margin: 2px;
  background-color: #fff;
}
</style>
