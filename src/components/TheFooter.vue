<template>
  <footer class="footer__container">
    <nav class="footer__links">
      <router-link to="/">Home</router-link>
      <router-link to="/learning">Learning</router-link>
    </nav>
  </footer>
</template>

<script>
export default {
  name: "TheFooter",
};
</script>

<style>
nav {
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 12px 264px;
  padding: 25px 24px;
}

.footer__links > a {
  margin: 1px 20px;
  text-decoration: none;
  border-radius: 20px;
  padding: 0.75rem 1.5rem;
  color: #101522;
  cursor: pointer;
}
.footer__links > :hover {
  background-color: #101522;
  border-color: #101522;
  color: white;
}

nav a.router-link-exact-active {
  background-color: #101522;
  border-color: #101522;
  color: white;
  position: relative; /* Add this line */
  z-index: 2; 
}
.footer__container {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 10px 0px 10px;
  width: 100%;
}
</style>
