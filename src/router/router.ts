import { createRouter, createWebHistory, RouteRecordRaw, RouteLocationNormalized, NavigationGuardNext } from 'vue-router' 

import store from '@/store/store'
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

router.beforeResolve(async (to, from) => {
  //console.log('from ', from);
  //console.log('to ', to);
   //ask for microphone:
 /*   if(to.meta.requiresMic){
     try {
       await navigator.mediaDevices.getUserMedia({ audio: true })
     }
     catch (err) {
       alert('Cannot proceed without allowing access to mic. Enable access and reload the page')
       return false
   
     }
   } */
});

export default router;
