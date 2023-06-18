<template>
  <div class="edit__form__container">
    <form class="form__edit" @submit.prevent="update">
      <h3>Edit course</h3>
      <div class="form-group">
        <label>Name</label>
        <input v-model="form.name" class="form-control" required />
      </div>

      <div class="form-group mt-3">
        <label>Lessons</label>
        <input
          v-model="form.lessons"
          class="form-control"
          type="number"
          min="1"
          required
        />
      </div>

      <div class="form-group mt-3">
        <label>Description</label>
        <input v-model="form.description" class="form-control" />
      </div>

      <div class="form-group mt-3">
        <label>Date</label>
        <input v-model="form.date" class="form-control" type="date" required />
      </div>

      <div class="imageLabel">
        <label>Image</label>
        <input v-model="form.img" class="form-control" />
      </div>
      <button type="submit" class="edit__btn">Update</button>
    </form>
  </div>
</template>

<script>
import { reactive, computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getCourse, updateCourse } from "@/firebase";

export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    const courseId = computed(() => route.params.id);

    const form = reactive({
      name: "",
      lessons: "",
      description: "",
      date: "",
      img: "",
    });
    onMounted(async () => {
      const course = await getCourse(courseId.value);
      form.name = course.name;
      form.lessons = course.lessons;
      form.description = course.description;
      form.date = course.date;
      form.img = course.img
    });

    const update = async () => {
      await updateCourse(courseId.value, { ...form });
      router.push("/learning");
      form.name = "";
      form.lessons = "";
      form.description = "";
      form.date = "";
      form.img = "";
    };

    return { form, update };
  },
};
</script>

<style scoped>
.edit__form__container {
  color: black;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.form-group {
  margin: 10px;
}
.form__edit {
  background-color: #f1faf5;
  width: 400px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  text-align: center;
  border: none;
  padding: 20px;
  border-radius: 20px;
  margin: 20px 0px;
}
.edit__btn {
  margin: 28px 0px;
  text-decoration: none;
  background: #101522;
  color: #f1faf5;
  padding: 10px;
  border-radius: 25px;
}
.edit__btn:hover {
  color: #459fec;
}
</style>
