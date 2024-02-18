<template>
  <div class="header">
    <Logo />
    <LocationSwitch />
  </div>
</template>

<script>
import Logo from "@/components/home/Logo.vue";
import LocationSwitch from "@/components/home/LocationSwitch.vue";

export default {
  components: {
    Logo,
    LocationSwitch,
  },
};
</script>

<style scoped>
/* Your component styles here */
.header {
  /* Add styles for the header component if needed */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  background-color: #fff; /* Adjust the background color as needed */
  border-bottom: 1px solid #ddd; /* Add border if needed */
}
</style>
