export const state = () => ({
  sidebar: false,
  locales: ['en', 'es'],
  locale: 'en'
})

export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  },
  toggleSidebar (state) {
    state.sidebar = !state.sidebar
  }
}
