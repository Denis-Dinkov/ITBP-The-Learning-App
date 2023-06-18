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
  padding: 48px 24px;
}

.footer__links > a {
  font-weight: bold;
  color: #f1faf5;
  text-decoration: none;
  padding: 10px;
}
.footer__links > :hover {
  color: #459fec;
}

nav a.router-link-exact-active {
  color: #459fec;
}
.footer__container {
  background-color: #101522;
  padding: 10px 10px 0px 10px;
  margin-top: auto;
}
</style>
