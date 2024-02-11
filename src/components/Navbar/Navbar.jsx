/** @format */
// import { Link } from "react-scroll";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import { slide as Menu } from 'react-burger-menu'
import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai'
const Navbar = () => {
  const [shouldOpen, setShouldOpen] = useState(false)
  return (
    <header className="z-30">
      <div className="w-full blur1 mx-auto py-auto flex  fixed  py-5 bg-background items-center   z-10  md:gap-10  max-md:justify-between max-md:px-10 justify-around max-lg:w-full ">
        <button className="px-3 bg-[#1976D2] hover:bg-sky-700 font-bold text-white py-1 rounded-md">
          ANDO NIRINA
        </button>
        <nav className="space-x-4 flex max-md:hidden max-lg:space-x-2  ">
          {[
            {
              name: "HOME",
              url: "home"

            } ,
            {
              name: "ABOUT ME",
              url: "about"

            }, {
              name: "EXPERIENCES",
              url: "experiences"
            }, {
              name: "SKILLS",
              url: "skills"
            }, {
              name: "PROJECTS",
              url: "projects"
            }, {
              name: "CONTACT",
              url: "contact"
            }
          ].map((item, i) => (
            // <a href={url} key={title} ></a>
            <Link
              activeClass="active"
              activeStyle={{color: "#1976D2"}}
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

        <div onClick={() => setShouldOpen(val => !val)} className="w-10 cursor-pointer h-10  flex justify-center items-center md:hidden ">
          <AiOutlineMenu className='text-[32px] text-white' />
        </div>
      </div>

      <div className='md:hidden'>
        <Menu isOpen={shouldOpen} className='flex flex-col gap-4 bg-slate-900 ' width={200} right  >
          {[
            {
              name: "HOME",
              url: "home"

            } , 
             {
              name: "ABOUT ME",
              url: "about"

            }
            , {
              name: "EXPERIENCES",
              url: "experiences"
            }, {
              name: "SKILLS",
              url: "skills"
            }, {
              name: "PROJECTS",
              url: "projects"
            }, {
              name: "CONTACT",
              url: "contact"
            }
          ].map((item, i) => (
            // <a href={url} key={title} ></a>
            <div className='py-3 flex pl-5'>

              <Link
                activeClass="active"
                to={item.url}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                key={i}
                onClick={()=>{
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
