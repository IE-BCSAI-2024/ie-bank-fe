<template>
  <div class="homepage">
      <h1>Welcome to the IE Bank!</h1>
      <p>The best bank in the world.</p>
      <div class="links">
          <router-link to="/accounts" class="link-button">Accounts</router-link>
          <router-link to="/skull" class="link-button">Skull</router-link>
      </div>
  </div>
</template>

<script>
export default {
    name: "HomePage",
}
</script>
<style scoped>
.homepage {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
}
h1 {
    font-size: 72px;
    background: -webkit-linear-gradient(right, #0648d7, #2ea901);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent; /* Fallback for non-webkit browsers */
}
p {
    color: #0e0630;
}
.links {
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 0 20px;
}
</style>