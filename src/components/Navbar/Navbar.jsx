/** @format */
// import { Link } from "react-scroll";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
import { slide as Menu } from "react-burger-menu";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  const [shouldOpen, setShouldOpen] = useState(false);
  const handleOnClose = () => setShouldOpen(false);
  return (
    <header className="z-30">
      <div className="w-full  blur1 mx-auto flex  fixed bg-background items-center   z-10  md:gap-10  max-md:justify-between max-sm:px-2 justify-around overflow-x-hidden py-3 ">
        <button className="px-3 bg-[#1976D2] hover:bg-sky-700 font-bold text-white py-1 rounded-md">
          ANDO NIRINA
        </button>
        <nav className=" max-md:hidden ">
          {[
            {
              name: "HOME",
              url: "home",
            },
            {
              name: "ABOUT ME",
              url: "about",
            },
            {
              name: "EXPERIENCES",
              url: "experiences",
            },
            {
              name: "SKILLS",
              url: "skills",
            },
            {
              name: "PROJECTS",
              url: "projects",
            },
            {
              name: "CONTACT",
              url: "contact",
            },
          ].map((item, i) => (
            // <a href={url} key={title} ></a>
            <Link
              activeClass="active"
              activeStyle={{ color: "#1976D2" }}
              to={item.url}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              key={i}
              // onSetActive={handleSetActive}
              className="rounded-lg cursor-pointer  px-3 py-2 text-white  font-semibold text-sm hover:text-[#1976D2]"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div
          onClick={() => setShouldOpen((val) => !val)}
          className="w-10 cursor-pointer h-10 flex justify-center items-center md:hidden "
        >
          <AiOutlineMenu className="text-[32px] text-white" />
        </div>
      </div>

      <div className="md:hidden">
        <Menu
          onClose={handleOnClose}
          isOpen={shouldOpen}
          className="flex flex-col gap-4 bg-slate-900 "
          width={200}
          right
        >
          {[
            {
              name: "HOME",
              url: "home",
            },
            {
              name: "ABOUT ME",
              url: "about",
            },
            {
              name: "EXPERIENCES",
              url: "experiences",
            },
            {
              name: "SKILLS",
              url: "skills",
            },
            {
              name: "PROJECTS",
              url: "projects",
            },
            {
              name: "CONTACT",
              url: "contact",
            },
          ].map((item, i) => (
            // <a href={url} key={title} ></a>
            <div key={i} className="py-3 flex pl-5">
              <Link
                activeClass="active"
                to={item.url}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={() => {
                  setShouldOpen(false);
                }}
                className="rounded-lg cursor-pointer px-3 py-2 text-white  font-semibold text-sm hover:text-[#1976D2]"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </Menu>
      </div>
    </header>
  );
};

export default Navbar;
