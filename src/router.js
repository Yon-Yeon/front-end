import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/auth',
      meta: { requiresAuth: false },
      component: () => import("@/pages/auth/transition-handle.vue"),
      children: [
        { path: 'home', name: 'auth-home', component: () => import("@/pages/auth/home/PageCore.vue") },
        { path: 'signup', name: 'auth-signup', component: () => import("@/pages/auth/signup/transition-handle.vue") },
        
      ]
    },
    {
      path: '/app',
      meta: { requiresAuth: false },
      component: () => import("@/pages/app/transition-handle.vue"),
      children: [
        { path: 'home', name: 'app-home', component: () => import("@/pages/app/pages/home/PageCore.vue") }, 
        { path: 'myproject', name: 'app-myproject', component: () => import("@/pages/app/pages/myproject/PageCore.vue") }, 
        { path: 'createproject', name: 'app-createproject', component: () => import("@/pages/app/pages/create/PageCore.vue") }, 
        
      ]
    },
  ]
});

export default router;
