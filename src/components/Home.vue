<template>
  <div>
    <h1>Welcome to IE Bank</h1>
    <button @click="goToAccounts">Go to Accounts</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToAccounts() {
      this.$router.push('/accounts');
    }
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>
