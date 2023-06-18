<template>
  <div class="header">
    <span>Welcome!</span>
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
  font-weight: bold;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #CEE5;
  top: 0;
  z-index: 100;
}
.header > span {
  padding: 25px;
  font-size: 31px;
  color: black;
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
