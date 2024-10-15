<template>
    <div class="home">
      <div class="jumbotron vertical-center">
        <div class="container">
          <h1>Welcome to IE Bank</h1>
          <p class="lead">
            Manage the accounts of your clients with ease.
          </p>
          <hr class="my-4" />
          <p>
            For help contact bank@ie.com
          </p>
          <router-link to="/accounts">
            <button class="btn btn-primary btn-lg">Manage Accounts</button>
          </router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Home",
  };
  </script>
  
  <style scoped>
  .home {
    text-align: center;
    padding: 50px;
  }
  
  .jumbotron {
    background-color: #f8f9fa;
    padding: 60px;
  }
  
  .lead {
    font-size: 1.25rem;
    font-weight: 300;
  }
  </style>