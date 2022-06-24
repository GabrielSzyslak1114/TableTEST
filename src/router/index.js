import { createRouter, createWebHistory } from 'vue-router'


const routes = [
    {
        path: '/',
        name: 'Home',
        component: ()=> import(/* webpackChunkName: "about" */ '../views/Home.vue')
      },
      {
        path: '/page/:id',
        name: 'Page',
        props: true,
        component: ()=> import(/* webpackChunkName: "about" */ '../views/Page.vue')
      },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  
  export default router
  