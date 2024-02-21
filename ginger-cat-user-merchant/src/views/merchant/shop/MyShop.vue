<template>
  <div style="margin-top: 20px">
    <van-nav-bar title="我的店铺" left-arrow @click-left="goBack"></van-nav-bar>

    <van-tabs v-model="activeName">
      <van-tab name="a" title="全部店铺"/>
      <van-tab name="b" title="审核中"/>
      <van-tab name="c" title="审核通过"/>
      <van-tab name="d" title="审核失败"/>
    </van-tabs>

    <div class="shop-list-wrapper">
      <!-- 将 shops 传递给子组件 ShopList -->
      <ShopList :shops="shops"/>
    </div>

    <router-link to="/merchant/add-shop-base">
      <van-tabbar active-color="#fa8a19">
        <van-tabbar-item icon="wap-home-o" badge="+">新增店铺</van-tabbar-item>
      </van-tabbar>
    </router-link>
  </div>
</template>

<script>
import ShopList from "@/components/shop/ShopList.vue";
import {getShopBaseBriefInfo} from "@/api/content";

export default {
  name: 'MyShop',
  components: {ShopList},
  data() {
    return {
      value: '',
      activeName: 'a',
      showAction: false,
      shops: []
    };
  },
  methods: {
    onSearch() {
      this.$toast(this.value);
    },
    onFocus() {
      this.showAction = true;
    },
    onCancel() {
      this.showAction = false;
    },
    goBack() {
      this.$router.go(-1);
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
/* Your component styles here */
.search-box {
  display: flex;
  align-items: center;

  input {
    flex: 1;
    margin-right: 10px;
  }

  button {
    padding: 5px 10px;
  }
}

.shop-list-wrapper {
  padding: 10px;
  height: 100vh;
  background-color: #f0f0f0;
}


</style>
