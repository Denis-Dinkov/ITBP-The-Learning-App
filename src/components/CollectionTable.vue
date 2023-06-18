<template>
  <div class="border__table">
    <table class="table table-dark">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Course name</th>
          <th scope="col">Description</th>
          <th scope="col">Lessons</th>
          <th scope="col">State</th>
          <th scope="col">Date added</th>
          <th scope="col">Image</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="{
            id,
            name,
            lessons,
            description,
            date,
            image,
            state,
          } in courses"
          :key="id"
        >
          <td>{{ id }}</td>
          <td>{{ name }}</td>
          <td>{{ description }}</td>
          <td>{{ lessons }}</td>
          <td>
            <select class="dropdown">
              <option value="active">{{ state }}</option>
              <option value="archived">Archived</option>
            </select>
          </td>
          <td>{{ date }}</td>
          <td><img v-bind:src="image" /></td>
          <td>
            <router-link :to="`/edit/${id}`">
              <button class="table_btn">Edit</button>
            </router-link>
            <button class="table_btn" @click="deleteCourse(id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { useLoadCourses, deleteCourse } from "@/firebase";

export default {
  setup() {
    const courses = useLoadCourses();
    return { courses, deleteCourse };
  },
};
</script>

<style>
.border__table {
  margin: 25px;
}
td > img {
  width: 55px;
  object-fit: contain;
}
.table_btn {
  text-decoration: none;
  background: #101522;
  color: #f1faf5;
  padding: 10px;
  border-radius: 25px;
  margin: 3px;
}
.table_btn:hover {
  color: #459fec;
}
.dropdown {
  border-radius: 10px;
}
.dropdown:hover {
  cursor: pointer;
}

@media only screen and (max-width: 1024px) {
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
