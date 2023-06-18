<template>
  <div class="add__courseLink">
    <router-link to="/add-course">Add course</router-link>
  </div>
</template>

<script>
export default {
  name: "AddBtn",
};
</script>

<style>
.add__courseLink {
  margin: 40px;
}
.add__courseLink > a {
  text-decoration: none;
  background: #101522;
  color: #f1faf5;
  padding: 15px;
  border-radius: 25px;
}
.add__courseLink > a:hover {
  color: #459fec;
}
</style>
