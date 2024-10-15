<template>
  <div class="homepage">
    <div class="header">
      <h1>Welcome to IE Bank</h1>
      <p>Your trusted partner for financial success.</p>
    </div>
    <div class="links">
      <router-link to="/accounts" class="link-button">View Accounts</router-link>
      <router-link to="/skull" class="link-button">Learn More</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style scoped>
.homepage {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  min-height: 100vh;
  padding: 20px;
  background-color: #f5f7fa;
}

.header {
  text-align: center;
}

h1 {
  font-size: 64px;
  background: linear-gradient(to right, #0648d7, #2ea901);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

p {
  font-size: 18px;
  color: #333;
}

.links {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}

.link-button {
  padding: 10px 20px;
  background-color: #0648d7;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.link-button:hover {
  background-color: #2ea901;
}
</style>
