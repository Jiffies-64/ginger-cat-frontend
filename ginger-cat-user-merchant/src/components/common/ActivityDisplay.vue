<template>
  <div class="activity-display">
    <!-- Your activity display content here -->
    <div v-for="(activity, index) in activities" :key="index">
      <img :src="activity.image" alt="Activity Image">
      <h3>{{ activity.title }}</h3>
      <p>{{ activity.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activities: [
        { image: '/path/to/activity1.jpg', title: 'Activity 1', description: 'Description for Activity 1' },
        { image: '/path/to/activity2.jpg', title: 'Activity 2', description: 'Description for Activity 2' },
        // Add more activities as needed
      ],
    };
  }
};
</script>

<style scoped>
/* Your component styles here */
.activity-display {
  div {
    margin-bottom: 20px;
    text-align: center;
  }
  img {
    width: 100%;
    max-height: 150px;
  }
}
</style>
