import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

const requireComponent = require.context(
  './components',
  true,
  /VE[A-Z]\w+\.vue$/
)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)
  const componentName = fileName
    .split('/')
    .pop()
    .replace(/\.\w+$/, '')
  Vue.component(componentName, componentConfig.default || componentConfig)
})

new Vue({
  render: function (h) {
    return h(App)
  }
}).$mount('#app')
