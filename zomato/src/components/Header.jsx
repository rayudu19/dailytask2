import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="logo">Zomato</div>
      <nav>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#restaurants">Restaurants</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
