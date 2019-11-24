import { SessionStorage } from 'quasar'

export default async ({ router }) => {
  router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      let token = SessionStorage.getItem('token')
      if (!token) {
        next('/auth/login')
      } else {
        next('/')
      }
    } else {
      next()
    }
  })
  return router
}
