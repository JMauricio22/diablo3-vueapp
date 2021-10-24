import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routerOptions = [
  { path: '/', name: 'Home' },
  { path: '/region/:region/profile/:battleTag', name: 'Profile' },
  { path: '/region/:region/profile/:battleTag/hero/:heroId', name: 'Hero' },
  {
    path: '/region/:region/profile/:battleTag/hero/:heroId/item/:name',
    name: 'Item'
  },
  { path: '/about', name: 'About' },
  { path: '/error', name: 'Error' },
  { path: '*', redirect: { name: 'Home' } }
]

const routes = routerOptions.map(r => {
  return {
    ...r,
    component: () =>
      import(/* webpackChunkName:"[request]" */ `@/views/${r.name}/Index.vue`)
  }
})

const router = new VueRouter({
  routes,
  scrollBehavior () {
    return {
      x: 0,
      y: 0
    }
  }
})

export default router
