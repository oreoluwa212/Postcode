import React from "react";
import "../index.scss";
import { Logo } from "../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faLocationDot, faSearch } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <>
      <div className="nav-bar-container">
        <div className="navbar-menu">
          <div className="logo">
            <img src={Logo} alt="" />
            <div className="search">
              <input type="text" placeholder="Postcode or place name" />
              {/* <FontAwesomeIcon className='search-icon' icon={faSearch}/> */}
            </div>
          </div>

          <div class="nav-list">
            <ul class="right">
              <li class="has-dropdown not-click">
                <a href="#">Postcode Lists</a>
                <FontAwesomeIcon className="arrow-down" icon={faCaretDown} />
              </li>
              <li class="has-dropdown not-click">
                <a href="#">Postcode Maps</a>
                <FontAwesomeIcon className="arrow-down" icon={faCaretDown} />
              </li>
              <li class="has-dropdown not-click">
                <a href="#">Nearest Postcode</a>
              </li>
              <li class="has-dropdown not-click">
                <a href="#">Postcode Lottery</a>
              </li>
              <li class="has-dropdown not-click">
                <a href="#">Help and Information</a><FontAwesomeIcon className="arrow-down" icon={faCaretDown} />
              </li>
            </ul>
          </div>
          <div className="geolocation-btn">
            <button>
              <FontAwesomeIcon className="location-dot" icon={faLocationDot} />{" "}
              Use My Geolocation
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
