import React from "react";
import { NavLink } from "react-router-dom";
import { TbCat } from "react-icons/tb";
import { TbDog } from "react-icons/tb";
import { TbSearch } from "react-icons/tb";
// import { TbHeart } from "react-icons/tb";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header_wrap">
          <div className="logo_wrapper">
            <div className="logo">
              <TbCat size="2rem" />
              <TbDog size="2rem" />
            </div>
          </div>
          <ul className="header_navBar">
            <li className="navBar_item">Home</li>
            <li className="navBar_item">Pets</li>
            <li className="navBar_item">Donate</li>
            <li className="navBar_item">Contact</li>
            <li className="navBar_item">About</li>
          </ul>
          <div className="header_actions">
            <div className="header_search">
              <TbSearch size="2rem" />
            </div>
            {/* <div className="headers_likes">
              <TbHeart size="2rem" />
            </div> */}
            <button className="header_logIn">LogIn</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
