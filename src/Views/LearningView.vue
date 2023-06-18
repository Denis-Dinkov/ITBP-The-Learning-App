<template>
  <div>
    <h1>Course Collection</h1>
    <CollectionTable></CollectionTable>
    <TheFooter></TheFooter>
  </div>
</template>

<script>
  import TheFooter from '../components/TheFooter.vue';
  import CollectionTable from '../components/CollectionTable.vue'
export default{
  components: {
    TheFooter,
    CollectionTable,
  }
}</script>
