import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import MainView from '../views/MainView.vue'
import ProfileView from '../views/ProfileView.vue'
import ForoView from '../views/ForoView.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path:'/main',
    name:'main',
    component:MainView
  },
  {
    path:'/profile',
    name:'profile',
    component:ProfileView
  },
  {
    path:'/foro/:id',
    name:'foro',
    component:ForoView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
