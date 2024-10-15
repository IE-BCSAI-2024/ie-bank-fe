<template>
    <div class="home-page">
      <h1>Welcome to IE Bank</h1>
      <button @click="goToAccounts">View Accounts</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Home',
    methods: {
      goToAccounts() {
        this.$router.push('/accounts');
      }
    }
  };
  </script>
  
  <style scoped>
  .home-page {
    text-align: center;
    margin-top: 50px;
  }
  
  button {
    background-color: #007BFF;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>