import Vue from 'vue'
import App from './App.vue'
import directive from './components/main'

const vuePlugin = {
  install(Vue) {
    Vue.directive('outside-click', directive)
  },
  directive,
}

Vue.config.productionTip = false

Vue.use(vuePlugin)

new Vue({
  render: (h) => h(App),
}).$mount('#app')
