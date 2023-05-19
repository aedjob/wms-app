import React from "react";
import './Header.css'

const Header = () => {
    return (
      <header className="header-header">
        <div className="logo">WMS App</div>
        <nav className="header-nav">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/userProfile">User Profile</a>
            </li>
            <li>
              <a href="/notifications">Notifications</a>
            </li>
            <li>
              <a href="/logOut">Log Out</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  };

  export default Header