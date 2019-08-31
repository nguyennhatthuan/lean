import React from 'react'
import ReactDOM from 'react-dom'
import singleSpaReact from 'single-spa-react'
import NavigationBar from './root.component.js'

const domElementGetter = () => document.getElementById('navigation')

const navigationBarLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: NavigationBar,
  domElementGetter
})

const bootstrap = [navigationBarLifecycles.bootstrap]
const mount = [navigationBarLifecycles.mount]
const unmount = [navigationBarLifecycles.unmount]

export { bootstrap, mount, unmount }
