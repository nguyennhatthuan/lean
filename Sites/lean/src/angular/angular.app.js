import singleSpaAngularJS from 'single-spa-angularjs'
import angular from 'angular'
import './app.module.js'
import './routes.js'

const domElementGetter = () => document.getElementById('angular')

const angularLifecycles = singleSpaAngularJS({
  angular,
  domElementGetter,
  mainAngularModule: 'angular-app',
  uiRouter: true,
  preserveGlobal: false
})

const bootstrap = [angularLifecycles.bootstrap]
const mount = [angularLifecycles.mount]
const unmount = [angularLifecycles.unmount]

export { bootstrap, mount, unmount }
