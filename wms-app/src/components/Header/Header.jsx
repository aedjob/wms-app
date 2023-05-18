import React from "react";
import './Header.css'

const Header = () => {
    return (
      <header>
        <div className="logo">WMS App</div>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/inventory">Inventory</a>
            </li>
            <li>
              <a href="/orders">Orders</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  };

  export default Header