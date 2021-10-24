import React from 'react';

const Header = () => {
  return (
    <div>
    <ul class="nav">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="/">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/about">About</a>
      </li>
    </ul>
    </div>
  )
}
export default Header;