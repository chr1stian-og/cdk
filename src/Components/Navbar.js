import React from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { Link } from "react-router-dom";
import UserProfile from "../Components/UserProfile";

function Navbar() {
  function showMenu() {
    var list = document.querySelector("ul");
    var e = document.querySelector("#menu");

    if (e.name == null) {
      e.name = "menu";
    }

    if (e.name === "menu") {
      e.name = "close";
      list.classList.remove("top-[-400px]");
      list.classList.remove("opacity-0");
      // list.classList.remove("absolute");
    } else {
      e.name = "menu";
      list.classList.add("top-[-400px]");
      list.classList.add("opacity-0");
      // list.classList.add("absolute");
    }
  }

  function closeNavbar() {
    var e = document.querySelector("#menu");
    var list = document.querySelector("ul");
    e.name = "close";
    list.classList.add("top-[-400px]");
    list.classList.add("opacity-0");
  }

  return (
    <>
      {/* <nav className="bg-white shadow md:flex md:items-center md:justify-between m-1 p-2"> */}
      <nav className="bg-white shadow md:flex md:items-center md:justify-between p-2 m-2">
        <div className="flex justify-between items-center">
          <span className="text-2xl cursor-pointer">
            <h1
              onClick={() => window.open("http://localhost:3000/", "_self")}
              className="text-4xl hover:text-pink-900 duration-500"
            >
              cdk
            </h1>
          </span>
          <span className="text-4xl cursor-pointer md:hidden block">
            <h3 name="menu" id="menu" onClick={showMenu}>
              =
            </h3>
          </span>
        </div>
        {/* <ul className="md:flex md:items-center md:z-auto md:static absolute bg-white border-2 rounded-md border-pink-900 sm:border-pink-100 md:border-transparent w-60 sm:inset-x-2/4 inset-x-2/4 md:w-auto md:py-0 md:pl-0 md:opacity-100 opacity-100 top-[-400px] transition-all ease-in duration-500"> */}
        <ul className="md:flex md:items-center md:z-auto md:static absolute bg-white border-2 rounded-md border-pink-900 sm:border-pink-100 md:border-transparent w-48 sm:inset-x-2/4 inset-x-2/4 md:w-auto md:py-0 md:pl-0 md:opacity-100 opacity-100 top-[-400px] transition-all ease-in duration-500">
          <li className="mx-5 my-6 md:my-0 md:m-2 flex justify-end mr-10">
            <Link to="/">
              <h1
                onClick={closeNavbar}
                className="text-black hover:text-pink-900 duration-500 text-2xl"
              >
                Home
              </h1>
            </Link>
          </li>
          <li className="mx-3 md:m-4 my-6 md:my-0 flex justify-end mr-10">
            <Link to="/services">
              <h1
                onClick={closeNavbar}
                className="text-black hover:text-pink-900 duration-500 text-2xl"
              >
                Services
              </h1>
            </Link>
          </li>
          <li className="mx-3 md:m-4 my-6 md:my-0 flex justify-end mr-10">
            <Link to="/about">
              <h1
                onClick={closeNavbar}
                className="text-black hover:text-pink-900 duration-500 text-2xl"
              >
                About
              </h1>
            </Link>
          </li>
          <li className="mx-3 md:m-4 my-6 md:my-0 flex justify-end mr-10">
            <Link to="/contact">
              <h1
                onClick={closeNavbar}
                className="text-black hover:text-pink-900 duration-500 text-2xl"
              >
                Contact
              </h1>
            </Link>
          </li>
          <li className="mx-3 md:m-4 my-6 md:my-0 flex justify-end mr-10">
            <div className="flex m-1">
              <LoginButton
                onClick={closeNavbar}
                class_name="text-pink-500 hover:bg-transparent md:hover:bg-purple-600 md:hover:text-white  hover:text-pink-900 text-2xl duration-500 md:bg-pink-500 md:rounded-full md:text-white md:px-4 md:py-1 md:text-lg"
              />
              <LogoutButton
                onClick={closeNavbar}
                class_name="text-pink-500 hover:bg-transparent md:hover:bg-purple-600 md:hover:text-white  hover:text-pink-900 text-2xl duration-500 md:bg-pink-500 md:rounded-full md:text-white md:px-4 md:py-1 md:text-lg"
              />
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
