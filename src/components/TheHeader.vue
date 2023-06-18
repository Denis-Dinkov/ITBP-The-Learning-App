<template>
  <div class="header">
    <span>Welcome student!</span>
    <img src="../Assets/student.png" />
  </div>
</template>

<script>
export default {
  name: "TheHeader",
};
</script>

<style>
.header {
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2F5760;
  top: 0;
  z-index: 100;
}
.header > span {
  padding: 25px;
  color: #459fec;
  font-size: 25px;
}
.header > span:hover {
  color: #f1faf5;
}
.header > img {
  width: 65px;
  object-fit: contain;
  margin: 20px 20px;
  margin-top: 18px;
  opacity: 1;
}
.header > img:hover {
  opacity: 0.5;
}
</style>
