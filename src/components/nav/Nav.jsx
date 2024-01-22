import React, { useState } from "react";
import "./nav.css";
import { GoSearch, GoX } from "react-icons/go";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CiMenuBurger } from "react-icons/ci";
import { NavLink } from "react-router-dom";
function Nav() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(false);
  return (
    <div className="nav ">
      <div className="delivery">delivery in 2-4 days</div>
      {search ? (
        <div className="search-dialog" style={{ color: "white" }}>
          <input type="text" placeholder="Search" />
          <GoX onClick={() => setSearch(false)} size={25} className="icon" />
        </div>
      ) : (
        <div className="navbar container">
          <div className="search">
            {open ? (
              <GoX
                className="icon lap-show"
                onClick={() => setOpen(!open)}
                size={25}
              />
            ) : (
              <CiMenuBurger
                className="icon lap-show"
                onClick={() => setOpen(!open)}
                size={25}
              />
            )}
            <div className={`lap-menu lap-show ${open && "open-lm"}`}>
              <NavLink onClick={() => setOpen(false)} to="/">
                Home
              </NavLink>
              <NavLink onClick={() => setOpen(false)} to="/catalog">
                Catalog
              </NavLink>
              <NavLink onClick={() => setOpen(false)} to="/contacts">
                Contacts
              </NavLink>
            </div>
            <div className="links lap-hide">
              <NavLink to="/">home</NavLink>
              <NavLink to="/catalog">Catalog</NavLink>
              <NavLink to="/contacts">Contacts</NavLink>
            </div>
            <div style={{ color: "black" }}> m</div>
          </div>
          <div className="logo">
            <img
              src="https://fourteen-eg.com/cdn/shop/files/IMG_9618.jpg?v=1705147532&width=600"
              alt=""
            />
          </div>
          <div className="search">
            <div className="lap-hide" style={{ color: "black" }}>
              m
            </div>
            <div className="lap-hide" style={{ color: "black" }}>
              m
            </div>
            <div className="lap-hide" style={{ color: "black" }}>
              m
            </div>
            <div className="lap-hide" style={{ color: "black" }}>
              m
            </div>
            <div className="lap-hide" style={{ color: "black" }}>
              m
            </div>
            <GoSearch
              size={22}
              className="icon"
              onClick={() => setSearch(true)}
            />
            <HiOutlineShoppingBag size={22} className="icon" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Nav;
