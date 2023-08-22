import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
// import { logo, menu, close } from "../assets";
import logo from "../assets/ecell-white-img.png";
const Navbar = () => {
  // const [active, setActive] = useState("");
  // const [toggle, setToggle] = useState(false);
  return (
    //   <div
    //     className={`${styles.paddingX} w-full flex items-center fixed py-5 top-0 z-20 bg-primary`}
    //   >
    //     <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
    //       <Link
    //         to="/"
    //         className="flex items-center gap-2"
    //         onClick={() => {
    //           setActive("");
    //           window.scrollTo(0, 0);
    //         }}
    //       >
    //         <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
    //         <p className="text-white text-[18px] font-bold cursor-pointer flex">
    //           Harsh &nbsp;
    //           <span className="sm:block hidden">| Web Developer</span>
    //         </p>
    //       </Link>
    //       <ul className="list-none hidden sm:flex flex-row gap-10">
    //         {navLinks.map((Link) => (
    //           <li
    //             key={Link.id}
    //             className={`${
    //               active === Link.title ? "text-white" : "text-secondary"
    //             } hover:text-white text-[18px] font-medium cursor-pointer`}
    //             onClick={() => {
    //               setActive(Link.title);
    //             }}
    //           >
    //             <a href={`#${Link.id}`}>{Link.title}</a>
    //           </li>
    //         ))}
    //       </ul>
    //       <div className="sm:hidden flex flex-1 justify-end items-center">
    //         <img
    //           src={toggle ? close : menu}
    //           alt="menu"
    //           className="w-[28px] h-[28px] object-contain cursor-pointer"
    //           onClick={() => setToggle(!toggle)}
    //         />
    //         <div
    //           className={`${
    //             !toggle ? "hidden" : "flex"
    //           } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
    //         >
    //           <ul className="list-none flex justify-end items-start flex-col gap-4">
    //             {navLinks.map((Link) => {
    //               <li
    //                 key={Link.id}
    //                 className={`${
    //                   active === Link.title ? "text-white" : "text-secondary"
    //                 } font-poppins font-medium cursor-pointer text-[16px]`}
    //                 onClick={() => {
    //                   setToggle(!toggle);
    //                   setActive(Link.title);
    //                 }}
    //               >
    //                 <a href={`#${Link.id}`}>{Link.title}</a>
    //               </li>;
    //             })}
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    <nav class="bg-[#131110]">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://www.ecellvnit.org"
          class="flex items-center"
          target="_blank"
        >
          <img src={logo} class="mr-3" alt="Flowbite Logo" width={100} />
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 text-white md:flex-row md:space-x-8 md:mt-0">
            <li>
              <a
                href="#"
                class="block cursor-pointer py-2 pl-3 pr-4 text-whiterounded md:bg-transparent md:p-0"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                class="block cursor-pointer py-2 pl-3 pr-4  md:hover:bg-transparent md:border-0 md:p-0"
              >
                About
              </a>
            </li>
            <li>
              <a href="#" class="block cursor-pointer py-2 pl-3 pr-4 md:p-0">
                Services
              </a>
            </li>
            <li>
              <a
                href="#pricing"
                class="block cursor-pointer py-2 pl-3 pr-4 md:p-0"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#contact"
                class="block cursor-pointer py-2 pl-3 pr-4 md:p-0"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
