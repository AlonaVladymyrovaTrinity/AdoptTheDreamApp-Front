import React from "react";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Link } from "react-router-dom";
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
            <li className="navBar_item">
              <Link to="/home">Home</Link>
            </li>
            <li className="navBar_item">
              <Link to="/pets">Pets</Link>
            </li>
            <li className="navBar_item">
              <Link to="/donate">Donate</Link>
            </li>
            <li className="navBar_item">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="navBar_item">
              <Link to="/about">About</Link>
            </li>
          </ul>
          <div className="header_actions">
            <button className="header_search">
              <TbSearch size="2rem" />
            </button>
            {/* <button className="headers_likes">
            <TbHeart size="2rem" />
            </button> */}

            <button className="header_logIn">LogIn</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
