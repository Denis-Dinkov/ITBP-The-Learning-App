<template>
  <div class="form__container">
    <form class="form__create" @submit.prevent="onSubmit">
      <div>
        <label>Course name</label>
        <input
          v-model="form.name"
          class="form-control"
          placeholder="Type the name of the course"
          required
        />
      </div>

      <div class="form-group mt-3">
        <label>Lessons</label>
        <input
          v-model="form.lessons"
          class="form-control"
          placeholder="Type the count of lessons. Must be a number!"
          type="number"
          min="1"
          required
        />
      </div>

      <div class="form-group mt-3">
        <label>Description</label>
        <input
          v-model="form.description"
          class="form-control"
          placeholder="Type description of the course"
        />
      </div>

      <div class="form-group mt-3">
        <label>Date</label>
        <input v-model="form.date" class="form-control" type="date" required />
      </div>

      <div class="form-group mt-3">
        <label>Image</label>
        <input
          v-model="form.img"
          class="form-control"
          placeholder="Copy image url from the Internet"
        />
      </div>

      <button type="submit" class="create__btn">Create Course</button>
    </form>
  </div>
</template>

<script>
import { createCourse } from "@/firebase";
import { reactive } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    const form = reactive({
      name: "",
      description: "",
      lessons: "",
      date: "",
      img: "",
      state: "Active",
    });

    const onSubmit = async () => {
      await createCourse({ ...form });
      router.push("/learning");
      form.name = "";
      form.description = "";
      form.lessons = "";
      form.date = "";
      form.img = "";
    };

    return { form, onSubmit };
  },
};
</script>

<style scoped>
.form__container {
  color:black;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
}
.form__create {
  background-color: #f1faf5;
  width: 400px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  text-align: center;
  border: none;
  padding: 20px;
  border-radius: 20px;
}
.create__btn {
  text-decoration: none;
  margin: 28px 0px;
  background: #101522;
  color: #f1faf5;
  padding: 10px;
  border-radius: 25px;
}
.create__btn:hover {
  color: #459fec;
}
</style>
