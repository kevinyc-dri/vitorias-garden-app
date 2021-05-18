import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav>
      <div class="nav-wrapper">
        <Link href="/" class="brand-logo">Vitorias Garden</Link>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/order">Orders</Link></li>
          <li><Link to="/users">Users</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav