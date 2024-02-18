<template>
  <div class="search-box">
    <!-- Your search box content here -->
    <input type="text" placeholder="Search...">
    <button @click="search">Search</button>
  </div>
</template>

<script>
export default {
  methods: {
    search() {
      // Your search logic here
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
