import Vue from 'vue'
import VueMq from 'vue-mq'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import App from './App.vue'
import router from './router'
import store from './store'
import LoadScript from 'vue-plugin-load-script';
import VueResizeText from 'vue-resize-text';

Vue.config.productionTip = false
 
Vue.use(LoadScript);

Vue.use(VueResizeText);

Vue.use(VueMq, {
  breakpoints: {
    mobile: 1000,
    desktop: Infinity,
  }
})

const requireComponent = require.context(
  './components',
  false,
  /Base[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)

  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1'))
  )

  Vue.component(componentName, componentConfig.default || componentConfig)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
