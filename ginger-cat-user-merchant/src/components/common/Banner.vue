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
        { imageUrl: require('@/assets/001.jpg') },
        { imageUrl: require('@/assets/002.jpg') },
        { imageUrl: require('@/assets/003.jpeg') },
      ],
    };
  },
};
</script>

<style scoped>
.banner {
  height: 200px; /* Adjust the height as needed */
  overflow: hidden; /* Ensure that overflow is hidden for swipe effect */
}

.banner-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
