<template>
  <van-search
      v-model="value"
      placeholder="找寻好店，享好餐~"
      :show-action="showAction"
      reverse-color
      @search="onSearch"
      @cancel="onCancel"
      @focus="onFocus"
  />
</template>

<script>
export default {
  name: 'SearchVue',
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
</style>
