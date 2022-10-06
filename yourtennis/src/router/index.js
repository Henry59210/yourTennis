import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/start'
  },
  {
    path: '/login',
    component: () => import('@/views/login/login')
  },
  {
    path: '/register',
    component: () => import('@/views/login/register')
  },
  {
    path: '/start',
    name: 'Start',
    redirect: '/start/homepage',
    component: Layout,
    children: [
      {
        path: 'homepage',
        component: () => import('@/views/start/HomePage'),
        redirect: '/start/homepage/introduction',
        children: [
          {
            path: 'introduction',
            name: 'Introduction',
            component: () => import('@/components/questions/introductionPage')
          },
          {
            path: 'setName',
            name: 'SetName',
            component: () => import('@/components/questions/setName')
          },
          {
            path: 'chooseHand',
            name: 'ChooseHand',
            component: () => import('@/components/questions/chooseHand')
          },
          {
            path: 'haveCompeted',
            name: 'HaveCompeted',
            component: () => import('@/components/questions/haveCompeted')
          },
          {
            path: 'pasteDoubleLinks',
            name: 'PasteDoubleLinks',
            component: () => import('@/components/questions/pasteDoubleLinks')
          },
          {
            path: 'pasteSingleLink',
            name: 'PasteSingleLink',
            component: () => import('@/components/questions/pasteSingleLink')
          },
          {
            path: 'result',
            name: 'Result',
            component: () => import('@/components/questions/result')
          }
        ]
      }
    ]
  },
  {
    path: '/history',
    name: 'History',
    redirect: '/history/index',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/history/index')
      }
    ]
  },
  {
    path: '/analysisResult',
    component: () => import('@/views/analysisResult/index'),
    redirect: '/analysisResult/serve',
    children: [
      {
        path: 'serve',
        name: 'SERVE',
        component: () => import('@/views/history/components/serve')
      },
      {
        path: 'return',
        name: 'RETURN',
        component: () => import('@/views/history/components/return')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
