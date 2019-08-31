import { registerApplication, start } from 'single-spa'

registerApplication('navigation', () => import('./src/navigation/navigation.app.js'), () => true)

registerApplication('vue', () => import('./src/vue/vue.app.js'), location => location.pathname.startsWith('/vue'))

registerApplication(
  'react',
  () => import('./src/react/react.app.js'),
  location => location.pathname === '' || location.pathname === '/' || location.pathname.startsWith('/react')
)

registerApplication(
  'angular',
  () => import('./src/angular/angular.app.js'),
  location => location.pathname.startsWith('/angular')
)

start()
