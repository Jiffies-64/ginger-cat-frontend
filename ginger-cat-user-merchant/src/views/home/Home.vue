<template>
  <div class="home">
    <Header />
    <SearchBox />
    <Banner />
    <ActivityEntry />
    <ActivityDisplay />
    <Goods />
    <!-- Add other components as needed -->
  </div>
</template>

<script>
import SearchBox from '@/components/common/SearchBox.vue';
import Banner from '@/components/common/Banner.vue';
import ActivityEntry from '@/components/common/ActivityEntry.vue';
import ActivityDisplay from '@/components/common/ActivityDisplay.vue';
import Header from "@/views/home/header/Header.vue";
import Goods from "@/views/home/goods/Goods.vue";

export default {
  components: {
    Header,
    SearchBox,
    Banner,
    ActivityEntry,
    ActivityDisplay,
    Goods
    // Add other components as needed
  },
};
</script>

<style scoped>
/* Your home page styles here */
.home {
  padding: 20px;
}
</style>
