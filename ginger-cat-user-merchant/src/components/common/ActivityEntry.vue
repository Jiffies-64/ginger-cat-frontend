<template>
  <div class="activity-entry">
    <!-- Your activity entry content here -->
    <div v-for="(activity, index) in activities" :key="index">
      <img :src="activity.icon" alt="Activity Icon">
      <span>{{ activity.text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activities: [
        { icon: require('@/assets/001.jpg'), text: 'Activity 1' },
        { icon: require('@/assets/001.jpg'), text: 'Activity 2' },
        // Add more activities as needed
      ],
    };
  }
};
</script>

<style scoped>
/* Your component styles here */
.activity-entry {
  display: flex;
  justify-content: space-around;
  div {
    text-align: center;
  }
  img {
    width: 50px;
    height: 50px;
  }
}
</style>
