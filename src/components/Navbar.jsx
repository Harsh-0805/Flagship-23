import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
// import { logo, menu, close } from "../assets";
import logo from "../assets/ecell-white-img.png";

import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "/#" },
  { name: "About", href: "/#about" },
  // { name: "Initiatives", href: "/#initiatives" },
  // { name: "Events", href: "/#events" },
  { name: "Speakers", href: "/#speaker" },
  { name: "Sponsors", href: "/sponsors" },
  { name: "Register", href: "/#contact" },
];
const Navbar = () => {

  
  // const [active, setActive] = useState("");
  // const [toggle, setToggle] = useState(false);
  return (
    <Popover className="relative w-full bg-black z-50">
      <div className="px-5 flex items-center justify-between py-2 md:justify-start md:space-x-10">
        <div className="flex gap-4 justify-start">
          <a href="https://www.ecellvnit.org/">
            <span className="sr-only">E-Cell VNIT</span>
            <img
              height={150}
              width={150}
              priority
              src={logo}
              alt="E-Cell VNIT"
            />
          </a>
        </div>
        <div className="-my-2 mr-2 md:hidden">
          <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span className="sr-only">Open menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>
        <Popover.Group
          as="nav"
          className="w-full hidden space-x-10 md:flex md:justify-end pr-10"
        >
          {navigation.map((item, idx) => (
            <a
              key={idx}
              className="text-xs lg:text-lg uppercase text-white hover:text-gray-300"
              href={item.href}
            >
              {item.name}
            </a>
          ))}
        </Popover.Group>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    height={100}
                    width={100}
                    priority
                    src={logo}
                    alt="E-Cell VNIT"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">
                      Close menu
                    </span>
                    <XMarkIcon
                      className="h-6 w-6"
                      aria-hidden="true"
                    />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {navigation.map((item, idx) => (
                    <Popover.Button
                      as="a"
                      key={idx}
                      className="text-md uppercase text-gray-900 hover:text-gray-700"
                      href={item.href}
                    >
                      {item.name}
                    </Popover.Button>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default Navbar;
