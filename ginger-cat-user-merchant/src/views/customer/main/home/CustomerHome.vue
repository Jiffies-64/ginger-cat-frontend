<template>
  <div class="home">
    <Header/>
    <Banner/>
    <van-row class="icon-row" type="flex" justify="space-between">
      <van-col class="icon-column" :span="4" v-for="(item, index) in imageList" :key="index">
        <router-link :to="`/details/${index}`">
          <van-image
              width="50px"
              height="50px"
              fit="cover"
              :src="item.imageUrl"
          />
          <div class="icon-title">{{ item.title }}</div>
          <div class="icon-description">{{ item.description }}</div>
        </router-link>
      </van-col>
    </van-row>
    <Goods/>
    <!-- Add other components as needed -->
  </div>
</template>

<script>
import Banner from '@/components/common/Banner.vue';
import Header from "@/components/header/Header.vue";
import Goods from "@/views/customer/main/home/goods/Goods.vue";

export default {
  name: "CustomerHome",
  components: {
    Header,
    Banner,
    Goods
    // Add other components as needed
  },
  data() {
    return {
      imageList: [
        {imageUrl: 'https://img.yzcdn.cn/vant/cat.jpeg', title: '美团红包', description: '天天神券红包'},
        {imageUrl: 'https://img.yzcdn.cn/vant/cat.jpeg', title: '饿了么红包', description: '外卖补贴红包'},
        {imageUrl: 'https://img.yzcdn.cn/vant/cat.jpeg', title: '免费抽大奖', description: '千元京东E卡'},
        {imageUrl: 'https://img.yzcdn.cn/vant/cat.jpeg', title: '大牌优选', description: '低至3折起'},
        {imageUrl: 'https://img.yzcdn.cn/vant/cat.jpeg', title: '内部福利群', description: '享大牌免单'},
      ],
    };
  },
};
</script>

<style scoped>
/* Your home page styles here */
.home {
  padding: 10px;
  background-color: #f0f0f0;
}

.icon-row {
  margin: 10px 0 10px;
}

.icon-column {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.icon-title {
  text-align: center;
  font-size: 10px;
  font-weight: 700;
  color: #222222;
  margin: 0;
  padding: 0;
}

.icon-description {
  text-align: center;
  font-size: 8px;
  color: #888888;
  margin: 0;
  padding: 0;
}
</style>
