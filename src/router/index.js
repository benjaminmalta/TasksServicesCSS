import { createRouter, createWebHashHistory } from 'vue-router'
import TaskList from '../views/TaskList.vue'
import TaskDetails from '../components/TaskDetails.vue'

const routes = [
  {
    path: '/',
    name: 'TaskList',
    component: TaskList,
    props: route => ({ page: parseInt(route.query.page) || 1 })
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/tasks/:id',
    name: 'TaskDetails',
    props: true,
    component: TaskDetails
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
