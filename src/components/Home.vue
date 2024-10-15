<template>
  <div class="homepage">
    <!-- IE Bank Logo (optional, add if you have one) -->
  
    <!-- Welcome Text -->
    <h1>Welcome to IE Bank</h1>
    <p>Secure and Trusted Banking Solutions</p>
    
    <!-- View Accounts Button -->
    <button @click="viewAccounts">View Accounts</button>
  </div>
</template>

<script>
export default {
  methods: {
    viewAccounts() {
      // Logic to navigate to the accounts page or handle the button click
      this.$router.push('/accounts');
    }
  }
};
</script>

<style scoped>
.homepage {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: #f7f8fa; /* Slightly lighter background */
  padding: 20px;
}

h1 {
  color: #003366; /* Deep blue color for heading */
  font-size: 3rem;
  margin-bottom: 20px;
  font-weight: bold;
}

p {
  font-size: 1.4rem;
  color: #333; /* Darker color for text */
  margin-bottom: 40px;
}

button {
  padding: 12px 25px;
  background-color: #00509e; /* Darker blue background for button */
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1.3rem;
  cursor: pointer;
  transition: background-color 0.3s ease; /* Smooth transition */
}

button:hover {
  background-color: #0066cc; /* Slightly lighter blue on hover */
}
</style>
