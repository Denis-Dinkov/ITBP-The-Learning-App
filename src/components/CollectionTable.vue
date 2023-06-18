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
        >
          <td> id </td>
          <td> nam</td>
          <td>description </td>
          <td>lessons </td>
          <td>
            <select class="dropdown">
              <option value="active"> state </option>
              <option value="archived">Archived</option>
            </select>
          </td>
          <td> date </td>
          <td></td>
          <td>
           
              <button class="table_btn">Edit</button>
    
            <button class="table_btn">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>



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
</style>
