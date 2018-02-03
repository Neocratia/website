export default function ({ isHMR, app, store, route, params, error, redirect, req }) {
  // If middleware is called from hot module replacement, ignore it
  if (isHMR) return
  let locale = ''

  if (!params.lang && params.lang !== 'en' && req) {
    locale = req.headers['accept-language'].substring(0, 2)
  } else{
    locale = params.lang || 'en'
  }
  if (store.state.locales.indexOf(locale) === -1) {
    return error({ message: 'This page could not be found.', statusCode: 404 })
  }

  // Set locale
  store.commit('SET_LANG', locale)
  app.i18n.locale = store.state.locale
  // If route is /en/... -> redirect to /...
  if (locale === 'en' && route.fullPath.indexOf('/en') === 0) {
    return redirect(route.fullPath.replace(/^\/en/, '/'))
  }
}
