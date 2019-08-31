import React from 'react'
import { navigateToUrl } from 'single-spa'

const Pages = [
  {
    name: 'React',
    href: '/react'
  },
  {
    name: 'Vue',
    href: '/vue'
  },
  {
    name: 'Angular',
    href: '/angular'
  }
]

const NavigationBar = () => (
  <nav>
    <div className="nav-wrapper">
      <a href="/" onClick={navigateToUrl} className="brand-logo">
        Ngồi code đỡ buồn
      </a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        {Pages.map((value) => (
          <Page {...value} />
        ))}
      </ul>
    </div>
  </nav>
)

const Page = props => (
  <li>
    <a href={props.href} onClick={navigateToUrl}>
      {props.name}
    </a>
  </li>
)

export default NavigationBar
