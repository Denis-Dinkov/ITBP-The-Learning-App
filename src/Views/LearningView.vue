<template>
  <div>
    <TheHeader></TheHeader>
    <CollectionTable></CollectionTable>
    <TheFooter></TheFooter>
  </div>
</template>

<script>
  import TheHeader from '../components/TheHeader.vue'
  import TheFooter from '../components/TheFooter.vue';
  import CollectionTable from '../components/CollectionTable.vue'
export default{
  components: {
    TheFooter,
    CollectionTable,
    TheHeader,
  }
}</script>
