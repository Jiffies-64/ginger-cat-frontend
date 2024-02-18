<template>
  <div class="goods-filter">
    <!-- First row: Multiple-choice buttons -->
    <div class="filter-row">
      <div class="filter-option" :class="{ active: selectedCategory === 'all' }" @click="selectCategory('all')">全城霸王餐</div>
      <div class="filter-option" :class="{ active: selectedCategory === 'eleme' }" @click="selectCategory('eleme')">饿了么专享</div>
      <div class="filter-option" :class="{ active: selectedCategory === 'brand' }" @click="selectCategory('brand')">大牌专享</div>
      <div class="filter-option" :class="{ active: selectedCategory === 'rebate' }" @click="selectCategory('rebate')">返利餐</div>
    </div>

    <!-- Second row: Dropdown and toggle buttons -->
    <div class="filter-row">
      <van-dropdown-menu>
        <van-dropdown-item v-model="selectedTime" title="筛选" @click="selectTime">
          <div class="dropdown-options">
            <div class="time-options">
              用餐时段
              <van-cell v-model="selectedTime" :title="timeOption.title" v-for="timeOption in timeOptions" :key="timeOption.value" @click="selectTimeOption(timeOption.value)">
                {{ timeOption.title }}
              </van-cell>
            </div>
            <div class="platform-options">
              平台
              <van-cell v-model="selectedPlatform" :title="platformOption.title" v-for="platformOption in platformOptions" :key="platformOption.value" @click="selectPlatformOption(platformOption.value)">
                {{ platformOption.title }}
              </van-cell>
            </div>
          </div>
        </van-dropdown-item>
      </van-dropdown-menu>

      <div class="filter-option" :class="{ active: highRebate }" @click="toggleHighRebate">高返利</div>
      <div class="filter-option" :class="{ active: noReview }" @click="toggleNoReview">无需评价</div>

      <div class="filter-option">
        <van-switch v-model="onlyAvailable" size="24" active-color="#1989fa">只看可抢</van-switch>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedCategory: 'all',
      selectedTime: 'all',
      selectedPlatform: 'all',
      highRebate: false,
      noReview: false,
      onlyAvailable: false,
      timeOptions: [
        { value: 'all', title: '全部' },
        { value: 'breakfast', title: '早餐' },
        { value: 'lunch', title: '中餐' },
        { value: 'dinner', title: '晚餐' },
      ],
      platformOptions: [
        { value: 'all', title: '全部' },
        { value: 'mt', title: '美团' },
        { value: 'elm', title: '饿了么' },
      ],
    };
  },
  methods: {
    selectCategory(category) {
      this.selectedCategory = category;
      // Add logic for category selection if needed
    },
    selectTime() {
      // Add logic for time selection if needed
    },
    selectTimeOption(value) {
      this.selectedTime = value;
      // Add logic for time option selection if needed
    },
    selectPlatformOption(value) {
      this.selectedPlatform = value;
      // Add logic for platform option selection if needed
    },
    toggleHighRebate() {
      this.highRebate = !this.highRebate;
    },
    toggleNoReview() {
      this.noReview = !this.noReview;
    },
  },
};
</script>

<style scoped>
/* Your component styles here */
.goods-filter {
  /* Styles for goods filter */
}

.filter-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.filter-option {
  padding: 10px;
  border: 1px solid #ddd;
  cursor: pointer;
}

.filter-option.active {
  background-color: #1989fa;
  color: #fff;
}

/* Add more styles as needed */

.dropdown-options {
  display: flex;
  flex-direction: column;
}

.time-options,
.platform-options {
  display: flex;
  flex-wrap: wrap;
}

.van-cell {
  margin-right: 10px;
  margin-bottom: 10px;
}

/* Adjust styles as needed */
</style>
