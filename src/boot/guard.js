export default async ({ router, store }) => {
  router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      if (store.getters['getToken']) {
        next()
      } else {
        next('/auth/login')
      }
    } else {
      next()
    }
  })
  return router
}
