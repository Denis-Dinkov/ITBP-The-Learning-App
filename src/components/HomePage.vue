<template>
  <div class="learning__info">
    <h1>The Learning App</h1>
    <p>
      Welcome to The Learning App, place on the web where knowledge is found!
      Learning is a CMS-Content Management System. Single-page application where
      admins can add new content for the user part of the application.The can
      create courses with short description about the course, the date, the
      count of lessons and is it still active. Admins can also edit and delete
      them!
    </p>
  </div>
</template>

<script>

</script>

<style scoped>
.learning__info {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.learning__info > h1 {
  text-decoration: underline;
  font-size: 65px;
  letter-spacing: 1.4px;
  margin: 50px;
}
.learning__info > p {
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin: 30px;
}
</style>
