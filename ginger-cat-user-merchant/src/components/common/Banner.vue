<template>
  <van-swipe :autoplay="3000" indicator-color="#1989fa" class="banner">
    <van-swipe-item v-for="(item, index) in bannerList" :key="index">
      <img :src="item.imageUrl" alt="Banner Image" class="banner-image" />
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  data() {
    return {
      bannerList: [
        { imageUrl: require('@/assets/customer/banner/banner-001.png') },
        { imageUrl: require('@/assets/customer/banner/banner-002.png') },
        { imageUrl: require('@/assets/customer/banner/banner-003.png') },
        { imageUrl: require('@/assets/customer/banner/banner-004.png') }
      ],
    };
  },
};
</script>

<style scoped>
.banner {
  height: 122px; /* Adjust the height as needed */
  overflow: hidden; /* Ensure that overflow is hidden for swipe effect */
  border-radius: 10px;
}

.banner-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
