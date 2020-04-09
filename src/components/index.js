import directive from './main'

const vuePlugin = {
  install(Vue) {
    Vue.directive('outside-click', directive)
  },
  directive,
}

export default vuePlugin
