import React from "react";
import { Link, useLocation } from "react-router-dom";
import { BsFillStarFill } from "react-icons/bs";

const Navbar = () => {
  let location = useLocation();

  return (
    <header>
      <nav className="select-none">
        <ul className="flex flex-row p-4">
          <li className="mr-auto ml-2 logo">
            <Link to="/" className="flex">
              Khybots <BsFillStarFill className="logo-star" />
            </Link>
          </li>
          <li className={location.pathname === "/" ? "active" : ""}>
            <Link to="/">Home</Link>
          </li>
          <li className={location.pathname === "/about" ? "active" : ""}>
            <Link to="/about">About</Link>
          </li>
          {/* <li className={location.pathname === "/shop" ? "active" : ""}>
            <Link to="/shop">Shop</Link>
          </li> */}
          <li className={location.pathname === "/register" ? "active" : ""}>
            <Link to="/register">Create Account</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
