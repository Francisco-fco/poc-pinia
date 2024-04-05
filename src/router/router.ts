import { createRouter, createWebHistory, RouteRecordRaw, RouteLocationNormalized, NavigationGuardNext } from 'vue-router' 

import { computed } from 'vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../components/HelloWorld.vue'),
    meta: {
      title: computed(() => "Home"),
      breadcrumbs: []
    }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach(async (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
  next();
});

export default router;
