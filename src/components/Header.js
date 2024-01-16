import React from "react";
import "../assests/header.css";

function Header() {
  return (
    <header class="header">
      <div class="menu-icon">&#9776;</div>
      <div class="logo">Logo</div>
      <div class="user-info">
        <button class="role">Admin</button> | <span class="time">10:27</span>
      </div>
    </header>
  );
}

export default Header;
