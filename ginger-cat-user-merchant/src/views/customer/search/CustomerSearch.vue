<template>
  <div>
    <van-nav-bar title="" left-arrow @click-left="goBack">
      <van-icon name="search" slot="right" @click="onSearch"/>
    </van-nav-bar>

    <van-search
        v-model="value"
        placeholder="找寻好店，享好餐~"
        :show-action="showAction"
        reverse-color
        @search="onSearch"
        @cancel="onCancel"
        @focus="onFocus"
    />
    <div class="goods-list-wrapper">
      <GoodsList/>
    </div>
  </div>
</template>

<script>
import GoodsList from "@/components/goods/GoodsList.vue";

export default {
  name: 'CustomerSearch',
  components: {GoodsList},
  data() {
    return {
      value: '',
      showAction: false
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
    }
  }
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

.goods-list-wrapper {
  padding: 10px;
  height: 100vh;
  background-color: #f0f0f0;
}
</style>
