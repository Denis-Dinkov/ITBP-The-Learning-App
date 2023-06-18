 import { createRouter, createWebHistory } from "vue-router";
 import HomeView from '../Views/HomeView.vue'
 import LearningView from '../Views/LearningView.vue'
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
    }
  ]
 });



 export default router;