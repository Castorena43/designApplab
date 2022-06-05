import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddView from '../views/AddView.vue'
import DetailView from '../views/DetailView.vue'
// import AdminList from '@/components/admin/AdminList.vue'
// import AddAdmin from '@/components/admin/AddAdmin.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/add',
    name: 'add',
    component: AddView
  },
  {
    path: '/detail',
    name: 'detail',
    component: DetailView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
