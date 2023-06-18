<template>
  <body>
  <h1>The Learning App</h1>
  <p>Welcome to The Learning App, place on the web where knowledge is found! Learning is a CMS-Content Management System. Single-page application where admins can add new content for the user part of the application.The can create courses with short description about the course, the date, the count of lessons and is it still active. Admins can also edit and delete them!</p>
</body>
</template>

<style scoped>
body{
  margin: 203px auto;
    text-align: center;
}
body h1{
  font-size: 56px;
  text-decoration: underline;
}

body p{
  line-height: 27px;
    font-weight: 400;
    letter-spacing: 0.4px;
    margin: 41px;
}

@media only screen and (max-width: 1280px) {
  .border__table {
    overflow-x: auto;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 30px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 30px;
  }
}
</style>