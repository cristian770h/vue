
import { createRouter, createWebHistory } from 'vue-router'



  const routes= [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta:{menu: true,title:'Home'}
    },
    {
      path: '/notes',
      name: 'notes',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/NotesView.vue'),
      meta:{menu:true,title:'Notas'},
      
    },
    {
      path: '/noteEdit/:id',
      name: 'Edit',
      component: () => import('../views/EditView.vue'),
      meta: { menu: false },
      props: true,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/:pathMatch(.*)',
      name: 'Not found',
      component: () => import('../views/404View.vue'),
    },
  ]

  const router= createRouter({
    history: createWebHistory(),
    routes
  })
export default router
