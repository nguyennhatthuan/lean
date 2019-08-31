import React from 'react'
import ReactDOM from 'react-dom'
import singleSpaReact from 'single-spa-react'
import Home from './root.component.js'

const domElementGetter = () => document.getElementById('react')

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Home,
  domElementGetter
})

const bootstrap = [reactLifecycles.bootstrap]
const mount = [reactLifecycles.mount]
const unmount = [reactLifecycles.unmount]

export { bootstrap, mount, unmount }
