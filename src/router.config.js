import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";

const routes = [
  {
    path: '/',
    component: () => import('./components/home.vue')
  },
  {
    path: '/thanks',
    component: () => import('./components/thanks.vue')
  },
  {
    path: '/pingpong',
    component: () => import('./components/pingpong.vue')
  },
  {
    path: '/moon',
    component: () => import('./components/moon.vue')
  },
  {
    path: '/ice',
    component: () => import('./components/iceCream.vue')
  },
  {
    path: '/newton',
    component: () => import('./components/newton.vue')
  },

]


const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})

export default router;