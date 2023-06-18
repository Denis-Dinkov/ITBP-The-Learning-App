 import { createRouter, createWebHistory } from "vue-router";
 import HomeView from '../Views/HomeView.vue'
 import LearningView from '../Views/LearningView.vue'
 import EditView from '../Views/EditView.vue'
 const router =  createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/learning',
      name: 'learning',
      component:LearningView
    },
    {
      path: "/edit/:id",
      name: "edit",
      component: EditView,
    }
  ]
 });



 export default router;