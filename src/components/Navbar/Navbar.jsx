import { useEffect, useState } from "react";
import { NavLink,Link } from "react-router-dom";
export default function Navbar() {
  const [toggle,setToggle]=useState(false);
  useEffect(()=>{window.addEventListener("scroll",(()=>{
    if(window.scrollY>20){
      setToggle(true);
      }
      else{
        setToggle(false);
        }

  }))},[toggle])
  return (
    <>
      <nav className={` fixed top-0 left-0 w-full z-50  border-gray-200 bg-main transition-all duration-300 ${toggle?"":"py-4"}`}>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center md:text-4xl text-2xl font-bold whitespace-nowrap text-white">
              START FRAMEWORK
            </span>
          </Link>
          <button
            data-collapse-toggle="bar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="bar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="bar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4  rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  bg-main">
              <li>
                <NavLink
                  to="/about"
                  className={`block  text-white p-2 uppercase rounded-md font-bold `}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/portfolio"
                  className={`block  text-white p-2 uppercase rounded-md font-bold 
                     `}
                >
                  Portfolio
                </NavLink>
              </li>
              <li>
                {" "}
                <NavLink
                  to="/contact"
                  className={`block  text-white p-2 uppercase rounded-md font-bold `}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
