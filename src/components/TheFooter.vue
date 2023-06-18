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
  padding: 1rem;
}

.footer__links > a {
  font-weight: bold;
  color: #f1faf5;
  text-decoration: none;
  padding: 0.5rem;
}

.footer__links > a:hover {
  color: #459fec;
}

nav a.router-link-exact-active {
  color: #459fec;
}

.footer__container {
  background-color: #101522;
  padding: 1rem;
}

@media screen and (max-width: 1024) {
  /* Styles for screens smaller than 768px */
  .footer__links {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
