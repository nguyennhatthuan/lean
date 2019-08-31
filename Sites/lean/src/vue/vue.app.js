import Vue from 'vue'
import singleSpaVue from 'single-spa-vue'
import Main from './main.vue'

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    el: '#vue',
    render: r => r(Main)
  }
})

const bootstrap = [vueLifecycles.bootstrap]
const mount = [vueLifecycles.mount]
const unmount = [vueLifecycles.unmount]

export { bootstrap, mount, unmount }
