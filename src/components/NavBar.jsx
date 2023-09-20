import React from "react";
import "../index.scss";
import { Logo } from "../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <>
      <div className="navbar-menu">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="search">
          <input type="text" placeholder="Postcode or place name" />
          {/* <FontAwesomeIcon className='search-icon' icon={faSearch}/> */}
        </div>
        <div class="nav-list">
          <ul class="right">
            <li class="has-dropdown not-click">
              <a href="#">Help and Information</a>
              <ul class="dropdown">
                <li>
                  <a href="#">About this website</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
